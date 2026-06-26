"use client"
import { useState } from "react"
import LoadingScreen from "@/components/loading/LoadingScreen"
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  return (
    <>
      <LoadingScreen onDone={() => setReady(true)} />
      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>{children}</div>
    </>
  )
}
