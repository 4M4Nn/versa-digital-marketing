"use client"
import { motion } from "framer-motion"
import { metrics } from "@/lib/data"

export default function DigitalMetrics() {
  return (
    <section className="py-16 bg-[#0A0F1E] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6E44FF] bg-clip-text text-transparent mb-2">
                {m.prefix}{m.value}{m.suffix}
              </p>
              <p className="text-[#8892B0] text-sm">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
