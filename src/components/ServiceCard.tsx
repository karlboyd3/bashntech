"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-slate-900/60 border border-sky-500/12 hover:border-sky-500/40 rounded-2xl p-6 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(14,165,233,0.12)]"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/0 group-hover:from-sky-500/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Top scanline on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/60 transition-all duration-500" />

      {/* Icon */}
      <div className="relative mb-5 w-12 h-12 bg-sky-500/10 group-hover:bg-sky-500/18 border border-sky-500/20 group-hover:border-sky-500/40 rounded-xl flex items-center justify-center transition-all duration-300">
        <Icon className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" strokeWidth={1.8} />
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md bg-sky-500/20 transition-opacity duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-2.5 group-hover:text-sky-50 transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
        {description}
      </p>

      {/* Bottom right accent dot */}
      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-500/0 group-hover:bg-sky-500/60 transition-all duration-300" />
    </motion.div>
  )
}
