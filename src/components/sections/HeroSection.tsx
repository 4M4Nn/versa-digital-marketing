"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const bars = [
  { label: "SEO", h: "80%", delay: "0s" },
  { label: "ADS", h: "95%", delay: "0.15s" },
  { label: "SOCIAL", h: "65%", delay: "0.3s" },
  { label: "CONTENT", h: "75%", delay: "0.45s" },
]

const metrics = [
  { value: "3.2x", label: "ROAS" },
  { value: "92%", label: "CTR" },
  { value: "+247%", label: "Traffic" },
]

function DashboardVisual() {
  return (
    <div style={{
      position: "relative",
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.3)",
      borderRadius: 16,
      padding: "28px 24px",
      boxShadow: "0 0 40px rgba(0,212,200,0.1), inset 0 0 40px rgba(0,212,200,0.03)",
      overflow: "hidden",
      minHeight: 340,
    }}>
      {/* Scanning line */}
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,212,200,0.6), transparent)",
        boxShadow: "0 0 8px rgba(0,212,200,0.5)",
        animation: "scanLine 3s linear infinite",
        top: 0,
        pointerEvents: "none",
        zIndex: 2,
      }} />
      {/* Corner decorations */}
      <div style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "2px solid #00D4C8", borderLeft: "2px solid #00D4C8", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: "2px solid #00D4C8", borderRight: "2px solid #00D4C8", opacity: 0.7 }} />
      <div style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: "2px solid #00D4C8", borderLeft: "2px solid #00D4C8", opacity: 0.7 }} />
      <div style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "2px solid #00D4C8", borderRight: "2px solid #00D4C8", opacity: 0.7 }} />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.25em", color: "#00D4C8", fontFamily: "monospace", opacity: 0.8 }}>LIVE_DASHBOARD.EXE</span>
        <span style={{ fontSize: 10, color: "#00D4C8", fontFamily: "monospace", opacity: 0.6, animation: "glow-pulse 2s ease-in-out infinite" }}>● LIVE</span>
      </div>

      {/* Bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 120, marginBottom: 20, borderBottom: "1px solid rgba(0,212,200,0.15)" }}>
        {bars.map((b) => (
          <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
            <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
              <div style={{
                width: "100%",
                height: b.h,
                background: "linear-gradient(180deg, #00D4C8 0%, rgba(0,212,200,0.3) 100%)",
                borderRadius: "3px 3px 0 0",
                boxShadow: "0 0 12px rgba(0,212,200,0.4)",
                animation: `bar-rise 1.2s cubic-bezier(0.34,1.56,0.64,1) ${b.delay} both`,
                transformOrigin: "bottom",
              }} />
            </div>
            <span style={{ fontSize: 8, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.1em" }}>{b.label}</span>
          </div>
        ))}
      </div>

      {/* Metric cards */}
      <div style={{ display: "flex", gap: 8 }}>
        {metrics.map((m, i) => (
          <div key={m.label} style={{
            flex: 1,
            background: "rgba(0,212,200,0.06)",
            border: "1px solid rgba(0,212,200,0.2)",
            borderRadius: 8,
            padding: "10px 8px",
            textAlign: "center",
            animation: `fadeSlideUp 0.6s ease ${0.8 + i * 0.15}s both`,
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#00D4C8", fontFamily: "monospace", lineHeight: 1 }}>{m.value}</div>
            <div style={{ fontSize: 9, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.15em", marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      const visual = sec.current?.querySelector(".hero-visual")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      gsap.set(visual ?? [], { x: 60, opacity: 0 })
      const tl = gsap.timeline({ delay: 1.5 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .to(visual ?? [], { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
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
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
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
        {/* Right: animated dashboard visual */}
        <div className="hero-visual hidden lg:block">
          <DashboardVisual />
        </div>
      </div>
    </section>
  )
}
