import { NextRequest, NextResponse } from "next/server"

/**
 * Strict Content Security Policy with a per-request nonce.
 *
 * Design notes:
 * - `script-src 'self' 'nonce-<nonce>'` — Next.js inline bootstrap/RSC scripts
 *   are served with this nonce; all other executable scripts must be same-origin.
 *   We intentionally do NOT use 'strict-dynamic' because the site sits behind
 *   Cloudflare, which injects a same-origin `/cdn-cgi/.../email-decode.min.js`
 *   (no nonce) for the Footer mailto link. 'self' permits that same-origin script
 *   while still forbidding any inline or cross-origin script execution.
 * - No 'unsafe-eval' and no 'unsafe-inline' on script-src.
 * - `style-src 'self' 'unsafe-inline'` is the one documented, unavoidable
 *   relaxation: Next.js injects critical inline <style> blocks and framer-motion
 *   writes inline style attributes at runtime. Inline styles are not a script
 *   execution vector; nonce/hash for these is impractical with this stack.
 */
function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://*.vercel-insights.com https://*.vercel-scripts.com",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ")
}

export function proxy(request: NextRequest) {
  // Web Crypto + btoa work in both the Edge and Node.js middleware runtimes
  // (Buffer is not available on Edge).
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  const nonce = btoa(String.fromCharCode(...bytes))

  const csp = buildCsp(nonce)

  // Pass the nonce + CSP forward on the request so Next.js can read the nonce
  // and apply it to its own inline scripts.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)
  requestHeaders.set("Content-Security-Policy", csp)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  // Enforce the same policy on the response delivered to the browser.
  response.headers.set("Content-Security-Policy", csp)
  return response
}

export const config = {
  matcher: [
    /*
     * Apply to HTML documents only. Skip Next static assets, the image
     * optimizer, and static files so they stay cacheable and don't pay the
     * per-request nonce cost. Prefetch requests are also skipped.
     */
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml|json|webmanifest)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
}
