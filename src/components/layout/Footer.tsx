import Link from "next/link"
import { WA_URL, PHONE, EMAIL, ADDRESS, PARENT_URL } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#030610] border-t border-[#00D4FF]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-space-grotesk text-xl font-bold mb-3"><span className="text-[#00D4FF]">Versa</span><span className="text-white">Digital</span></p>
            <p className="text-[#6B8080] text-sm leading-relaxed">AI-Powered Digital Marketing for Kerala Businesses.</p>
            <p className="text-[#6B8080] text-xs mt-3">{ADDRESS}</p>
            <a href={PARENT_URL} className="text-[#00D4FF] text-xs mt-2 inline-block hover:underline">A Versa Growth Ventures company</a>
          </div>
          <div>
            <p className="text-[#00D4FF] text-xs tracking-widest uppercase mb-4">Services</p>
            {[["AI SEO + AEO","/services/ai-seo-aeo"],["Social Media","/services/social-media"],["Performance Marketing","/services/performance-marketing"],["Video Marketing","/services/video-marketing"],["WhatsApp Marketing","/services/whatsapp-marketing"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#6B8080] text-sm mb-2 hover:text-[#00D4FF] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#00D4FF] text-xs tracking-widest uppercase mb-4">Company</p>
            {[["Portfolio","/portfolio"],["About","/about"],["Blog","/blog"],["FAQ","/faq"],["Schemes","/schemes"],["Contact","/contact"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#6B8080] text-sm mb-2 hover:text-[#00D4FF] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#00D4FF] text-xs tracking-widest uppercase mb-4">Contact</p>
            <a href={`tel:${PHONE}`} className="block text-[#6B8080] text-sm mb-2 hover:text-[#00D4FF]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="block text-[#6B8080] text-sm mb-2 hover:text-[#00D4FF]">{EMAIL}</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block text-[#6B8080] text-sm hover:text-[#00D4FF]">WhatsApp Us</a>
          </div>
        </div>
        <div className="border-t border-[#00D4FF]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B8080] text-xs">© {new Date().getFullYear()} Versa Digital. All rights reserved.</p>
          <p className="text-[#6B8080] text-xs">Part of Versa Growth Ventures</p>
        </div>
      </div>
    </footer>
  )
}
