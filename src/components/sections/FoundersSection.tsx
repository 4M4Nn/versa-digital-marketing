import { ABOUT, TESTIMONIALS } from "@/lib/data"
import { Star, CheckCircle2 } from "lucide-react"

const FOUNDERS = [
  { name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59" },
  { name: "Sreenivasa Prabhu", role: "Founder & Strategy Head", monogram: "SP", color: "#C9A84C" },
  { name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#00D4FF" },
]

export default function FoundersSection() {
  return (
    <section id="about" className="py-20 bg-[#0A0F1E] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white">{ABOUT.headline}</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{ABOUT.description}</p>
        </div>

        {/* Checkpoints */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {ABOUT.checkpoints.map((point) => (
            <div key={point} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
              <CheckCircle2 size={18} className="text-[#00D4FF] shrink-0" />
              <p className="text-sm text-slate-200">{point}</p>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#00D4FF]/30 transition-all">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white font-space-grotesk" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}>{f.monogram}</div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase" style={{ color: f.color }}>{f.role}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/20 transition-all">
              <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={13} className="text-[#00D4FF] fill-[#00D4FF]" />)}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                <p className="text-xs font-semibold text-[#00D4FF] mt-1">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
