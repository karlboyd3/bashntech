"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { publishedClients } from "@/data/clients"
import ClientCards from "@/components/ClientCards"

/** Home-page preview of the client roster; the full map lives on /work. */
export default function WorkTeaser() {
  if (publishedClients.length === 0) return null

  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-warm text-sm font-semibold tracking-wide mb-3">Our work</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight">
              Real businesses, <span className="marker">coast to coast</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-brand hover:text-brand-dark font-semibold transition-colors"
          >
            See the map
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <ClientCards />
      </div>
    </section>
  )
}
