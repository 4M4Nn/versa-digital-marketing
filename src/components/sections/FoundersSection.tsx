import { FOUNDERS } from "@/lib/data"
export default function FoundersSection() {
  return (
    <section className="py-20 bg-[#080D1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">TEAM</p>
          <h2 className="font-space-grotesk text-4xl font-bold text-white">The Founders</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FOUNDERS.map(f => (
            <div key={f.name} className="rounded-2xl p-8 border border-[#00D4FF]/10 hover:border-[#00D4FF]/25 transition-all" style={{ background:"rgba(0,212,255,0.03)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white mb-4" style={{ background:`linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color:f.color }}>{f.role}</p>
              <p className="text-[#6B8080] text-sm leading-relaxed mb-4">{f.bio}</p>
              <blockquote className="border-l-2 pl-3 italic text-xs text-[#00D4FF]" style={{ borderColor:f.color }}>&ldquo;{f.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
