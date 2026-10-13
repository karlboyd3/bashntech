import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import AIConsulting from "@/components/AIConsulting"
import FinalCTA from "@/components/FinalCTA"

export const metadata: Metadata = {
  title: "AI Consulting & Automation for Small Businesses",
  description:
    "Plain-English AI consulting for small businesses: crew and subcontractor scheduling, paperwork and invoice automation, custom models built on your data, AI assistants, and dashboards.",
  alternates: { canonical: "/ai-consulting" },
}

const faqs = [
  {
    q: "Do I need to be good with technology?",
    a: "No. You tell us how your business runs and where the time goes. We handle the technical side and explain everything in plain English. If you can use a smartphone, you can use what we build.",
  },
  {
    q: "Is AI going to replace my staff?",
    a: "That's not the goal. The point is to take repetitive work off your team's plate, like retyping forms, juggling the schedule, and answering the same questions, so they can spend their time on the work that actually needs a person.",
  },
  {
    q: "What kind of tasks can AI actually handle?",
    a: "Anything repetitive and rule-based is a good candidate: scheduling, data entry, reading and filing documents, drafting quotes and follow-up emails, answering common questions, and turning your numbers into reports. The free consultation is where we figure out which ones are worth automating for you.",
  },
  {
    q: "Will it work with the tools I already use?",
    a: "Usually, yes. We build around the software, spreadsheets, and apps you already have whenever we can, instead of making you switch everything.",
  },
  {
    q: "How much does it cost?",
    a: "Every business is different, so we start with a free consultation. After that you get a clear quote for the specific project before any work begins.",
  },
]

export default function AIConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI consulting"
        title={
          <>
            AI that does the <span className="marker">busywork</span> for you
          </>
        }
        intro="Most small businesses lose hours every week to scheduling, data entry, and paperwork. We find where that time goes and build AI tools that handle it, without you having to become a tech expert."
      />

      <AIConsulting showHeader={false} />

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">Common questions</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-10">
            Questions owners ask us
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-cream border border-sand-dark rounded-2xl px-6 py-5 open:bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-ink font-semibold text-lg [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-ink-soft flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-ink-soft leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
