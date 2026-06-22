"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
  badge?: string
  heading: string
  subheading?: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTASection({
  badge,
  heading,
  subheading,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {badge && (
        <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-5 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
        {heading}
      </h2>

      {subheading && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          {subheading}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href={primaryHref}>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(14,165,233,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg transition-all duration-300"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </Link>

        {secondaryText && secondaryHref && (
          <Link href={secondaryHref}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
            >
              {secondaryText}
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  )
}
