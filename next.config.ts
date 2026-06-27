import type { NextConfig } from "next"

// Static security headers applied to every route. The Content-Security-Policy
// is intentionally NOT set here — it requires a per-request nonce and is set in
// src/middleware.ts instead.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
]

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.68"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
