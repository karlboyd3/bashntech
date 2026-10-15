"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Gauge, BrainCircuit, Mail } from "lucide-react"
import AuditForm from "@/components/AuditForm"

const auditItems = [
  { icon: Gauge, label: "Website Speed & Design" },
  { icon: Shield, label: "Google Visibility" },
  { icon: Clock, label: "Where Your Hours Go" },
  { icon: BrainCircuit, label: "What AI Could Take Over" },
]

export default function FeaturedOffer({ isPage = false }: { isPage?: boolean }) {
  return (
    <section
      id="featured-offer"
      className={`relative bg-sand overflow-hidden ${isPage ? "pt-36 pb-24 lg:pt-44" : "py-24"}`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Offer Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-warm text-sm font-semibold tracking-wide mb-3">No cost. No commitment.</p>

            {isPage ? (
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 tracking-tight leading-tight">
                Free website &amp; <span className="marker">AI consultation</span>
              </h1>
            ) : (
              <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 tracking-tight leading-tight">
                Free website &amp; <span className="marker">AI consultation</span>
              </h2>
            )}

            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              Tell us what you need, whether that&apos;s a website that brings in
              more customers or a way to stop losing hours to scheduling and
              paperwork. We&apos;ll look at your business and show you exactly what
              we&apos;d improve. No sales pitch. Just honest feedback.
            </p>

            {/* What we check */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {auditItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-white border border-sand-dark rounded-xl px-4 py-3"
                >
                  <item.icon className="w-4 h-4 text-brand flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-ink text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-ink-soft">
              Prefer email?{" "}
              <a
                href="mailto:hello@bashntech.com"
                className="inline-flex items-center gap-1.5 text-brand hover:text-brand-dark font-semibold underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                hello@bashntech.com
              </a>
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-white border border-sand-dark rounded-3xl p-6 sm:p-8 shadow-[0_14px_40px_rgba(28,25,23,0.08)]">
              <h3 className="text-ink font-semibold text-xl mb-2">
                Request Your Free Consultation
              </h3>
              <p className="text-ink-soft text-sm mb-6">
                Fill this out and we&apos;ll get back to you within 1 business day.
              </p>

              <AuditForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
