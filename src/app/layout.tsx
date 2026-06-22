import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bashntech.com"),
  title: "BashNTech | Websites, Data, AI and More for Local Businesses",
  description:
    "BashNTech helps local businesses grow and operate better with custom websites, data analysis, AI integration, process efficiency, and targeted advertising.",
  keywords: [
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
    title: "BashNTech | Websites, Data, AI and More for Local Businesses",
    description:
      "Custom websites, data analysis, AI integration, and advertising for businesses that want to grow without getting buried in the tech.",
    type: "website",
    siteName: "BashNTech",
    url: "https://bashntech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BashNTech | Websites, Data, AI and More for Local Businesses",
    description:
      "Custom websites, data analysis, AI integration, and advertising for businesses that want to grow without getting buried in the tech.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
