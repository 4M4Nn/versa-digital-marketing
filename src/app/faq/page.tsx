"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/data"
export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">FAQ</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white">Frequently Asked Questions</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-[#00D4FF]/10">
              <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <ChevronDown size={18} className={`text-[#00D4FF] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-[#6B8080] text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
