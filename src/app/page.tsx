import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import SchemesSection from "@/components/sections/SchemesSection"
import FAQSection from "@/components/sections/FAQSection"
import ContactSection from "@/components/sections/ContactSection"
import { SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: `${SITE.name} — AI-Powered Digital Marketing Kerala`,
  description: "Kerala's leading AI-powered digital marketing agency. SEO, Meta ads, social media, WhatsApp marketing, video production.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FoundersSection />
      <BlogSection />
      <SchemesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
