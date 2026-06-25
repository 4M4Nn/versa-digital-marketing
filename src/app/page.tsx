import type { Metadata } from "next"
import DigitalHero from "@/components/sections/DigitalHero"
import DigitalServices from "@/components/sections/DigitalServices"
import DigitalMetrics from "@/components/sections/DigitalMetrics"
import DigitalContact from "@/components/sections/DigitalContact"

export const metadata: Metadata = {
  title: "Versa Digital — AI-Powered Digital Marketing Kerala",
  description: "AI-powered digital marketing agency. 3x traffic, 5x engagement, 4x ROAS. Kochi, Kerala.",
}

export default function HomePage() {
  return (
    <main>
      <DigitalHero />
      <DigitalMetrics />
      <DigitalServices />
      <DigitalContact />
    </main>
  )
}
