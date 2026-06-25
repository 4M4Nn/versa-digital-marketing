"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
export default function LoadingScreen() {
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setGone(true) })
      gsap.set(textRef.current, { opacity: 0, y: 20 })
      tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(lineRef.current, { width: "100%", duration: 0.8, ease: "power2.out" }, "-=0.2")
        .to(topRef.current, { y: "-100%", duration: 0.7, ease: "power4.inOut" }, "+=0.3")
        .to(botRef.current, { y: "100%", duration: 0.7, ease: "power4.inOut" }, "<")
    })
    return () => ctx.revert()
  }, [])
  if (gone) return null
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#060D0F] flex items-end justify-center pb-8">
        <div className="text-center">
          <div ref={textRef} className="font-space font-bold text-4xl text-white tracking-widest">VERSA <span className="text-[#00C9B8]">DIGITAL</span></div>
          <span ref={lineRef} className="block h-0.5 bg-[#00C9B8] mt-2 mx-auto" style={{ width: 0 }} />
        </div>
      </div>
      <div ref={botRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#060D0F]" />
    </div>
  )
}
