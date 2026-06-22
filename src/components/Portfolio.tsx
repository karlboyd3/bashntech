"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    category: "Restaurant",
    title: "Restaurant Website Redesign",
    description:
      "Full redesign for a local family restaurant. Mobile-first layout, online menu, and Google Maps integration. 40% increase in reservation calls.",
    tags: ["Web Design", "SEO", "Mobile"],
    gradient: "from-orange-600/20 to-red-700/20",
    accent: "bg-orange-500/20 text-orange-300 border-orange-500/20",
    border: "hover:border-orange-500/30",
    dot: "bg-orange-400",
  },
  {
    category: "Contractor",
    title: "Contractor Lead Generation Site",
    description:
      "High-converting site for a general contractor with quote request forms, before/after gallery, and local SEO targeting. Now ranking #1 for their service area.",
    tags: ["Lead Gen", "Local SEO", "Forms"],
    gradient: "from-sky-600/20 to-blue-700/20",
    accent: "bg-sky-500/20 text-sky-300 border-sky-500/20",
    border: "hover:border-sky-500/30",
    dot: "bg-sky-400",
  },
  {
    category: "Home Services",
    title: "Local Service Business Website",
    description:
      "Professional site for an HVAC company with service pages, emergency contact forms, and Google Business integration. Built and launched in 10 days.",
    tags: ["Web Design", "Speed", "Google"],
    gradient: "from-green-600/20 to-teal-700/20",
    accent: "bg-green-500/20 text-green-300 border-green-500/20",
    border: "hover:border-green-500/30",
    dot: "bg-green-400",
  },
  {
    category: "AI Integration",
    title: "AI Chatbot Integration",
    description:
      "24/7 lead capture chatbot for a repair shop. Answers common questions, books appointments, and captures customer info — even at 2am on Sunday.",
    tags: ["AI Chatbot", "Automation", "Leads"],
    gradient: "from-violet-600/20 to-purple-700/20",
    accent: "bg-violet-500/20 text-violet-300 border-violet-500/20",
    border: "hover:border-violet-500/30",
    dot: "bg-violet-400",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
            Example Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Built to{" "}
            <span className="text-gradient">Perform</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Real results for real businesses. Here's the kind of work we do.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative bg-slate-900/50 border border-white/6 ${project.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_50px_rgba(0,0,0,0.4)]`}
            >
              {/* Mockup header bar */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Browser chrome simulation */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="absolute top-3 left-12 right-3 h-4 bg-white/8 rounded-sm" />

                {/* Content preview placeholder */}
                <div className="flex flex-col items-center gap-2 mt-6 opacity-50">
                  <div className="w-24 h-2 bg-white/30 rounded-full" />
                  <div className="w-32 h-2 bg-white/20 rounded-full" />
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
                  <div className="w-16 h-5 bg-white/25 rounded mt-1" />
                </div>

                {/* Overlay grid */}
                <div className="absolute inset-0 blueprint-grid opacity-30" />
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-2 ${project.accent}`}>
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-sky-500/15 flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-0.5">
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors duration-300" />
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-200">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/4 border border-white/6 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom dot indicator */}
              <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${project.dot} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* More projects note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          More examples available on request. Every project is built to fit the business.
        </motion.p>
      </div>
    </section>
  )
}
