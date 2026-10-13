"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const promises = ["No long-term contracts", "Plain English, no tech jargon", "Free consultation to start"]

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-brand rounded-[2rem] px-6 py-14 sm:px-14 sm:py-16 text-center overflow-hidden"
        >
          {/* Soft decorative circles */}
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/8 pointer-events-none" aria-hidden />
          <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-white/6 pointer-events-none" aria-hidden />

          <h2 className="relative text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-white mb-5 tracking-tight leading-tight">
            Ready to get more customers and more time back?
          </h2>

          <p className="relative text-white/85 text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
            A website that brings in the calls, and AI that handles the busywork
            that comes after. Let&apos;s talk about what would make the biggest
            difference for your business.
          </p>

          <Link
            href="/contact"
            className="relative group inline-flex items-center gap-2.5 bg-white hover:bg-cream text-brand px-9 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            Let&apos;s Talk
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <ul className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-7 mt-10 text-white/90 text-sm">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-1.5">
                <Check className="w-4 h-4" strokeWidth={2.5} />
                {promise}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
