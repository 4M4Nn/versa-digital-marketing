import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ABOUT, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Versa Digital",
  description: "Kerala's most results-driven AI-powered digital marketing agency. Learn about our story, mission, and team.",
}

const FOUNDERS = [
  { name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59" },
  { name: "Sreenivasa Prabhu", role: "Founder & Strategy Head", monogram: "SP", color: "#C9A84C" },
  { name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#00D4FF" },
]

export default function AboutPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-6">{ABOUT.headline}</h1>
            <p className="text-slate-400 leading-relaxed mb-6">{ABOUT.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {ABOUT.checkpoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image src={ABOUT.image} alt="Versa Digital team" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-2xl p-8">
            <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">Mission</p>
            <p className="text-slate-200 leading-relaxed">{ABOUT.mission}</p>
          </div>
          <div className="bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-2xl p-8">
            <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">Vision</p>
            <p className="text-slate-200 leading-relaxed">{ABOUT.vision}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="font-space-grotesk text-2xl font-bold text-white text-center mb-8">The Founders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#00D4FF]/30 transition-all">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white font-space-grotesk" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}>{f.monogram}</div>
                <h3 className="font-space-grotesk font-bold text-white mb-1">{f.name}</h3>
                <p className="text-xs tracking-widest uppercase" style={{ color: f.color }}>{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0A0F1E] text-center">
        <h2 className="font-space-grotesk text-3xl font-bold text-white mb-4">Ready to Grow?</h2>
        <p className="text-slate-400 mb-8">Start with a free digital marketing audit — no commitment required.</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00D4FF] text-[#0A0F1E] font-bold px-8 py-4 rounded-full hover:bg-[#0099CC] transition-colors">
          Get Free Audit
        </a>
      </section>
    </div>
  )
}
