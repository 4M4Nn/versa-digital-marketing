import type { Metadata } from "next"
import { PORTFOLIO, WA_URL } from "@/lib/data"
export const metadata: Metadata = {
  title: "Portfolio — Client Results & Case Studies",
  description: "Real results from Versa Digital's Kerala clients — ROAS improvement, traffic growth, lead generation, and revenue impact.",
}
export default function PortfolioPage() {
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">OUR WORK</p>
        <h1 className="font-space-grotesk text-5xl font-bold text-white mb-4">Client Results</h1>
        <p className="text-[#6B8080] text-lg">Numbers don&apos;t lie. Our work speaks for itself.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO.map(p => (
            <div key={p.client} className="rounded-2xl p-7 border hover:scale-[1.02] transition-transform" style={{ background:`${p.color}08`, borderColor:`${p.color}25` }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color:p.color }}>{p.industry}</p>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">{p.client}</h3>
              <p className="text-[#6B8080] text-sm mb-4">Service: {p.service}</p>
              <div className="p-4 rounded-xl" style={{ background:`${p.color}15` }}>
                <p className="font-space-grotesk text-2xl font-bold" style={{ color:p.color }}>{p.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-white text-xl font-space-grotesk font-bold mb-3">Want Results Like These?</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#00D4FF] text-[#050816] font-bold text-sm tracking-widest uppercase hover:opacity-90">Get Free Audit</a>
        </div>
      </section>
    </div>
  )
}
