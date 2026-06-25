"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { Phone, Mail, MapPin } from "lucide-react"

export default function DigitalContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", service: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    await saveLead({ name: form.name, phone: form.phone, email: form.email, company: form.company, service_interested: form.service, source_website: "versa-digital" })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">Ready to 3x Your Traffic?</h2>
          <p className="text-[#8892B0] text-lg">Get a free marketing audit. We&apos;ll identify exactly where you&apos;re leaving money on the table.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {sent ? (
              <div className="bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-3xl p-12 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">We&apos;ll Be In Touch!</h3>
                <p className="text-[#8892B0]">Your free marketing audit is being prepared. Expect a call within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/3 border border-white/10 rounded-3xl p-8 flex flex-col gap-4">
                <h3 className="text-white font-bold text-xl mb-2">Get Free Marketing Audit</h3>
                {[
                  { placeholder: "Your Name", key: "name", type: "text", required: true },
                  { placeholder: "Phone Number", key: "phone", type: "text", required: true },
                  { placeholder: "Email Address", key: "email", type: "email", required: false },
                  { placeholder: "Company / Business Name", key: "company", type: "text", required: false },
                ].map(({ placeholder, key, type, required }) => (
                  <input key={key} required={required} type={type} placeholder={placeholder} value={form[key as keyof typeof form]}
                    onChange={e => setForm({...form, [key]: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8892B0] text-sm outline-none focus:border-[#00D4FF] transition-colors" />
                ))}
                <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] transition-colors">
                  <option value="">Service Needed</option>
                  {["AI SEO + AEO","AI Social Media","Performance Marketing","Video Production","Podcast Production","Content Marketing","WhatsApp Marketing","Full Package"].map(s => <option key={s}>{s}</option>)}
                </select>
                <button type="submit" className="py-4 bg-gradient-to-r from-[#00D4FF] to-[#6E44FF] text-white rounded-xl font-bold transition-all duration-300 hover:opacity-90">
                  Get Free Audit →
                </button>
              </form>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            {[
              { icon: Phone, label: "Call Us", value: "+91 8891129111" },
              { icon: Mail, label: "Email", value: "digital@versagrowthventures.com" },
              { icon: MapPin, label: "Location", value: "Kochi, Kerala, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-white/3 border border-white/10 rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-[#8892B0] text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#00D4FF]/5 to-[#6E44FF]/5 border border-[#00D4FF]/20 rounded-2xl p-6 mt-2">
              <p className="text-white font-bold text-lg mb-1">Free 30-Min Strategy Call</p>
              <p className="text-[#8892B0] text-sm">No obligation. We&apos;ll analyze your current marketing, identify gaps, and show you a roadmap to 3x your results.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
