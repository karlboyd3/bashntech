"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { publishedClients } from "@/data/clients"

/** Screenshot cards for each published client, linking to their live site. */
export default function ClientCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {publishedClients.map((client, i) => (
        <motion.a
          key={client.name}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="group block bg-white border border-sand-dark hover:border-brand/40 rounded-3xl overflow-hidden transition-colors duration-200"
        >
          {client.image && (
            <div className="relative aspect-[16/10] overflow-hidden border-b border-sand-dark bg-sand">
              <Image
                src={client.image}
                alt={`Homepage of ${client.name}'s website, built by BashNTech`}
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          )}
          <div className="flex items-center gap-4 p-6">
            <span className="min-w-0 flex-1">
              <span className="block text-ink text-lg font-semibold">{client.name}</span>
              <span className="block text-ink-soft text-sm">
                {client.industry} · {client.location}
              </span>
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-ink-soft group-hover:text-brand transition-colors">
              Visit site
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
