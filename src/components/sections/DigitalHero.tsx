"use client"
import { motion } from "framer-motion"

export default function DigitalHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#6E44FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(0,212,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(110,68,255,0.03) 0%, transparent 50%)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[#00D4FF] text-xs tracking-widest font-medium uppercase">AI-Powered Digital Marketing · Kerala</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-grotesk text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Marketing That<br /><span className="bg-gradient-to-r from-[#00D4FF] to-[#6E44FF] bg-clip-text text-transparent">Thinks</span><br />For Itself.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-[#8892B0] text-xl leading-relaxed mb-10 max-w-2xl">
            AI-powered SEO, social media, performance marketing, video production, and WhatsApp automation. Delivering 3x traffic, 5x engagement, and 4x ROAS for Kerala businesses.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6E44FF] text-white rounded-full font-bold transition-all duration-300 hover:opacity-90 text-center">
              Get Free Marketing Audit
            </a>
            <a href="#services" className="px-8 py-4 border border-white/20 hover:border-[#00D4FF] text-white rounded-full font-medium transition-all duration-300 text-center">
              See Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
