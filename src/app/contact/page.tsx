import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Versa Digital for a free digital marketing audit and consultation.",
}

export default function ContactPage() {
  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-16 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Get Started</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white mb-4">Let&apos;s Talk</h1>
        <p className="text-slate-400 max-w-xl mx-auto">We respond within 24 hours. WhatsApp is fastest.</p>
      </section>
      <ContactSection />
    </div>
  )
}
