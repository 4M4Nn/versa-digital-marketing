"use client"
import { useState } from "react"
import LoadingScreen from "./LoadingScreen"

export default function ClientEntry({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  return (
    <>
      <LoadingScreen onDone={() => setReady(true)} />
      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.4s ease 0.1s" }}>
        {children}
      </div>
    </>
  )
}
