import type { Metadata } from "next"
import FeaturedOffer from "@/components/FeaturedOffer"

export const metadata: Metadata = {
  title: "Free Consultation",
  description:
    "Request a free, no-pressure website or AI consultation from BashNTech. We reply within 1 business day.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return <FeaturedOffer isPage />
}
