"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)

/* ─── SEO Visual: animated bar chart ─── */
function SeoVisual() {
  const seoBars = [
    { label: "Jan", h: "45%", delay: "0s" },
    { label: "Feb", h: "58%", delay: "0.1s" },
    { label: "Mar", h: "52%", delay: "0.2s" },
    { label: "Apr", h: "72%", delay: "0.3s" },
    { label: "May", h: "88%", delay: "0.4s" },
    { label: "Jun", h: "100%", delay: "0.5s" },
  ]
  return (
    <div style={{
      position: "relative",
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.25)",
      borderRadius: 14,
      padding: "24px 20px 16px",
      overflow: "hidden",
      minHeight: 220,
    }}>
      <div style={{ position: "absolute", top: 8, left: 12, fontSize: 9, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.2em" }}>ORGANIC_TRAFFIC ↑</div>
      {/* Scanning line */}
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,200,0.5),transparent)", animation: "scanLine 3.5s linear infinite", top: 0, pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 130, marginTop: 28, borderBottom: "1px solid rgba(0,212,200,0.15)", paddingBottom: 0 }}>
        {seoBars.map((b) => (
          <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
            <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
              <div style={{
                width: "100%",
                height: b.h,
                background: "linear-gradient(180deg, #00D4C8 0%, rgba(0,212,200,0.25) 100%)",
                borderRadius: "3px 3px 0 0",
                boxShadow: "0 0 10px rgba(0,212,200,0.35)",
                animation: `bar-rise 1.4s cubic-bezier(0.34,1.56,0.64,1) ${b.delay} both`,
                transformOrigin: "bottom",
              }} />
            </div>
            <span style={{ fontSize: 7, color: "rgba(0,212,200,0.5)", fontFamily: "monospace" }}>{b.label}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, color: "rgba(0,212,200,0.5)", fontFamily: "monospace" }}>6 month avg</span>
        <span style={{ fontSize: 11, color: "#00D4C8", fontFamily: "monospace", fontWeight: 700 }}>+340%</span>
      </div>
    </div>
  )
}

