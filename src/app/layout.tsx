import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/CustomCursor"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import MobileStickyCTA from "@/components/MobileStickyCTA"

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" })

export const metadata: Metadata = {
  title: "Versa Digital — AI-Powered Digital Marketing Kerala",
  description: "AI-powered digital marketing agency. 3x traffic, 5x engagement, 4x ROAS. SEO, social media, performance marketing, video production.",
  keywords: ["digital marketing agency Kerala", "AI marketing", "SEO Kerala", "performance marketing Kochi"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body className="bg-[#050816] text-white antialiased">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
