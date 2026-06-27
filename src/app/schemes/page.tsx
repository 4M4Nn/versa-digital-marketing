import type { Metadata } from "next"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "Free Offers & Packages",
  description: "Current free audits, starter packages, and special offers from Versa Digital.",
}

export default function SchemesPage() {
  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-16 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Limited Time</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white mb-4">Free Offers</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Start with no commitment. See value before you invest.</p>
      </section>
      <SchemesSection />
    </div>
  )
}
