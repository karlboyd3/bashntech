import type { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  intro: ReactNode
}

/** Top-of-page intro for the inner pages (the home page uses Hero instead). */
export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="bg-cream pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-warm text-sm font-semibold tracking-wide mb-4">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.08] mb-6">
          {title}
        </h1>
        <p className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">{intro}</p>
      </div>
    </section>
  )
}
