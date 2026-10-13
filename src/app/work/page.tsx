import type { Metadata } from "next"
import Portfolio from "@/components/Portfolio"
import ClientCards from "@/components/ClientCards"
import Network from "@/components/Network"
import Reviews from "@/components/Reviews"
import FinalCTA from "@/components/FinalCTA"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See real businesses running on websites built by BashNTech, from Northern Virginia to California.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <>
      <Portfolio isPage />

      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-10">
            Take a look at their sites
          </h2>
          <ClientCards />
        </div>
      </section>

      <Reviews />
      <Network />
      <FinalCTA />
    </>
  )
}
