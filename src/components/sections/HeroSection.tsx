"use client"
import Link from "next/link"
import { WA_URL } from "@/lib/data"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let frame = 0
    const setSize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    setSize()
    window.addEventListener("resize", setSize)
    const COLS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ"
    const cols = Math.floor(canvas.width / 16)
    const drops = Array(cols).fill(1)
    const animate = () => {
      ctx.fillStyle = "rgba(5,8,22,0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = "13px monospace"
      drops.forEach((y, i) => {
        const char = COLS[Math.floor(Math.random() * COLS.length)]
        const intensity = Math.random()
        ctx.fillStyle = intensity > 0.9 ? "#ffffff" : intensity > 0.5 ? "#00D4FF" : `rgba(0,212,255,${intensity * 0.4})`
        ctx.fillText(char, i * 16, y * 16)
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", setSize) }
  }, [])
  return (
    <section className="relative min-h-screen bg-[#050816] flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/60 to-[#050816]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background:"rgba(0,212,255,0.1)", border:"1px solid rgba(0,212,255,0.3)" }}>
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-xs text-[#00D4FF] tracking-widest">AI-First Marketing Agency</span>
          </div>
          <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Marketing That<br/><span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(135deg,#00D4FF,#8B5CF6)" }}>Multiplies</span><br/>Kerala Businesses.
          </h1>
          <p className="text-[#6B8080] text-lg leading-relaxed mb-8 max-w-lg">
            AI SEO. AEO. Performance Ads. Social Media. Video. Content. WhatsApp. We run the full stack of digital marketing — so you can focus on running your business.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-[#050816] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ background:"linear-gradient(135deg,#00D4FF,#8B5CF6)" }}>Get Free Audit</a>
            <Link href="/services" className="px-8 py-4 border border-[#00D4FF] text-[#00D4FF] text-sm tracking-widest uppercase hover:bg-[#00D4FF]/10 transition-colors">View Services</Link>
          </div>
          <div className="flex gap-6">
            {[["3x","Avg Traffic Growth"],["4x","Avg ROAS"],["98%","WhatsApp Open Rate"]].map(([v,l]) => (
              <div key={l}><p className="font-space-grotesk text-2xl font-bold text-[#00D4FF]">{v}</p><p className="text-[#6B8080] text-xs">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[["🔍","AI SEO + AEO","Page 1 rankings"],["📱","Social Media","5x engagement"],["🚀","Performance Ads","4x ROAS"],["💬","WhatsApp","98% open rate"],["🎬","Video","800K+ views"],["✍️","Content","3x lead gen"]].map(([e,t,s]) => (
            <div key={t} className="rounded-xl p-4 border" style={{ background:"rgba(0,212,255,0.05)", borderColor:"rgba(0,212,255,0.15)" }}>
              <p className="text-2xl mb-2">{e}</p>
              <p className="font-space-grotesk font-bold text-white text-sm">{t}</p>
              <p className="text-[#00D4FF] text-xs mt-0.5">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
