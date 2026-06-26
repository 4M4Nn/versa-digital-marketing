import type { Metadata } from "next"
import { SCHEMES, WA_URL } from "@/lib/data"
export const metadata: Metadata = {
  title: "Packages & Schemes — Versa Digital",
  description: "Special marketing packages for Kerala businesses — Free AI Audit, Starter Growth Package, Performance Guarantee.",
}
export default function SchemesPage() {
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">OFFERS</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white">Marketing Packages</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {SCHEMES.map(s => (
            <div key={s.title} className="rounded-2xl p-7 flex flex-col gap-4 border border-[#00D4FF]/15 hover:border-[#00D4FF]/30 transition-all" style={{ background:"rgba(0,212,255,0.04)" }}>
              <span className="text-xs tracking-widest px-3 py-1 rounded-full self-start" style={{ background:"#00D4FF20", color:"#00D4FF" }}>{s.tag}</span>
              <h2 className="font-space-grotesk text-xl font-bold text-white">{s.title}</h2>
              <p className="text-[#6B8080] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(s.cta)}`} target="_blank" rel="noopener noreferrer"
                className="block text-center py-3 border border-[#00D4FF] text-[#00D4FF] text-sm tracking-widest hover:bg-[#00D4FF] hover:text-[#050816] transition-all">{s.cta}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
