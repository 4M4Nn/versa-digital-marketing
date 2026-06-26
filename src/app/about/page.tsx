import type { Metadata } from "next"
import { FOUNDERS, WA_URL } from "@/lib/data"
export const metadata: Metadata = {
  title: "About Versa Digital — AI Marketing Team",
  description: "Meet the team behind Versa Digital — Kerala's AI-first digital marketing agency.",
}
export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">ABOUT US</p>
        <h1 className="font-space-grotesk text-5xl font-bold text-white mb-6">AI-First. Kerala-Native.</h1>
        <p className="text-[#6B8080] text-lg leading-relaxed">Versa Digital was built on a conviction: Kerala businesses deserve marketing that actually works. Not generic campaigns — specific, data-driven, AI-powered strategies that scale.</p>
      </section>
      <section className="py-12 bg-[#080D1E]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[["Why AI?","AI doesn't sleep. It analyzes, optimizes, and scales 24/7. Our AI-first approach means every campaign runs smarter than any human-only team can manage."],["Why Kerala?","We know Kerala's market, culture, and business psychology. This local intelligence + AI power = results that national agencies can't replicate."],["Why Versa?","Part of Versa Growth Ventures — we're built to scale alongside your business, not just run one campaign."]].map(([t,d]) => (
            <div key={t} className="rounded-2xl p-7 border border-[#00D4FF]/10" style={{ background:"rgba(0,212,255,0.03)" }}>
              <p className="text-[#00D4FF] text-xs tracking-widest uppercase mb-3">{t}</p>
              <p className="text-[#6B8080] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-space-grotesk text-4xl font-bold text-white">Our Founders</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDERS.map(f => (
              <div key={f.name} className="rounded-2xl p-8 border border-[#00D4FF]/10 hover:border-[#00D4FF]/25 transition-all" style={{ background:"rgba(0,212,255,0.03)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4" style={{ background:`linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
                <h3 className="font-space-grotesk text-xl font-bold text-white mb-1">{f.name}</h3>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color:f.color }}>{f.role}</p>
                <p className="text-[#6B8080] text-sm leading-relaxed mb-4">{f.bio}</p>
                <blockquote className="border-l-2 pl-3 italic text-xs text-[#00D4FF]" style={{ borderColor:f.color }}>&ldquo;{f.quote}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#080D1E] px-6 text-center">
        <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">Let&apos;s Grow Your Business</h2>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#00D4FF] text-[#050816] font-bold text-sm tracking-widest uppercase">Get Free Audit</a>
      </section>
    </div>
  )
}
