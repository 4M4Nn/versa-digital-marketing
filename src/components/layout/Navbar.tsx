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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#0A0F1E] py-1.5 px-4 text-center text-xs text-white/70 flex items-center justify-center gap-2">
        <Phone className="w-3 h-3 text-cyan-400" />
        <span>Kerala&apos;s Leading AI-Powered Digital Marketing Agency — Call us: {SITE.phone}</span>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-space-grotesk font-bold text-xl text-gray-900">
              <span className="text-[#00D4FF]">Versa</span>
              <span>Digital</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#00D4FF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#00D4FF] text-[#0A0F1E] text-sm font-bold hover:bg-[#0099CC] transition-colors"
              >
                Get Free Audit
              </Link>
              <button
                className="md:hidden p-2 text-gray-700"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <div className="flex flex-col gap-3 pt-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[#00D4FF] py-2 border-b border-gray-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-[#00D4FF] text-[#0A0F1E] text-sm font-bold"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
