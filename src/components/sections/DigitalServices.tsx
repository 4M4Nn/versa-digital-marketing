"use client"
import { motion } from "framer-motion"
import { services } from "@/lib/data"

export default function DigitalServices() {
  return (
    <section id="services" className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#00D4FF] text-xs tracking-widest uppercase font-medium">What We Do</span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Full-Spectrum Digital Marketing</h2>
          <p className="text-[#8892B0] max-w-2xl mx-auto">Every channel. Every format. All powered by AI to maximize your return on marketing investment.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#8892B0]">{svc.number}</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: svc.color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{svc.title}</h3>
              <p className="text-[#00D4FF] text-sm font-medium mb-3">{svc.subtitle}</p>
              <p className="text-[#8892B0] text-sm leading-relaxed mb-4">{svc.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-white/5" style={{ color: svc.color }}>
                ✓ {svc.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
