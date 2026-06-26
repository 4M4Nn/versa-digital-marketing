"use client"
import { useState } from "react"
import { submitLead } from "@/lib/supabase"
import { WA_URL, PHONE, EMAIL, ADDRESS, SOURCE } from "@/lib/data"
export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" })
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit phone"
    if (!form.message.trim()) e.message = "Required"
    return e
  }
  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setStatus("loading")
    try { await submitLead({...form, source:SOURCE, created_at:new Date().toISOString()}); setStatus("success") }
    catch { setStatus("error") }
  }
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">LET&apos;S TALK</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white">Start Growing Your Business</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-8 border border-[#00D4FF]/10" style={{ background:"rgba(0,212,255,0.03)" }}>
            {status === "success" ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">✓</p>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#6B8080]">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[["name","Your Name","text"],["email","Email Address","email"],["phone","Phone Number","tel"]].map(([k,l,t]) => (
                  <div key={k}>
                    <input type={t} placeholder={l} value={form[k as keyof typeof form]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))}
                      className="w-full bg-[#030610] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#6B8080] focus:outline-none focus:border-[#00D4FF] transition-colors" />
                    {errors[k] && <p className="text-red-400 text-xs mt-1">{errors[k]}</p>}
                  </div>
                ))}
                <select value={form.service} onChange={e => setForm(f => ({...f, service:e.target.value}))}
                  className="w-full bg-[#030610] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D4FF]" style={{ color:form.service?"white":"#6B8080" }}>
                  <option value="">Select Service (optional)</option>
                  <option>AI SEO + AEO</option><option>Social Media Marketing</option><option>Performance Marketing</option>
                  <option>Video Marketing</option><option>Content Marketing</option><option>WhatsApp Marketing</option><option>Podcast Marketing</option>
                </select>
                <div>
                  <textarea placeholder="Tell us about your business and goals" rows={4} value={form.message} onChange={e => setForm(f => ({...f, message:e.target.value}))}
                    className="w-full bg-[#030610] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#6B8080] focus:outline-none focus:border-[#00D4FF] resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please WhatsApp us.</p>}
                <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-[#00D4FF] text-[#050816] font-bold text-sm tracking-widest uppercase hover:opacity-90 disabled:opacity-50 transition-opacity">
                  {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {[["📞","Phone",PHONE,`tel:${PHONE}`],["✉️","Email",EMAIL,`mailto:${EMAIL}`],["💬","WhatsApp","Chat for free audit",WA_URL],["📍","Location",ADDRESS,"#"]].map(([icon,label,value,link]) => (
              <a key={label} href={link} target={link.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                className="rounded-xl p-5 flex items-center gap-4 border border-[#00D4FF]/10 hover:border-[#00D4FF]/25 transition-all" style={{ background:"rgba(0,212,255,0.03)" }}>
                <span className="text-2xl">{icon}</span>
                <div><p className="text-[#00D4FF] text-xs tracking-widest uppercase mb-1">{label}</p><p className="text-white text-sm">{value}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
