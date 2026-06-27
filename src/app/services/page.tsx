import type { Metadata } from "next"
import ServicesSection from "@/components/sections/ServicesSection"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore all 7 digital marketing services from Versa Digital — AI SEO, social media, performance ads, video, WhatsApp, and more.",
}

export default function ServicesPage() {
  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-16 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">What We Offer</p>
        <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-slate-400 max-w-xl mx-auto">7 AI-powered services. One dedicated team. Real results.</p>
      </section>
      <ServicesSection />
    </div>
  )
}
