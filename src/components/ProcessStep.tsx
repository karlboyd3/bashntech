"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  number: number
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  isLast?: boolean
}

export default function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  delay = 0,
  isLast = false,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col"
    >
      {/* Connector line */}
      {!isLast && (
        <div
          className="absolute top-7 left-16 right-0 border-t-2 border-dashed border-sand-dark hidden lg:block"
          aria-hidden
        />
      )}

      <div className="relative w-14 h-14 rounded-2xl bg-white border border-sand-dark flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-brand" strokeWidth={1.8} />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-warm text-white text-xs font-bold flex items-center justify-center">
          {number}
        </span>
      </div>

      <h3 className="text-ink font-semibold text-xl mb-2">{title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed max-w-[240px]">{description}</p>
    </motion.div>
  )
}
