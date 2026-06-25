import ClientEntry from "@/components/loading/ClientEntry"
import HeroSection from "@/components/sections/HeroSection"
import NumbersSection from "@/components/sections/NumbersSection"
import ServicesSection from "@/components/sections/ServicesSection"
import StatementSection from "@/components/sections/StatementSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import MobileStickyBar from "@/components/ui/MobileStickyBar"

export default function HomePage() {
  return (
    <ClientEntry>
      <main>
        <HeroSection />
        <NumbersSection />
        <ServicesSection />
        <StatementSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <MobileStickyBar />
    </ClientEntry>
  )
}
