import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import LenisProvider from "@/components/providers/LenisProvider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: "Versa Digital — AI-Powered Digital Marketing Kerala", template: "%s | Versa Digital" },
  description: "AI-powered digital marketing agency in Kochi — SEO, AEO, social media, performance ads, video, content, and WhatsApp marketing for Kerala businesses.",
  keywords: ["digital marketing Kochi", "SEO Kerala", "social media marketing", "Meta Ads", "Google Ads", "WhatsApp marketing Kerala"],
  openGraph: { type: "website", locale: "en_IN", siteName: "Versa Digital" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#050816] font-inter antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </LenisProvider>
      </body>
    </html>
  )
}
