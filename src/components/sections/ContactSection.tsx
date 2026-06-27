"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { SITE, SERVICES } from "@/lib/data"
import { saveLead, openWhatsApp } from "@/lib/supabase"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit mobile required"
    if (!form.message.trim()) e.message = "Required"
    return e
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus("loading")
    try {
      await saveLead({ ...form, source: "versa-digital", created_at: new Date().toISOString() })
      setStatus("success")
      setForm({ name: "", email: "", phone: "", service: "", message: "" })
    } catch { setStatus("error") }
  }

  return (
    <section id="contact" className="py-20 bg-[#0A0F1E] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">Let&apos;s Talk</p>
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white">Get Your Free Audit</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">Fill in your details and we will send you a free 20-point digital marketing audit within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: <Phone size={20} />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: <Mail size={20} />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: <MapPin size={20} />, label: "Address", value: SITE.address, href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#00D4FF]/30 transition-all">
                <div className="w-11 h-11 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center text-[#00D4FF] shrink-0">{item.icon}</div>
                <div><p className="text-xs text-slate-500 mb-0.5">{item.label}</p><p className="font-semibold text-white text-sm">{item.value}</p></div>
              </a>
            ))}
            <button onClick={() => openWhatsApp()} className="flex items-center gap-4 bg-[#25D366] rounded-xl p-5 hover:bg-[#1ebe57] transition-colors text-left">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0"><MessageCircle size={20} className="text-white" /></div>
              <div><p className="text-xs text-green-100 mb-0.5">WhatsApp</p><p className="font-semibold text-white text-sm">Chat instantly</p></div>
            </button>
          </div>

          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[#00D4FF]/10 rounded-full flex items-center justify-center mb-5"><Phone size={28} className="text-[#00D4FF]" /></div>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-2">Audit Request Received!</h3>
                <p className="text-slate-400">We will send your free audit within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input type="tel" placeholder="Phone (10 digits)" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <select value={form.service} onChange={(e) => setForm(f => ({ ...f, service: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]/50 transition-colors">
                  <option value="">Select Service (optional)</option>
                  {SERVICES.map(s => <option key={s.id} className="bg-[#0A0F1E]">{s.name}</option>)}
                </select>
                <div>
                  <textarea placeholder="Tell us about your business..." rows={3} value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please WhatsApp us.</p>}
                <button type="submit" disabled={status === "loading"} className="w-full py-3.5 bg-[#00D4FF] text-[#0A0F1E] font-bold rounded-lg hover:bg-[#0099CC] transition-colors disabled:opacity-50">
                  {status === "loading" ? "Sending…" : "Get Free Audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
