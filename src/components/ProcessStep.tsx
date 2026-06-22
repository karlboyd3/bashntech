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
    <div className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px hidden lg:block origin-left"
          style={{
            background: "linear-gradient(90deg, rgba(14,165,233,0.5), rgba(14,165,233,0.1))",
          }}
        />
      )}

      {/* Step circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-5"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center shadow-lg shadow-sky-900/40 animate-pulse-glow">
          <Icon className="w-8 h-8 text-white" strokeWidth={1.8} />
        </div>
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-950 border border-sky-500/50 flex items-center justify-center">
          <span className="text-sky-400 text-xs font-bold">{number}</span>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
