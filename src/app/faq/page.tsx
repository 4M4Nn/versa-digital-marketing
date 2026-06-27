import type { Metadata } from "next"
import FAQSection from "@/components/sections/FAQSection"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Versa Digital's services, pricing, and approach.",
}

export default function FAQPage() {
  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-16 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Help</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Everything you need to know before working with Versa Digital.</p>
      </section>
      <FAQSection />
    </div>
  )
}
