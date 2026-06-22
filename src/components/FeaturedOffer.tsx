"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Gauge, CheckCircle2 } from "lucide-react"
import AuditForm from "@/components/AuditForm"

const auditItems = [
  { icon: Gauge, label: "Site Speed Score" },
  { icon: Shield, label: "SEO & Visibility" },
  { icon: CheckCircle2, label: "Design & UX Review" },
  { icon: Clock, label: "Customer Flow Analysis" },
]

export default function FeaturedOffer() {
  return (
    <section
      id="featured-offer"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-slate-950 to-blue-950/30 pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Offer Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-5 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
              No Cost. No Commitment.
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Free Website{" "}
              <span className="text-gradient">Audit</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Not sure if your current website is costing you leads? We'll review
              your site, speed, design, SEO, and customer flow. Then we show you
              exactly what can be improved. No sales pitch. Just honest feedback.
            </p>

            {/* What we check */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {auditItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-sky-500/8 border border-sky-500/15 rounded-xl px-4 py-3"
                >
                  <item.icon className="w-4 h-4 text-sky-400 flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-slate-200 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-sky-500/15 rounded-2xl p-6 sm:p-8">
              {/* Top highlight bar */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

              <h3 className="text-white font-bold text-xl mb-2">
                Request Your Free Audit
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill this out and we'll get back to you within 1 business day.
              </p>

              <AuditForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
