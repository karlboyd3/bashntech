"use client"

import { motion } from "framer-motion"
import { Hammer, UtensilsCrossed, Car, Leaf, Home, Wrench, Building2, TrendingUp } from "lucide-react"

const industries = [
  {
    icon: Hammer,
    label: "Contractors",
    description: "General contractors, electricians, plumbers, roofers — you do the hard work. Let your site do the selling.",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants",
    description: "Menu pages, online ordering integration, Google visibility, and a site that makes people hungry to visit.",
  },
  {
    icon: Car,
    label: "Auto Shops",
    description: "Booking forms, service menus, reviews front and center. Built to bring in car owners who need you now.",
  },
  {
    icon: Leaf,
    label: "Landscaping",
    description: "Show off your work, capture quote requests, and rank in searches before your competition does.",
  },
  {
    icon: Home,
    label: "Home Services",
    description: "HVAC, cleaning, painting, pest control — any service business that depends on local trust and search.",
  },
  {
    icon: Wrench,
    label: "Repair Shops",
    description: "Electronics, appliances, specialty repairs — clear pricing pages and trust signals that convert browsers.",
  },
  {
    icon: Building2,
    label: "Local Service Businesses",
    description: "If you serve your community and need a site that actually works, you're exactly who we build for.",
  },
  {
    icon: TrendingUp,
    label: "Outdated Website? Perfect.",
    description: "If your current site is embarrassing or invisible, you're already losing leads. That's fixable — fast.",
  },
]

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 overflow-hidden"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
              Who We Work With
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              We Build for People
              <br />
              Who{" "}
              <span className="text-gradient">Get Their Hands Dirty</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              BashNTech isn't for silicon valley startups or big-box corporations.
              We built this for the business owner who's on the job by 6am, running
              a crew, answering calls, and doing everything themselves.
            </p>
            <p className="text-slate-400 leading-relaxed">
              If your business depends on showing up, doing quality work, and building
              a local reputation — you need a website that works just as hard. That's
              what we build.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-500/40 to-transparent" />
              <span className="text-sky-400 text-sm font-medium italic">
                &ldquo;Rugged but premium.&rdquo;
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-sky-500/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Industry Grid */}
          <div className="grid grid-cols-2 gap-3">
            {industries.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group bg-slate-900/50 hover:bg-slate-800/60 border border-sky-500/10 hover:border-sky-500/30 rounded-xl p-4 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-500/10 group-hover:bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                    <item.icon className="w-4 h-4 text-sky-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
