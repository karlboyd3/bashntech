"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Process from "@/components/Process"
import FeaturedOffer from "@/components/FeaturedOffer"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <FeaturedOffer />
      <FinalCTA />
      <Footer />
    </main>
  )
}
