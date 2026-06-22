"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const ThreeDHeroObject = dynamic(() => import("@/components/ThreeDHeroObject"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-sky-500/20 animate-pulse" />
    </div>
  ),
})

const circuitPaths = [
  "M 0 120 L 80 120 L 80 60 L 200 60",
  "M 300 0 L 300 80 L 400 80 L 400 160 L 500 160",
  "M 500 250 L 420 250 L 420 180 L 300 180",
  "M 0 300 L 100 300 L 100 350 L 250 350",
]

const ease = "easeOut" as const

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  }
}

function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgb(2 6 23 / 0.75) 100%)" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-700/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-3xl" />

      {/* Circuit SVG traces */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        {circuitPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{
              animation: `circuit-flow ${3 + i * 0.8}s ease-in-out ${i * 1.2}s infinite`,
            }}
          />
        ))}
      </svg>

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
        style={{ animation: "scan-line 8s linear infinite", top: 0 }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Text Content */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <motion.div {...fadeIn(0.1)} className="inline-flex items-center gap-2 w-fit">
              <span className="flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Built for Local Business
              </span>
            </motion.div>

            {/* BashNTech logo */}
            <motion.div {...fadeIn(0.2)}>
              <Image
                src="/logo8.png"
                alt="BashNTech Logo"
                width={200}
                height={56}
                className="object-contain h-[48px] w-auto"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeIn(0.3)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Websites Built to{" "}
              <span className="text-gradient-shimmer">Work as Hard</span>{" "}
              as You Do
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeIn(0.45)}
              className="text-slate-300 text-lg leading-relaxed max-w-xl"
            >
              BashNTech builds rugged, high-performing websites, automation
              systems, and AI tools for businesses that get their hands dirty.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeIn(0.6)} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="#featured-offer">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(14,165,233,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-sky-900/40 transition-all duration-300"
                >
                  Get a Free Website Audit
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <Link href="#services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-500/40 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300"
                >
                  See What We Build
                </motion.button>
              </Link>
            </motion.div>

          </div>

          {/* Right — 3D Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative h-[420px] lg:h-[560px] flex items-center justify-center"
          >
            {/* Glow behind 3D */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-sky-600/15 rounded-full blur-3xl animate-pulse-glow" />
            </div>
            <ThreeDHeroObject />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
