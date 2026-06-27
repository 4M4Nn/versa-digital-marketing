import Link from "next/link"
import { ArrowRight, BarChart3, Zap, TrendingUp } from "lucide-react"
import { RESULTS, SITE } from "@/lib/data"

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="min-h-[90vh] bg-[#050816] text-white flex items-center py-20 px-4 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
            <Zap size={13} />
            AI-Powered Digital Marketing — Kerala
          </span>
          <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Marketing That Moves the{" "}
            <span className="text-[#00D4FF]">Needle</span>, Not Just the Metrics
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            AI SEO, performance ads, social media, video — everything your Kerala business needs to grow online. We deliver results, not reports.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="flex items-center gap-2 bg-[#00D4FF] text-[#0A0F1E] font-bold px-7 py-3.5 rounded-full hover:bg-[#0099CC] transition-colors"
            >
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#00D4FF]/30 text-[#00D4FF] font-semibold px-7 py-3.5 rounded-full hover:bg-[#00D4FF]/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RESULTS.map((result) => (
            <div
              key={result.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#00D4FF]/30 transition-all"
            >
              <p className="font-space-grotesk text-3xl font-bold text-[#00D4FF] mb-1">{result.metric}</p>
              <p className="font-semibold text-white text-sm mb-1">{result.label}</p>
              <p className="text-slate-400 text-xs leading-snug">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
