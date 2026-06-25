"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 1.5 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out" }, "-=0.3")
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#060D0F] px-6 md:px-12 pt-24 pb-32">
      {/* Animated BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(0,201,184,0.08) 0%, transparent 70%)", animation: "glow 4s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)", animation: "glow 4s ease-in-out 2s infinite" }} />
      </div>
      <div className="relative z-10 max-w-5xl">
        <div className="h-extra overflow-hidden mb-6">
          <div className="word inline-flex items-center gap-2 px-3 py-1.5 bg-[#00C9B8]/10 border border-[#00C9B8]/30 text-[#00C9B8] text-xs font-space rounded-full">
            ✦ Performance Marketing Agency · Kochi, Kerala
          </div>
        </div>
        <h1 className="font-space leading-none mb-6" style={{ fontSize: "clamp(48px,8vw,110px)" }}>
          {["Grow", "Faster.", "Smarter.", "Louder."].map((w, i) => (
            <div key={i} className="overflow-hidden">
              <span className={`word inline-block font-${i % 2 === 0 ? "bold" : "light"} ${i === 1 ? "text-[#00C9B8]" : i === 3 ? "text-[#8B5CF6]" : "text-white"}`}>{w}</span>
            </div>
          ))}
        </h1>
        <div className="h-extra overflow-hidden mb-8">
          <p className="word font-inter text-[#6B8080]" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 520 }}>
            We scale brands with data-driven SEO, ads, and social media. 200+ companies trusted us. Your turn.
          </p>
        </div>
        <div className="h-extra overflow-hidden mb-8">
          <div className="word flex flex-wrap gap-3">
            {["200+ Brands Scaled","₹12Cr+ Ad Spend","340% Avg Growth","Google Partner"].map(b => (
              <span key={b} className="px-3 py-1.5 text-xs font-space border border-[#00C9B8]/20 text-[#00C9B8]/70 rounded-full">{b}</span>
            ))}
          </div>
        </div>
        <div className="h-extra overflow-hidden">
          <div className="word flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#00C9B8] text-[#060D0F] hover:bg-[#00E5D4] font-space font-bold text-sm transition-all rounded-sm">Get Free Audit</a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white hover:border-[#00C9B8] font-inter text-sm transition-all rounded-sm">Our Services →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
