"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, WHATSAPP } from "@/lib/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050816]/95 backdrop-blur-md border-b border-[#00D4FF]/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="font-space-grotesk text-xl font-bold">
            <span className="text-[#00D4FF]">Versa</span><span className="text-white">Digital</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="text-xs tracking-widest text-[#6B8080] hover:text-[#00D4FF] transition-colors uppercase">{l.label}</Link>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="text-xs px-4 py-2 border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#050816] transition-all tracking-widest">GET AUDIT</a>
          </div>
          <button className="md:hidden text-[#00D4FF]" onClick={() => setOpen(true)}><Menu size={22} /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050816] flex flex-col items-center justify-center gap-7">
            <button className="absolute top-5 right-6 text-[#00D4FF]" onClick={() => setOpen(false)}><X size={24} /></button>
            {NAV_LINKS.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={l.href} className="text-2xl text-white hover:text-[#00D4FF] transition-colors font-space-grotesk font-bold" onClick={() => setOpen(false)}>{l.label}</Link>
              </motion.div>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 border border-[#00D4FF] text-[#00D4FF] text-sm tracking-widest">Free Audit</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
