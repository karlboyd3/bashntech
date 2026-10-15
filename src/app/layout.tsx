import type { Metadata } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

// Force dynamic rendering so Next.js injects the per-request CSP nonce
// (from src/proxy.ts) into its inline bootstrap/RSC scripts. Without this the
// page is statically prerendered and the nonce would never be applied, causing
// the strict CSP to block Next's own scripts.
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bashntech.com"),
  title: {
    default: "BashNTech | AI Consulting & Website Design for Small Businesses",
    template: "%s | BashNTech",
  },
  description:
    "BashNTech builds custom websites and AI tools for small businesses: AI consulting, custom models, crew and subcontractor scheduling, and paperwork automation that give you your time back.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI consulting for small business",
    "AI automation",
    "contractor scheduling software",
    "subcontractor scheduling",
    "paperwork automation",
    "custom AI models",
    "custom website design",
    "local business websites",
    "data analysis for small business",
    "AI integration for business",
    "business process efficiency",
    "digital advertising small business",
    "website maintenance and support",
    "small business tech",
    "local business digital solutions",
  ],
  authors: [{ name: "BashNTech" }],
  creator: "BashNTech",
  openGraph: {
    title: "BashNTech | AI Consulting & Website Design for Small Businesses",
    description:
      "Websites that win customers and AI that gives you your time back. AI consulting, automation, and web design for small businesses.",
    type: "website",
    siteName: "BashNTech",
    url: "https://www.bashntech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BashNTech | AI Consulting & Website Design for Small Businesses",
    description:
      "Websites that win customers and AI that gives you your time back. AI consulting, automation, and web design for small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      // Lets Next.js turn off CSS smooth scrolling while it jumps to the top
      // of a newly navigated page (otherwise you land mid-page).
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <JsonLd />
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
