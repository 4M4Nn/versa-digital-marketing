"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import IntroAnimation from "./IntroAnimation"

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!sessionStorage.getItem("digital-intro-seen")) {
      setShowIntro(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {showIntro && (
        <IntroAnimation
          onComplete={() => {
            sessionStorage.setItem("digital-intro-seen", "1")
            setShowIntro(false)
          }}
        />
      )}
    </AnimatePresence>
  )
}
