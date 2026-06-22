"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, Users, Smartphone, Shield, HeartHandshake, Bot } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Built for Real-World Businesses",
    description:
      "We understand the difference between a restaurant rush and a server crash. We build for businesses that can't afford downtime or bad first impressions.",
  },
  {
    icon: CheckCircle2,
    title: "Design That Converts Visitors into Customers",
    description:
      "A pretty website that doesn't bring in leads is just expensive wall art. Every layout choice we make is about driving action — calls, bookings, forms.",
  },
  {
    icon: Bot,
    title: "AI and Automation When It Actually Helps",
    description:
      "We don't add AI just because it's trendy. We add it when it saves you real time or makes you money — like chatbots that capture leads while you sleep.",
  },
  {
    icon: Zap,
    title: "No Bloated Corporate Nonsense",
    description:
      "No 12-week discovery phases. No 40-slide decks. No mystery pricing. We move fast, communicate straight, and build what you actually need.",
  },
  {
    icon: Smartphone,
    title: "Fast, Mobile-First by Default",
    description:
      "Over 70% of your customers are on a phone. Every site we build is optimized for speed and mobile first — not as an afterthought.",
  },
  {
    icon: HeartHandshake,
    title: "We Don't Disappear After Launch",
    description:
      "Most agencies hand you a site and vanish. We stick around — updates, fixes, growth support. You get a partner, not just a vendor.",
  },
]

export default function WhyBashNTech() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
            Why BashNTech
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Different in the Ways{" "}
            <span className="text-gradient">That Matter</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            You've probably been burned by an agency that over-promised and
            under-delivered. We're not that. Here's the difference.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group relative flex gap-4 p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-sky-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center group-hover:bg-sky-500/18 group-hover:border-sky-500/40 transition-all duration-300">
                <reason.icon className="w-5 h-5 text-sky-400" strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-1.5 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                  {reason.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent origin-center"
        />
      </div>
    </section>
  )
}
