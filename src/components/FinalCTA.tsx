"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/50 via-slate-950 to-blue-950/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      {/* Animated pulse ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-96 h-96 rounded-full border border-sky-500/8 animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute inset-8 rounded-full border border-sky-500/6 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-sky-900/50 animate-pulse-glow">
            <Zap className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Ready for a Website That{" "}
          <span className="text-gradient-shimmer">
            Actually Pulls Its Weight?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop losing leads to a site that doesn't do anything. Let's build
          something that works as hard as you do and keeps working long after
          you clock out.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#featured-offer">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(14,165,233,0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-sky-900/50 transition-all duration-300"
            >
              Let&apos;s Build Something
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-slate-500 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            No long-term contracts
          </span>
          <span className="hidden sm:block">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Fast turnaround
          </span>
          <span className="hidden sm:block">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Free audit to start
          </span>
        </motion.div>
      </div>
    </section>
  )
}
