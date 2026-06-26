import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services — AI-Powered Digital Marketing",
  description: "Versa Digital's full service suite: AI SEO+AEO, Social Media, Performance Marketing, Video, Content, WhatsApp, and Podcast Marketing.",
}

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">OUR SERVICES</p>
        <h1 className="font-space-grotesk text-5xl font-bold text-white mb-4">Full-Stack AI Marketing</h1>
        <p className="text-[#6B8080] text-lg">7 services. One goal: grow your Kerala business.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map(s => (
            <div key={s.id} className="rounded-2xl border overflow-hidden" style={{ background:"rgba(0,212,255,0.03)", borderColor:`${s.color}25` }}>
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-1 p-8 flex flex-col gap-4 justify-center" style={{ background:`${s.color}08` }}>
                  <span className="text-5xl">{s.emoji}</span>
                  <h2 className="font-space-grotesk text-xl font-bold text-white">{s.name}</h2>
                  <p className="text-xs" style={{ color:s.color }}>{s.short}</p>
                </div>
                <div className="md:col-span-4 p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color:s.color }}>THE PROBLEM</p>
                      <p className="text-[#6B8080] text-sm leading-relaxed">{s.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color:s.color }}>THE SOLUTION</p>
                      <p className="text-[#6B8080] text-sm leading-relaxed">{s.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {s.steps.map((step, i) => (
                      <div key={i} className="p-3 rounded-lg" style={{ background:`${s.color}10` }}>
                        <p className="text-xs font-bold text-white mb-1">Step {i+1}: {step.title}</p>
                        <p className="text-[#6B8080] text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium" style={{ color:s.color }}>✓ {s.results}</p>
                    <Link href={`/services/${s.id}`} className="text-xs tracking-widest border px-4 py-2 hover:opacity-70 transition-opacity" style={{ borderColor:`${s.color}60`, color:s.color }}>DETAILS</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
