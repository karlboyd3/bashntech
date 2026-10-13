"use client"

import { motion } from "framer-motion"
import { Hammer, UtensilsCrossed, Stethoscope, Scissors, Home, Car, Building2, Truck } from "lucide-react"

const industries = [
  { icon: Hammer, label: "Contractors & subcontractors" },
  { icon: UtensilsCrossed, label: "Restaurants & food trucks" },
  { icon: Stethoscope, label: "Dental & medical offices" },
  { icon: Home, label: "Home services" },
  { icon: Scissors, label: "Salons & spas" },
  { icon: Car, label: "Auto shops" },
  { icon: Truck, label: "Delivery & field crews" },
  { icon: Building2, label: "Any local business" },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-warm text-sm font-semibold tracking-wide mb-3">Who we work with</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 tracking-tight leading-tight">
              Built for the people who <span className="marker">run the place</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-5">
              BashNTech isn&apos;t for Silicon Valley startups or big corporations.
              It&apos;s for the owner who opens up early, answers the phones,
              manages the schedule, and still has paperwork waiting at night.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              You don&apos;t need to know anything about tech. You tell us how
              your business works, and we handle the rest, in plain English.
            </p>
          </motion.div>

          {/* Right — Industries */}
          <div className="grid grid-cols-2 gap-3">
            {industries.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="flex items-center gap-3 bg-cream border border-sand-dark rounded-2xl px-4 py-4"
              >
                <span className="w-9 h-9 bg-white border border-sand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand" strokeWidth={1.8} />
                </span>
                <span className="text-ink text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
