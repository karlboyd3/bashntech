"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarCheck, FileCheck2, PhoneIncoming, Check } from "lucide-react"
import Link from "next/link"

const ease = [0.22, 1, 0.36, 1] as const

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  }
}

const schedule = [
  { time: "7:00", job: "Lot 14 · Framing", who: "Crew A" },
  { time: "9:30", job: "Lot 9 · Electrical", who: "Electric sub" },
  { time: "1:00", job: "Lot 14 · Plumbing", who: "Plumbing sub" },
]

/**
 * Illustration of the two halves of the business: a website lead coming in,
 * and AI quietly handling the schedule and the paperwork. Plain HTML so it
 * stays crisp, light, and readable.
 */
function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Soft backdrop */}
      <div className="absolute -inset-6 sm:-inset-10 bg-sand rounded-[2.5rem] -rotate-2" aria-hidden />

      <div className="relative flex flex-col gap-4">
        {/* Lead card */}
        <motion.div
          {...fadeIn(0.5)}
          className="self-end w-[88%] bg-white border border-sand-dark rounded-2xl shadow-[0_10px_30px_rgba(28,25,23,0.08)] p-4 flex items-center gap-3"
        >
          <span className="w-10 h-10 rounded-full bg-warm-tint text-warm flex items-center justify-center flex-shrink-0">
            <PhoneIncoming className="w-5 h-5" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-ink text-sm font-semibold">New bid request from your website</p>
            <p className="text-ink-soft text-xs">Office build-out · 4,200 sq ft · 2 min ago</p>
          </div>
        </motion.div>

        {/* Schedule card */}
        <motion.div
          {...fadeIn(0.65)}
          className="bg-white border border-sand-dark rounded-2xl shadow-[0_14px_40px_rgba(28,25,23,0.10)] p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-brand" strokeWidth={2} />
              <p className="text-ink font-semibold">Tuesday&apos;s job board</p>
            </div>
            <span className="text-[11px] font-semibold text-brand bg-brand-tint px-2.5 py-1 rounded-full">
              Built automatically
            </span>
          </div>
          <ul className="divide-y divide-sand-dark">
            {schedule.map((row) => (
              <li key={row.time} className="flex items-center gap-3 py-2.5 text-sm">
                <span className="w-12 text-ink-soft tabular-nums">{row.time}</span>
                <span className="flex-1 text-ink truncate">{row.job}</span>
                <span className="text-ink-soft text-xs bg-sand px-2 py-0.5 rounded-full">{row.who}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-soft">
            Trades sequenced across job sites. Every crew and sub already has their times and addresses.
          </p>
        </motion.div>

        {/* Paperwork card */}
        <motion.div
          {...fadeIn(0.8)}
          className="w-[80%] bg-white border border-sand-dark rounded-2xl shadow-[0_10px_30px_rgba(28,25,23,0.08)] p-4 flex items-center gap-3"
        >
          <span className="w-10 h-10 rounded-full bg-brand-tint text-brand flex items-center justify-center flex-shrink-0">
            <FileCheck2 className="w-5 h-5" strokeWidth={2} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-ink text-sm font-semibold">12 invoices filed for you</p>
            <p className="text-ink-soft text-xs">Read, sorted, and entered. No typing.</p>
          </div>
          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-12 items-center">

          {/* Left — Text Content */}
          <div className="flex flex-col gap-6">
            <motion.p
              {...fadeIn(0.1)}
              className="text-warm text-sm font-semibold tracking-wide"
            >
              Websites · AI Consulting · Automation
            </motion.p>

            <motion.h1
              {...fadeIn(0.2)}
              className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] font-semibold text-ink tracking-tight"
            >
              Websites that win customers.{" "}
              <span className="text-brand">AI that gives you your time&nbsp;back.</span>
            </motion.h1>

            <motion.p
              {...fadeIn(0.3)}
              className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              BashNTech builds websites that bring in business, and AI tools
              that take the busywork off your plate: crew and subcontractor
              scheduling, paperwork that fills itself out, and custom models built around
              how your business actually runs.
            </motion.p>

            <motion.div {...fadeIn(0.4)} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-4 rounded-full font-semibold text-base transition-colors duration-200"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-consulting"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand border border-sand-dark text-ink px-7 py-4 rounded-full font-semibold text-base transition-colors duration-200"
              >
                See What AI Can Do for You
              </Link>
            </motion.div>

            <motion.p {...fadeIn(0.5)} className="text-ink-soft text-sm">
              Free, no-pressure consultation. We reply within 1 business day.
            </motion.p>
          </div>

          {/* Right — Illustration */}
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
