"use client"
import { industries } from "@/lib/data"
export default function IndustriesSection() {
  return (
    <section id="industries" className="py-32 bg-[#0A1518] px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="label text-[#00C9B8] mb-4" style={{ letterSpacing: "3px" }}>/ Industries We Serve</p>
        <h2 className="font-space font-bold text-white" style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1 }}>We market for every industry.</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 whitespace-nowrap" style={{ animation: "ticker 20s linear infinite" }}>
          {[...industries, ...industries, ...industries].map((ind, i) => (
            <span key={i} className="inline-block px-6 py-3 border border-[#00C9B8]/20 text-[#00C9B8]/70 text-sm font-space rounded-full flex-shrink-0 hover:border-[#00C9B8] hover:text-[#00C9B8] transition-colors">{ind}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
