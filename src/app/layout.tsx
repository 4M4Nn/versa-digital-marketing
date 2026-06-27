import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/layout/MobileStickyBar"
import { SITE } from "@/lib/data"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: `${SITE.name} — AI-Powered Digital Marketing Kerala`, template: `%s | ${SITE.name}` },
  description: "Kerala's most results-driven digital marketing agency. AI SEO, performance ads, social media, and video marketing.",
  keywords: ["Versa Digital", "digital marketing Kerala", "SEO Kochi", "Meta ads Kerala", "social media marketing"],
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#050816] font-inter antialiased">
        <Navbar />
        <main className="pt-[64px] md:pt-[88px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  )
}
