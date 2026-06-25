import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/components/providers/LenisProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-space", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Versa Digital — Performance Marketing Agency Kochi | SEO, Ads, Social Media",
  description: "Kerala's top performance marketing agency. SEO, Google Ads, Social Media Marketing and Web Design. 200+ brands scaled. 340% avg organic growth.",
  keywords: ["digital marketing Kochi", "SEO agency Kerala", "Google Ads Kerala", "performance marketing India", "social media agency Kochi"],
  openGraph: { title: "Versa Digital — Performance Marketing Agency", description: "200+ brands scaled. Data-driven digital marketing.", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#060D0F] text-white overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  )
}
