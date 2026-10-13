"use client"

import { motion } from "framer-motion"
import {
  CalendarClock,
  FileText,
  LineChart,
  MessageSquareText,
  LayoutDashboard,
  Mail,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

type UseCase = {
  icon: LucideIcon
  title: string
  before: string
  after: string
}

const useCases: UseCase[] = [
  {
    icon: CalendarClock,
    title: "Crew & Subcontractor Scheduling",
    before: "Hours on the phone lining up crews and subs, and a lost day when one trade shows up before the last one is finished.",
    after: "Jobs get sequenced by trade, site, and availability. Every crew and sub gets their schedule and job-site details automatically, including last-minute changes.",
  },
  {
    icon: FileText,
    title: "Paperwork That Fills Itself Out",
    before: "Retyping invoices, intake forms, and receipts into three different systems.",
    after: "AI reads the document, pulls out what matters, and files it where it belongs.",
  },
  {
    icon: LineChart,
    title: "Custom Models Built on Your Data",
    before: "Guessing how much to order or how many people to schedule next week.",
    after: "A model trained on your own history that forecasts busy days, inventory, and staffing.",
  },
  {
    icon: MessageSquareText,
    title: "An Assistant That Never Clocks Out",
    before: "Missed calls and the same five questions answered over and over.",
    after: "An AI assistant answers common questions and books appointments by chat or text, 24/7.",
  },
  {
    icon: Mail,
    title: "Quotes & Follow-Ups in Seconds",
    before: "Writing estimates and follow-up emails at the kitchen table after work.",
    after: "Drafts are ready from your notes in seconds. You review them and hit send.",
  },
  {
    icon: LayoutDashboard,
    title: "Your Numbers on One Screen",
    before: "Spreadsheets everywhere and no clear answer on what's actually making money.",
    after: "A live dashboard that shows revenue, jobs, and trends at a glance.",
  },
]

const steps = [
  { title: "Free consultation", text: "We talk through your day and where the hours go." },
  { title: "Find the time-wasters", text: "We pick the one or two tasks AI can take over first." },
  { title: "Build & test", text: "We build it around your existing tools, not the other way around." },
  { title: "Hand-off & support", text: "We train you and your team, then stick around." },
]

export default function AIConsulting({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section
      id="ai-consulting"
      className="relative py-24 bg-sand overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">AI consulting</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-5 tracking-tight">
            AI that does the <span className="marker">busywork</span> for you
          </h2>
          <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            You don&apos;t need to understand AI to benefit from it. You just need
            someone who understands your business. Here&apos;s what that looks like
            in practice.
          </p>
        </motion.div>
        )}

        {/* Use cases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              className="flex flex-col bg-white border border-sand-dark rounded-3xl p-6 shadow-[0_2px_10px_rgba(28,25,23,0.04)]"
            >
              <div className="w-11 h-11 bg-brand-tint rounded-2xl flex items-center justify-center mb-4">
                <useCase.icon className="w-5 h-5 text-brand" strokeWidth={1.8} />
              </div>
              <h3 className="text-ink font-semibold text-lg mb-4">{useCase.title}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p className="text-ink-soft">
                  <span className="block text-ink-soft/80 text-xs font-semibold uppercase tracking-wider mb-1">
                    Before
                  </span>
                  {useCase.before}
                </p>
                <p className="text-ink bg-brand-tint/60 rounded-xl px-3 py-2.5">
                  <span className="block text-brand text-xs font-semibold uppercase tracking-wider mb-1">
                    After
                  </span>
                  {useCase.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How an engagement works */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 bg-white border border-sand-dark rounded-3xl p-6 sm:p-8"
        >
          <h3 className="text-ink font-semibold text-xl mb-6">How an AI project works</h3>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-warm text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-ink font-semibold text-sm">{step.title}</p>
                  <p className="text-ink-soft text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 pt-6 border-t border-sand-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-ink">
              Not sure where AI fits in your business? That&apos;s exactly what the free consultation is for.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-colors duration-200"
            >
              Talk to Us About AI
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
