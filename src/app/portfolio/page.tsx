import type { Metadata } from "next"
import { RESULTS, TESTIMONIALS, STATS } from "@/lib/data"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Results & Portfolio",
  description: "Real results from Versa Digital — traffic growth, ROAS, engagement rates, and client testimonials.",
}

export default function PortfolioPage() {
  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-20 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Proof</p>
        <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">Results We Deliver</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Numbers from real campaigns. No vanity metrics.</p>
      </section>

      <section id="results" className="py-12 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="font-space-grotesk text-4xl font-bold text-[#00D4FF] mb-1">{s.value}{s.suffix}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-space-grotesk text-2xl font-bold text-white text-center mb-10">Key Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-6">
                <p className="font-space-grotesk text-4xl font-bold text-[#00D4FF] shrink-0">{r.metric}</p>
                <div>
                  <h3 className="font-space-grotesk text-lg font-bold text-white mb-1">{r.label}</h3>
                  <p className="text-slate-400 text-sm">{r.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-space-grotesk text-2xl font-bold text-white text-center mb-10">Client Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/20 transition-all">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={13} className="text-[#00D4FF] fill-[#00D4FF]" />)}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                <p className="text-xs font-semibold text-[#00D4FF] mt-1">{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
