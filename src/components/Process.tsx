"use client"

import { motion } from "framer-motion"
import { ClipboardList, Code2, Rocket, TrendingUp } from "lucide-react"
import ProcessStep from "@/components/ProcessStep"
import Link from "next/link"

const steps = [
  {
    icon: ClipboardList,
    title: "Audit",
    description: "We learn how your business runs, from your website to your daily workflow, and find what's holding you back.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "We build your website or AI tool fast, around the way you already work, with no tech jargon.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We launch it, test it on every device, and walk you and your team through using it.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "We track results and keep improving, so you keep getting more leads and saving more time.",
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-cream overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-5 tracking-tight">
            A simple process, <span className="marker">real results</span>
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            We don&apos;t drag things out. Four clear steps from &ldquo;I need
            help&rdquo; to &ldquo;this is working.&rdquo;
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
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
          className="mt-14"
        >
          <p className="text-ink-soft">
            Ready to get started?{" "}
            <Link href="/contact" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-4 transition-colors">
              Request a free consultation →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
