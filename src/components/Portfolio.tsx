"use client"

import { motion } from "framer-motion"
import ClientMap from "@/components/ClientMap"
import { publishedClients } from "@/data/clients"

export default function Portfolio({ isPage = false }: { isPage?: boolean }) {
  const hasClients = publishedClients.length > 0

  return (
    <section id="portfolio" className={`relative bg-white overflow-hidden ${isPage ? "pt-36 pb-24 lg:pt-44" : "py-24"}`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">Our work</p>
          {isPage ? (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink mb-5 tracking-tight">
              Businesses we&apos;ve <span className="marker">put on the map</span>
            </h1>
          ) : (
            <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-5 tracking-tight">
              Businesses we&apos;ve <span className="marker">put on the map</span>
            </h2>
          )}
          <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            {hasClients
              ? "Every pin is a real business running on a site we built, coast to coast. Tap one to go see it live."
              : "Real businesses running on sites we built."}
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClientMap />
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-ink-soft text-sm mt-10"
        >
          Every project is built around the business, never from a template.
        </motion.p>
      </div>
    </section>
  )
}
