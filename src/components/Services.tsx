"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  BarChart3,
  Zap,
  Bot,
  Megaphone,
  Headphones,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description:
      "No website yet? We'll build it from scratch. Already have one that isn't working? We'll fix it. Either way, your site will work for you around the clock so you can focus on the job you actually love.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Stop spending hours trying to make sense of spreadsheets and reports. We turn your numbers into clear answers so you can make confident decisions and get back to running your business.",
  },
  {
    icon: Zap,
    title: "Systems & Process Efficiency",
    description:
      "The repetitive tasks eating your day shouldn't be your problem. We streamline how your business operates so less falls on your plate and more gets done without you having to touch it.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Imagine having an extra set of hands that never clocks out. We integrate AI into your workflow so routine work handles itself and you can focus on the parts of your business only you can do.",
  },
  {
    icon: Megaphone,
    title: "Advertisements",
    description:
      "Finding new customers shouldn't be a second job. We run targeted ad campaigns that bring the right people to you so your phone rings while you're out doing what you're good at.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description:
      "Once we build something, we don't disappear. We keep everything running, updated, and healthy so you never have to stress about the tech side and can stay focused on what you do best.",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Grow and Operate</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From your website to your workflow, we help businesses look better,
            run leaner, and reach more customers.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
