import Link from "next/link"
import { SERVICES } from "@/lib/data"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">WHAT WE DO</p>
          <h2 className="font-space-grotesk text-4xl font-bold text-white">Full-Stack AI Marketing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map(s => (
            <Link key={s.id} href={`/services/${s.id}`} className="group rounded-2xl p-7 flex flex-col gap-4 border transition-all hover:scale-[1.02]" style={{ background:"rgba(0,212,255,0.03)", borderColor:`${s.color}20` }}>
              <span className="text-3xl">{s.emoji}</span>
              <div>
                <p className="font-space-grotesk font-bold text-white text-lg group-hover:text-[#00D4FF] transition-colors">{s.name}</p>
                <p className="text-[#6B8080] text-xs mt-1">{s.short}</p>
              </div>
              <p className="text-[#6B8080] text-sm leading-relaxed line-clamp-2 flex-1">{s.problem}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest" style={{ color: s.color }}>LEARN MORE →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
