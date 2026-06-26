import type { Metadata } from "next"
import ClientWrapper from "@/components/layout/ClientWrapper"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "Versa Digital — AI-Powered Digital Marketing Kerala | SEO, Ads, Social Media",
  description: "Kerala's AI-first digital marketing agency. SEO, AEO, performance ads, social media, video, content, WhatsApp marketing. 3-5x results guaranteed.",
}

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroSection />
      <ServicesSection />
      <FoundersSection />
      <BlogSection />
      <FAQSection />
      <SchemesSection />
    </ClientWrapper>
  )
}
