"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="bg-[#0A0F1E] py-1.5 px-4 text-center text-[11px] text-white/70 hidden md:flex items-center justify-center gap-2">
          <Phone className="w-3 h-3 text-cyan-400" />
          <span>Kerala&apos;s Leading AI-Powered Digital Marketing Agency — Call us: {SITE.phone}</span>
        </div>

        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-space-grotesk font-bold text-xl text-gray-900">
                <span className="text-[#00D4FF]">Versa</span>
                <span>Digital</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link href="/#contact" className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#00D4FF] text-[#0A0F1E] text-sm font-bold hover:bg-[#0099CC] transition-colors">
                  Get Free Audit
                </Link>
                <button className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden flex flex-col transition-all duration-300 ${open ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-1 font-space-grotesk font-bold text-xl">
            <span className="text-[#00D4FF]">Versa</span><span>Digital</span>
          </Link>
          <button className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-semibold text-gray-800 hover:text-[#00D4FF] hover:bg-cyan-50 rounded-xl transition-all min-h-[56px]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-gray-100 space-y-3 shrink-0">
          <Link href="/#contact" onClick={() => setOpen(false)} className="flex items-center justify-center w-full bg-[#00D4FF] text-[#0A0F1E] font-bold py-4 rounded-xl text-base hover:bg-[#0099CC] transition-colors min-h-[56px]">
            Get Free Audit
          </Link>
          <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 w-full border-2 border-[#00D4FF] text-[#00D4FF] font-bold py-4 rounded-xl text-base hover:bg-cyan-50 transition-colors min-h-[56px]">
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </>
  )
}
