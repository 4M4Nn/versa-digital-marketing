"use client"
import { useEffect, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*"

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState(0)
  const [cols, setCols] = useState<string[][]>([])
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("digital-intro")) {
      onDone?.(); setDone(true); return
    }
    const numCols = 12
    const rows = 18
    const c = Array.from({ length: numCols }, () => Array.from({ length: rows }, () => CHARS[Math.floor(Math.random() * CHARS.length)]))
    setCols(c)
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => setPhase(3), 2000)
    const t4 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => { sessionStorage.setItem("digital-intro","1"); onDone?.(); setDone(true) }, 700)
    }, 3200)
    const interval = setInterval(() => {
      setCols(prev => prev.map(col => col.map(ch => Math.random() > 0.7 ? CHARS[Math.floor(Math.random() * CHARS.length)] : ch)))
    }, 80)
    setTimeout(() => clearInterval(interval), 2000)
    return () => { [t1,t2,t3,t4].forEach(clearTimeout); clearInterval(interval) }
  }, [onDone])

  if (done) return null

  return (
    <div style={{
      position:"fixed",inset:0,background:"#050816",zIndex:9999,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      transition:"opacity 0.7s ease",opacity:visible?1:0,overflow:"hidden"
    }}>
      {/* Matrix rain */}
      <div style={{ position:"absolute",inset:0,display:"flex",gap:8,padding:16,opacity:phase>=1?0.3:0,transition:"opacity 0.5s" }}>
        {cols.map((col, ci) => (
          <div key={ci} style={{ display:"flex",flexDirection:"column",gap:4 }}>
            {col.map((ch, ri) => (
              <span key={ri} style={{
                fontSize:11, color:`hsl(${180+ci*10},100%,${40+ri*2}%)`,
                fontFamily:"monospace", lineHeight:1.4,
                animation: phase>=1 ? `fadeIn 0.3s ${(ci*18+ri)*8}ms both` : "none"
              }}>{ch}</span>
            ))}
          </div>
        ))}
      </div>
      {/* Brand overlay */}
      <div style={{ position:"relative",zIndex:1,textAlign:"center" }}>
        <div style={{
          fontSize:"clamp(48px,8vw,80px)",fontWeight:900,
          background:"linear-gradient(135deg,#00D4FF,#8B5CF6)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
          letterSpacing:"0.2em",fontFamily:"sans-serif",
          opacity:phase>=2?1:0,transform:phase>=2?"translateY(0)":"translateY(20px)",
          transition:"opacity 0.6s,transform 0.6s"
        }}>VERSA</div>
        <div style={{
          fontSize:14,color:"#00D4FF",letterSpacing:"0.5em",textTransform:"uppercase",marginTop:4,
          opacity:phase>=2?1:0,transition:"opacity 0.6s 0.2s"
        }}>DIGITAL</div>
        <div style={{
          height:2,background:"linear-gradient(90deg,transparent,#00D4FF,#8B5CF6,transparent)",
          width:phase>=3?200:0,margin:"12px auto 0",transition:"width 0.8s ease"
        }} />
        <div style={{
          fontSize:11,color:"rgba(0,212,255,0.6)",letterSpacing:"0.3em",marginTop:8,
          opacity:phase>=3?1:0,transition:"opacity 0.5s"
        }}>AI-POWERED MARKETING</div>
      </div>
    </div>
  )
}
