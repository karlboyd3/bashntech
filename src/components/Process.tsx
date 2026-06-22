"use client"

import { motion } from "framer-motion"
import { ClipboardList, Code2, Rocket, TrendingUp } from "lucide-react"
import ProcessStep from "@/components/ProcessStep"

const steps = [
  {
    icon: ClipboardList,
    title: "Audit",
    description: "We dig into your current site, competitors, and goals to find exactly what's holding you back.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Our team builds your site fast with clean code, strong copy, and a design that earns trust.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Full deployment, SEO setup, speed optimization, and making sure everything works on every device.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "We track results and keep improving so your site gets better at bringing in leads over time.",
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-900/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Simple Process,{" "}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            We don't drag things out. Four clear steps from "I need a site" to
            "I'm getting leads."
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.title}
              number={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={i * 0.12}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm">
            Ready to get started?{" "}
            <a href="#featured-offer" className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 transition-colors">
              Request a free audit →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
