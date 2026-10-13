"use client"

import { motion } from "framer-motion"
import { Monitor, BrainCircuit, Check, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

type Pillar = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  items: string[]
  href: string
  cta: string
}

const pillars: Pillar[] = [
  {
    icon: Monitor,
    eyebrow: "Get found. Get the call.",
    title: "Websites That Bring In Business",
    description:
      "No website yet, or one that isn't pulling its weight? We build fast, good-looking sites that show up on Google and turn visitors into phone calls, bookings, and quote requests.",
    items: [
      "Custom website design & development",
      "Redesigns of outdated or slow sites",
      "Local SEO & Google visibility",
      "Online booking, ordering & quote forms",
      "Targeted ad campaigns",
      "Ongoing support & maintenance",
    ],
    href: "/websites",
    cta: "Learn more about websites",
  },
  {
    icon: BrainCircuit,
    eyebrow: "Work smarter, not longer.",
    title: "AI Consulting & Automation",
    description:
      "Most small businesses lose hours every week to scheduling, data entry, and paperwork. We find where that time goes and build AI tools that handle it for you, without you having to become a tech expert.",
    items: [
      "Custom AI models built on your own data",
      "Crew & subcontractor scheduling",
      "Paperwork, invoice & form automation",
      "AI assistants for calls, chat & email",
      "Data analysis & live dashboards",
      "Plain-English AI strategy for your business",
    ],
    href: "/ai-consulting",
    cta: "Learn more about AI consulting",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">What we do</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-5 tracking-tight">
            Two ways we help your <span className="marker">business grow</span>
          </h2>
          <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            A website brings customers in the door. AI and automation keep the
            back office from burying you once they do. We handle both.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="relative flex flex-col bg-cream border border-sand-dark rounded-3xl p-7 sm:p-9"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-brand-tint rounded-2xl flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-brand" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-ink-soft text-sm">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="text-ink font-semibold text-2xl tracking-tight">{pillar.title}</h3>
                </div>
              </div>

              <p className="text-ink-soft leading-relaxed mb-6">{pillar.description}</p>

              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-3 mb-8">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink text-sm">
                    <Check className="w-4 h-4 text-warm flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={pillar.href}
                className="group mt-auto inline-flex items-center gap-2 text-brand hover:text-brand-dark font-semibold transition-colors"
              >
                {pillar.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
