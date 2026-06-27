"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  { q: "What makes Versa Digital different from other agencies?", a: "We are an AI-first agency. Every campaign — SEO, social, ads — uses AI tools to maximise efficiency and results. We also report transparently on real business metrics, not vanity numbers like impressions or reach." },
  { q: "Do you work with small businesses?", a: "Yes. We work with businesses of all sizes, from local Kerala SMEs to regional enterprises. Our packages are designed to deliver ROI at every budget level." },
  { q: "How quickly will I see results?", a: "SEO results typically take 3–6 months. Performance ads (Meta, Google) can show measurable ROAS improvements within 30 days. Social media engagement improvements are usually visible within 2–4 weeks." },
  { q: "Do you lock clients into long-term contracts?", a: "No. We work on monthly rolling agreements. We believe results should keep clients — not contracts. Most of our clients stay for 12+ months because they see real ROI." },
  { q: "What is a digital marketing audit?", a: "We analyse your current website, SEO, social media profiles, and any running ads. We identify gaps, opportunities, and quick wins. This free audit gives you a 20-point action plan you can implement with or without us." },
  { q: "Can you help with specific platforms like Instagram or WhatsApp?", a: "Absolutely. We specialise in platform-specific strategies including Instagram Reels, WhatsApp Business automation, YouTube campaigns, Google Ads, and LinkedIn B2B marketing." },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-[#0A0F1E] px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-space-grotesk text-3xl font-bold text-white">Common Questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden hover:border-[#00D4FF]/30 transition-colors">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-semibold text-white text-sm">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[#00D4FF] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-5"><p className="text-slate-400 text-sm leading-relaxed">{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
