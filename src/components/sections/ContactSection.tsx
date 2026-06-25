"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { serviceInterests, siteConfig } from "@/lib/data"
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", website: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.service, source_website: "versa-digital", message: form.message })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setSent(true); setLoading(false)
  }
  const inp = "w-full bg-transparent border-b border-white/20 focus:border-[#00C9B8] outline-none text-white placeholder-white/30 py-3 font-inter text-base transition-colors"
  return (
    <section id="contact" className="py-32 bg-[#0A1518] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="label text-[#00C9B8] mb-4" style={{ letterSpacing: "3px" }}>/ Free Audit</p>
          <h2 className="font-space font-bold text-white" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>Get a free<br />digital audit.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            {[{ label: "Phone", val: siteConfig.phone }, { label: "Email", val: siteConfig.email }, { label: "Location", val: siteConfig.location }].map(item => (
              <div key={item.label}>
                <p className="label text-[#6B8080] mb-1">{item.label}</p>
                <p className="font-inter text-white text-base">{item.val}</p>
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              {["SEO","Ads","Social","Web","Content"].map(s => (
                <span key={s} className="px-3 py-1.5 text-xs font-space border border-[#00C9B8]/20 text-[#00C9B8]/60 rounded-full">{s}</span>
              ))}
            </div>
          </div>
          {sent ? (
            <div className="flex flex-col justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00C9B8]/20 flex items-center justify-center text-[#00C9B8] text-xl">✓</div>
              <h3 className="font-space text-2xl text-white">Audit request sent!</h3>
              <p className="font-inter text-[#6B8080]">We&apos;ll reach out with your free audit report within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6">
              <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inp} />
              <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inp} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inp} />
              <input placeholder="Website URL (optional)" value={form.website} onChange={e => setForm({...form, website: e.target.value})} className={inp} />
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={inp + " bg-transparent"}>
                <option value="" className="bg-[#0A1518]">Service Needed</option>
                {serviceInterests.map(s => <option key={s} value={s} className="bg-[#0A1518]">{s}</option>)}
              </select>
              <textarea placeholder="Tell us about your goals" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className={inp + " resize-none"} />
              <button type="submit" disabled={loading} className="w-full h-14 bg-[#00C9B8] hover:bg-[#00E5D4] text-[#060D0F] font-space font-bold text-base transition-colors disabled:opacity-70 rounded-sm">
                {loading ? "Sending..." : "Get Free Audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
