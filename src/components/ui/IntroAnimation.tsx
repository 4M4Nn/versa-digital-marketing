"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroAnimationProps {
  onComplete: () => void
}

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 10 + (i % 6) * 16,
  y: 20 + Math.floor(i / 6) * 60,
  delay: i * 0.07,
}))

const STREAMS = [
  { x1: 5, y1: 20, x2: 95, y2: 45, delay: 0.1 },
  { x1: 5, y1: 50, x2: 95, y2: 30, delay: 0.25 },
  { x1: 5, y1: 80, x2: 95, y2: 70, delay: 0.15 },
]

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [typed, setTyped] = useState("")
  const tagline = "Marketing That Delivers"

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1300)
    const t4 = setTimeout(() => { setVisible(false) }, 2200)
    const t5 = setTimeout(() => onComplete(), 2700)
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout) }
  }, [onComplete])

  useEffect(() => {
    if (phase < 3) return
    let i = 0
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i + 1))
      i++
      if (i >= tagline.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [phase])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="digital-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0E1A]"
        >
          <div className="relative flex flex-col items-center gap-5">
            {/* Data streams SVG */}
            <div className="relative w-48 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                {STREAMS.map((s, i) => (
                  <motion.line
                    key={i}
                    x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                    stroke="#00D4FF"
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                    strokeDasharray="100"
                    strokeDashoffset={100}
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: phase >= 1 ? 0 : 100 }}
                    transition={{ duration: 0.6, delay: s.delay }}
                  />
                ))}
                {PARTICLES.map((p) => (
                  <motion.circle
                    key={p.id}
                    cx={p.x}
                    cy={p.y}
                    r="2"
                    fill="#00D4FF"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: phase >= 1 ? [0, 1, 0.6] : 0, scale: phase >= 1 ? [0, 1.5, 1] : 0 }}
                    transition={{ duration: 0.5, delay: p.delay }}
                  />
                ))}
              </svg>
            </div>

            {/* VERSA DIGITAL text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 15 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-white font-bold text-3xl tracking-[0.35em] uppercase">
                VERSA <span className="text-[#00D4FF]">DIGITAL</span>
              </p>
            </motion.div>

            {/* Typing tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-[#00D4FF]/80 text-sm tracking-widest">
                {typed}<span className="animate-pulse">|</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
