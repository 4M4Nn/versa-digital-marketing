import { OFFER, SITE } from "@/lib/data"
import { Zap } from "lucide-react"

export default function SchemesSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="py-20 bg-[#050816] px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#00D4FF]/10 via-[#6366F1]/10 to-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-3xl p-12">
          <span className="inline-flex items-center gap-2 bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <Zap size={13} /> Free Offer
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white mb-4">{OFFER.title}</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">{OFFER.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00D4FF] text-[#0A0F1E] font-bold px-8 py-4 rounded-full hover:bg-[#0099CC] transition-colors"
            >
              {OFFER.cta}
            </a>
            <a
              href="/#contact"
              className="inline-block border border-[#00D4FF]/40 text-[#00D4FF] font-semibold px-8 py-4 rounded-full hover:bg-[#00D4FF]/10 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
