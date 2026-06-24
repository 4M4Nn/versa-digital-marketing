import { siteConfig } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#030510] border-t border-[#00D4FF]/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6E44FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">VD</span>
            </div>
            <div>
              <p className="text-white font-bold">Versa Digital</p>
              <p className="text-[#00D4FF] text-xs">AI-Powered Digital Marketing</p>
            </div>
          </div>
          <div className="flex gap-8 text-[#8892B0] text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-[#8892B0] text-sm">{siteConfig.phone}</div>
        </div>
        <div className="border-t border-[#00D4FF]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8892B0] text-sm">© {new Date().getFullYear()} Versa Digital · A Versa Growth Ventures Company</p>
          <p className="text-[#8892B0] text-sm">Built by <span className="text-[#00D4FF]">Loopgen Technologies</span></p>
        </div>
      </div>
    </footer>
  )
}
