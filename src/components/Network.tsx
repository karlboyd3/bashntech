"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Handshake, UserRound, Megaphone } from "lucide-react"

const pillars = [
  {
    icon: UserRound,
    title: "You work with a person",
    text: "No ticket numbers or call centers. You talk directly with the person building your site or tool, and we stay in touch long after launch.",
  },
  {
    icon: Handshake,
    title: "We introduce you to the right people",
    text: "When one of our clients needs what another one does, we make the introduction. Our businesses help each other grow.",
  },
  {
    icon: Megaphone,
    title: "We send business your way",
    text: "We recommend our clients to the people we meet, feature them on our site, and share them with our network.",
  },
]

export default function Network() {
  return (
    <section className="relative py-24 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="text-warm text-sm font-semibold tracking-wide mb-3">The BashNTech network</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink mb-5 tracking-tight leading-tight">
            More than a client. <span className="marker">You&apos;re part of the family.</span>
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed">
            BashNTech is built on relationships, not transactions. Every business
            we work with joins a growing network of owners who know each other,
            look out for each other, and send work each other&apos;s way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-sand-dark rounded-3xl p-7"
            >
              <span className="w-12 h-12 rounded-2xl bg-warm-tint flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-warm" strokeWidth={1.8} />
              </span>
              <h3 className="text-ink font-semibold text-xl mb-2">{pillar.title}</h3>
              <p className="text-ink-soft leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-4 rounded-full font-semibold transition-colors duration-200"
          >
            Join the Network
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
