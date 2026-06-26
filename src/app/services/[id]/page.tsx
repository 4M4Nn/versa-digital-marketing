import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SERVICES, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() { return SERVICES.map(s => ({ id: s.id })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const s = SERVICES.find(x => x.id === id)
  return s ? { title: `${s.name} — AI Marketing Service`, description: s.solution } : {}
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params
  const s = SERVICES.find(x => x.id === id)
  if (!s) notFound()
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/services" className="text-[#00D4FF] text-xs tracking-widest uppercase mb-8 inline-block">← ALL SERVICES</Link>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{s.emoji}</span>
          <div>
            <h1 className="font-space-grotesk text-4xl font-bold text-white">{s.name}</h1>
            <p className="mt-1" style={{ color:s.color }}>{s.short}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[["THE PROBLEM",s.problem,"#FF4444"],["THE PAIN",s.pain,"#FF8C00"],["THE SOLUTION",s.solution,s.color]].map(([label,text,col]) => (
            <div key={label} className="rounded-xl p-5 border" style={{ background:`${col}08`, borderColor:`${col}30` }}>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color:col }}>{label}</p>
              <p className="text-[#6B8080] text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color:s.color }}>HOW IT WORKS — 3 STEPS</p>
          <div className="grid md:grid-cols-3 gap-4">
            {s.steps.map((step, i) => (
              <div key={i} className="rounded-xl p-6 border" style={{ background:`${s.color}08`, borderColor:`${s.color}25` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-[#050816] mb-3" style={{ background:s.color }}>{i+1}</div>
                <p className="font-space-grotesk font-bold text-white mb-2">{step.title}</p>
                <p className="text-[#6B8080] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-5 border mb-8" style={{ background:`${s.color}10`, borderColor:`${s.color}30` }}>
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color:s.color }}>RESULTS</p>
          <p className="text-white font-medium">{s.results}</p>
        </div>
        <a href={`${WA_URL}?text=${encodeURIComponent(`I want to know more about ${s.name}`)}`} target="_blank" rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-[#050816] font-bold text-sm tracking-widest uppercase" style={{ background:s.color }}>
          GET STARTED
        </a>
      </div>
    </div>
  )
}