/* ─── Ads Visual: ROAS circular progress ring ─── */
function AdsVisual() {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = 0.76 // 3.2x out of ~4.2x max = ~76%
  const dashOffset = circumference * (1 - progress)
  return (
    <div style={{
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.25)",
      borderRadius: 14,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 220,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 8, left: 12, fontSize: 9, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.2em" }}>ROAS_METER.SYS</div>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,200,0.5),transparent)", animation: "scanLine 4s linear infinite", top: 0, pointerEvents: "none" }} />
      <svg width={130} height={130} style={{ transform: "rotate(-90deg)", marginTop: 16 }}>
        {/* Track */}
        <circle cx={65} cy={65} r={radius} fill="none" stroke="rgba(0,212,200,0.1)" strokeWidth={10} />
        {/* Progress */}
        <circle
          cx={65} cy={65} r={radius}
          fill="none"
          stroke="#00D4C8"
          strokeWidth={10}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{
            filter: "drop-shadow(0 0 8px rgba(0,212,200,0.7))",
            animation: "spinSlow 0s linear",
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
          }}
        />
        {/* Pulsing dot at tip */}
        <circle cx={65 + radius * Math.cos(2 * Math.PI * progress - Math.PI / 2)} cy={65 + radius * Math.sin(2 * Math.PI * progress - Math.PI / 2)} r={5} fill="#00D4C8" style={{ filter: "drop-shadow(0 0 6px #00D4C8)", animation: "neuralPulse 1.5s ease-in-out infinite" }} />
      </svg>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -42%)", textAlign: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#00D4C8", fontFamily: "monospace", lineHeight: 1, textShadow: "0 0 20px rgba(0,212,200,0.6)" }}>3.2x</div>
        <div style={{ fontSize: 9, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.2em", marginTop: 2 }}>ROAS</div>
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: -8 }}>
        {[{ v: "₹1", l: "SPEND" }, { v: "₹3.2", l: "RETURN" }].map(m => (
          <div key={m.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#00D4C8", fontFamily: "monospace" }}>{m.v}</div>
            <div style={{ fontSize: 8, color: "rgba(0,212,200,0.5)", fontFamily: "monospace", letterSpacing: "0.15em" }}>{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Social Visual: animated post cards with like counters ─── */
function SocialVisual() {
  const posts = [
    { platform: "IG", handle: "@versadigital", likes: "12.4K", comment: "Brand post reaching 50K+", delay: "0s", color: "#E1306C" },
    { platform: "LI", handle: "Versa Digital", likes: "3.1K", comment: "B2B thought leadership", delay: "0.2s", color: "#0A66C2" },
    { platform: "YT", handle: "VersaDigital", likes: "28K", comment: "Video campaign 200K views", delay: "0.4s", color: "#FF0000" },
  ]
  return (
    <div style={{
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.25)",
      borderRadius: 14,
      padding: "24px 16px 16px",
      minHeight: 220,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}>
      <div style={{ position: "absolute", top: 8, left: 12, fontSize: 9, color: "rgba(0,212,200,0.6)", fontFamily: "monospace", letterSpacing: "0.2em" }}>SOCIAL_FEED.LIVE</div>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,200,0.5),transparent)", animation: "scanLine 5s linear infinite", top: 0, pointerEvents: "none" }} />
      {posts.map((p) => (
        <div key={p.platform} style={{
          background: "rgba(0,212,200,0.04)",
          border: "1px solid rgba(0,212,200,0.15)",
          borderRadius: 8,
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          animation: `fadeSlideUp 0.6s ease ${p.delay} both`,
          marginTop: p.platform === "IG" ? 18 : 0,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff", fontFamily: "monospace", flexShrink: 0 }}>{p.platform}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: "rgba(0,212,200,0.7)", fontFamily: "monospace" }}>{p.handle}</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.comment}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00D4C8", fontFamily: "monospace" }}>{p.likes}</div>
            <div style={{ fontSize: 8, color: "rgba(0,212,200,0.5)", fontFamily: "monospace" }}>likes</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Content Visual: typing cursor animation ─── */
function ContentVisual() {
  const headlines = [
    "10 Growth Hacks for 2025",
    "How We 3x'd Organic Traffic",
    "The Ultimate SEO Playbook",
  ]
  return (
    <div style={{
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.25)",
      borderRadius: 14,
      padding: "24px 20px 20px",
      minHeight: 220,
      position: "relative",
      overflow: "hidden",
      fontFamily: "monospace",
    }}>
      <div style={{ position: "absolute", top: 8, left: 12, fontSize: 9, color: "rgba(0,212,200,0.6)", letterSpacing: "0.2em" }}>CONTENT_ENGINE.RUN</div>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,200,0.5),transparent)", animation: "scanLine 4.5s linear infinite", top: 0, pointerEvents: "none" }} />
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
        {headlines.map((h, i) => (
          <div key={h} style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.25}s both` }}>
            <div style={{ fontSize: 8, color: "rgba(0,212,200,0.4)", marginBottom: 4, letterSpacing: "0.15em" }}>{i === 0 ? "BLOG POST" : i === 1 ? "CASE STUDY" : "GUIDE"}</div>
            <div style={{
              fontSize: 12,
              color: i === 0 ? "#00D4C8" : "rgba(255,255,255,0.7)",
              fontWeight: i === 0 ? 700 : 400,
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: i === 0 ? "2px solid #00D4C8" : "none",
              animation: i === 0 ? `typing 2s steps(${h.length}) 0.5s both, blinkCursor 0.75s step-end infinite` : undefined,
              maxWidth: "100%",
            }}>{h}</div>
            {i < 2 && <div style={{ height: 1, background: "rgba(0,212,200,0.1)", marginTop: 10 }} />}
          </div>
        ))}
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          {["68% CVR", "4.5min Read", "SEO A+"].map(tag => (
            <span key={tag} style={{ fontSize: 8, color: "rgba(0,212,200,0.7)", border: "1px solid rgba(0,212,200,0.25)", borderRadius: 4, padding: "2px 6px", letterSpacing: "0.1em" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Web Design Visual: CSS browser mockup with loading bar ─── */
function WebVisual() {
  return (
    <div style={{
      background: "#0A1628",
      border: "1px solid rgba(0,212,200,0.25)",
      borderRadius: 14,
      padding: "24px 16px 16px",
      minHeight: 220,
      position: "relative",
      overflow: "hidden",
      fontFamily: "monospace",
    }}>
      <div style={{ position: "absolute", top: 8, left: 12, fontSize: 9, color: "rgba(0,212,200,0.6)", letterSpacing: "0.2em" }}>BROWSER_PREVIEW.SIM</div>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,200,0.5),transparent)", animation: "scanLine 3s linear infinite", top: 0, pointerEvents: "none" }} />
      {/* Browser chrome */}
      <div style={{ marginTop: 22, background: "#060D0F", borderRadius: "8px 8px 0 0", border: "1px solid rgba(0,212,200,0.2)", overflow: "hidden" }}>
        {/* Title bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderBottom: "1px solid rgba(0,212,200,0.1)", background: "rgba(0,212,200,0.04)" }}>
          {["#FF5F57","#FFBD2E","#28CA41"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
          <div style={{ flex: 1, height: 14, background: "rgba(0,212,200,0.08)", borderRadius: 3, marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 8 }}>
            <span style={{ fontSize: 7, color: "rgba(0,212,200,0.5)" }}>versadigital.in</span>
          </div>
        </div>
        {/* Loading bar */}
        <div style={{ height: 2, background: "rgba(0,212,200,0.1)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "100%", background: "linear-gradient(90deg,transparent,#00D4C8,transparent)", backgroundSize: "200% 100%", animation: "shimmer 1.5s ease-in-out infinite" }} />
        </div>
        {/* Page content mockup */}
        <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Nav */}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 40, height: 8, background: "#00D4C8", borderRadius: 2, opacity: 0.8 }} />
            <div style={{ flex: 1 }} />
            {[30, 28, 32].map((w, i) => <div key={i} style={{ width: w, height: 6, background: "rgba(0,212,200,0.2)", borderRadius: 2 }} />)}
          </div>
          {/* Hero block */}
          <div style={{ background: "rgba(0,212,200,0.05)", borderRadius: 4, padding: "10px 8px", border: "1px solid rgba(0,212,200,0.1)" }}>
            <div style={{ width: "70%", height: 8, background: "rgba(0,212,200,0.3)", borderRadius: 2, marginBottom: 6, animation: "shimmer 2s ease-in-out infinite", backgroundSize: "200% 100%" }} />
            <div style={{ width: "50%", height: 6, background: "rgba(0,212,200,0.15)", borderRadius: 2, marginBottom: 8 }} />
            <div style={{ display: "inline-block", padding: "4px 10px", background: "#00D4C8", borderRadius: 2 }}>
              <div style={{ width: 28, height: 5, background: "#060D0F", borderRadius: 1 }} />
            </div>
          </div>
          {/* Metric row */}
          <div style={{ display: "flex", gap: 4 }}>
            {["2.8s", "99", "A+"].map((v, i) => (
              <div key={v} style={{ flex: 1, background: "rgba(0,212,200,0.06)", borderRadius: 4, padding: "5px 4px", textAlign: "center", border: "1px solid rgba(0,212,200,0.15)", animation: `fadeSlideUp 0.5s ease ${0.2 + i * 0.15}s both` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#00D4C8" }}>{v}</div>
                <div style={{ fontSize: 7, color: "rgba(0,212,200,0.4)" }}>{["Load", "Score", "Perf"][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const serviceVisuals: Record<string, React.ReactNode> = {
  seo: <SeoVisual />,
  ads: <AdsVisual />,
  social: <SocialVisual />,
  content: <ContentVisual />,
  web: <WebVisual />,
}

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const left = sec.current?.querySelector(".sl")
      const right = sec.current?.querySelector(".sr")
      if (!left || !right) return
      gsap.set(left, { x: -60, opacity: 0 })
      gsap.set(right, { x: 60, opacity: 0 })
      ScrollTrigger.create({ trigger: sec.current, start: "top 75%",
        onEnter: () => {
          gsap.to(left, { x: 0, opacity: 1, duration: 1, ease: "power4.out" })
          gsap.to(right, { x: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.1 })
        }
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  const isEven = i % 2 === 0
  return (
    <section ref={sec} id={`service-${s.id}`} className="min-h-screen flex items-center border-b border-white/5 px-6 md:px-12 py-24" style={{ background: isEven ? "#060D0F" : "#0A1518" }}>
      <div className={`max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
        <div className={`sl ${isEven ? "" : "md:order-2"}`}>
          <p className="label text-[#00C9B8] mb-4" style={{ letterSpacing: "3px" }}>{s.num} / {s.short}</p>
          <h2 className="font-space font-bold text-white mb-4" style={{ fontSize: "clamp(28px,4vw,56px)", lineHeight: 1.1 }}>{s.name}</h2>
          <p className="font-inter text-[#6B8080] mb-8" style={{ fontSize: 17, lineHeight: 1.7 }}>{s.desc}</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#00C9B8] font-space font-medium text-sm hover:gap-3 transition-all">Get This Service →</a>
        </div>
        <div className={`sr ${isEven ? "" : "md:order-1"}`}>
          {serviceVisuals[s.id] ?? (
            <div className="flex items-center justify-center min-h-[240px] rounded-2xl border border-[#00C9B8]/10" style={{ background: "linear-gradient(135deg, rgba(0,201,184,0.05) 0%, rgba(139,92,246,0.05) 100%)" }}>
              <div className="text-center p-10">
                <div className="font-space font-bold mb-2" style={{ fontSize: "clamp(48px,7vw,80px)", color: "#00C9B8" }}>{s.stat}</div>
                <p className="label text-[#6B8080]" style={{ letterSpacing: "2px" }}>{s.statLabel}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function ServicesSection() {
  return <div id="services">{services.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}</div>
}
