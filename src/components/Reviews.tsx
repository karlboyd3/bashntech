"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { reviews } from "@/data/reviews"

export default function Reviews() {
  if (reviews.length === 0) return null

  return (
    <section className="relative py-24 bg-sand overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-warm text-sm font-semibold tracking-wide mb-8 text-center">
          What clients say
        </p>
        <div className="flex flex-col gap-8">
          {reviews.map((review) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white border border-sand-dark rounded-3xl px-7 py-10 sm:px-14 sm:py-12 text-center"
            >
              <Quote className="w-9 h-9 text-warm/40 mx-auto mb-5" strokeWidth={1.5} aria-hidden />
              <blockquote
                className="text-ink text-xl sm:text-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7">
                <p className="text-ink font-semibold">{review.name}</p>
                <p className="text-ink-soft text-sm">
                  {review.url ? (
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand underline-offset-2 hover:underline"
                    >
                      {review.business}
                    </a>
                  ) : (
                    review.business
                  )}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
