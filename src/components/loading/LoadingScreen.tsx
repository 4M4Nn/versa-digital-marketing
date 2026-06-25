"use client"
import { useEffect, useState } from "react"

const CHARS = "01アイウエオカキクケコサシスセソ<>{}[]|/\\+=-_*&^%$#@!?~"
const COLS = 8

function MatrixColumn({ delay, speed, chars }: { delay: number; speed: number; chars: string }) {
  return (
    <div className="absolute top-0 flex flex-col" style={{ animationDelay: `${delay}s`, left: `${Math.random() * 100}%` }}>
      {chars.split("").map((c, i) => (
        <span key={i} style={{ color: i === chars.length - 1 ? "#fff" : "#00D4C8", opacity: 1 - i * 0.08, fontSize: 14, lineHeight: "20px", display: "block", animation: `matrixFall ${speed}s linear ${delay}s infinite` }}>
          {c}
        </span>
      ))}
    </div>
  )
}

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("digital-intro-done")) {
      onDone(); setDone(true); return
    }
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => setPhase(3), 2200)
    const t4 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => { sessionStorage.setItem("digital-intro-done", "1"); onDone(); setDone(true) }, 500)
    }, 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onDone])

  if (done) return null

  const cols = Array.from({ length: COLS }, (_, i) => ({
    delay: i * 0.3,
    speed: 2.5 + i * 0.4,
    chars: CHARS.slice(0, 8 + i * 2)
  }))

  const letters = "VERSA DIGITAL".split("")

  return (
    <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 9999, overflow: "hidden", transition: "opacity 0.5s", opacity: visible ? 1 : 0 }}>
      {/* Matrix rain */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {cols.map((col, i) => (
          <div key={i} style={{ position: "absolute", top: 0, left: `${(i + 0.5) * (100 / COLS)}%`, display: "flex", flexDirection: "column", animation: `matrixFall ${col.speed}s linear ${col.delay}s infinite` }}>
            {col.chars.split("").map((c, j) => (
              <span key={j} style={{ color: j === 0 ? "#fff" : "#00D4C8", opacity: Math.max(0, 1 - j * 0.1), fontSize: 14, lineHeight: "20px", display: "block", fontFamily: "monospace" }}>{c}</span>
            ))}
          </div>
        ))}
      </div>
      {/* Scan line */}
      <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#00D4C8,transparent)", boxShadow: "0 0 20px #00D4C8", animation: "scanLine 2s linear infinite", top: 0 }} />
      {/* Center text */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {letters.map((l, i) => (
            <span key={i} style={{ fontSize: "clamp(28px,6vw,56px)", fontWeight: 900, color: l === " " ? "transparent" : "#00D4C8", textShadow: "0 0 20px #00D4C8, 0 0 40px #00D4C8", letterSpacing: "0.1em", transition: "opacity 0.3s, transform 0.5s", opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "translateY(0)" : "translateY(20px)", transitionDelay: `${i * 0.06}s`, fontFamily: "monospace" }}>
              {l === " " ? " " : l}
            </span>
          ))}
        </div>
        <div style={{ width: phase >= 2 ? 200 : 0, height: 2, background: "linear-gradient(90deg,transparent,#00D4C8,transparent)", transition: "width 0.8s ease", boxShadow: "0 0 10px #00D4C8" }} />
        <p style={{ fontSize: 12, letterSpacing: "0.3em", color: "#00D4C8", opacity: phase >= 3 ? 0.7 : 0, transition: "opacity 0.5s", fontFamily: "monospace" }}>MARKETING_INTELLIGENCE.INIT</p>
      </div>
    </div>
  )
}
