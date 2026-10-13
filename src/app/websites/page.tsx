import type { Metadata } from "next"
import {
  Monitor,
  RefreshCw,
  Search,
  CalendarCheck,
  Megaphone,
  Wrench,
  Check,
} from "lucide-react"
import PageHeader from "@/components/PageHeader"
import Process from "@/components/Process"
import FinalCTA from "@/components/FinalCTA"

export const metadata: Metadata = {
  title: "Website Design for Small Businesses",
  description:
    "Custom websites for small and local businesses: new builds, redesigns, local SEO, online booking and quote forms, ads, and ongoing support from BashNTech.",
  alternates: { canonical: "/websites" },
}

const offerings = [
  {
    icon: Monitor,
    title: "Custom website design",
    text: "A site designed around your business, not a template. Clear about what you do, easy to navigate, and built to get people to call, book, or order.",
  },
  {
    icon: RefreshCw,
    title: "Redesigns",
    text: "Already have a site that's slow, dated, or hard to use on a phone? We rebuild it so it reflects the quality of your work today.",
  },
  {
    icon: Search,
    title: "Local SEO & Google visibility",
    text: "We set your site up so Google understands who you are and where you work, and help you show up when nearby customers search.",
  },
  {
    icon: CalendarCheck,
    title: "Booking, ordering & quote forms",
    text: "Let customers book an appointment, place an order, or request a quote straight from your site, any time of day.",
  },
  {
    icon: Megaphone,
    title: "Targeted ad campaigns",
    text: "When you want more people faster, we run ads aimed at the customers most likely to call you, and show you what they bring in.",
  },
  {
    icon: Wrench,
    title: "Ongoing support & maintenance",
    text: "Updates, fixes, new pages, and seasonal changes. Once we build something, we stick around to keep it running.",
  },
]

const everySite = [
  "Looks great and works smoothly on phones",
  "Fast to load, even on a weak signal",
  "Clear buttons to call, book, or get a quote",
  "Set up so Google can find and understand it",
  "Written in plain language your customers use",
  "Easy to update as your business changes",
]

export default function WebsitesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Websites"
        title={
          <>
            Websites that <span className="marker">bring in business</span>
          </>
        }
        intro="No website yet, or one that isn't pulling its weight? We build sites that show up on Google and turn visitors into phone calls, bookings, and quote requests."
      />

      {/* What we build */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-12 max-w-2xl">
            What we build
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item) => (
              <div key={item.title} className="bg-cream border border-sand-dark rounded-3xl p-6">
                <span className="w-11 h-11 bg-brand-tint rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-brand" strokeWidth={1.8} />
                </span>
                <h3 className="text-ink font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every site includes */}
      <section className="bg-sand py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-warm text-sm font-semibold tracking-wide mb-3">The basics, done right</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-5">
              What every site we build gets
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Whatever your business, these are the things that make a
              website actually earn customers, and every project starts with them.
            </p>
          </div>
          <ul className="bg-white border border-sand-dark rounded-3xl p-7 sm:p-9 grid gap-4">
            {everySite.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="w-6 h-6 rounded-full bg-warm-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-warm" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <FinalCTA />
    </>
  )
}
