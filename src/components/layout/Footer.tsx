import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { SITE, SERVICES, NAV_LINKS } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-space-grotesk font-bold text-2xl mb-4">
              <span className="text-[#00D4FF]">Versa</span> Digital
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kerala&apos;s most advanced AI-powered digital marketing agency. We deliver real results — not vanity metrics.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                {SITE.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#00D4FF]" />
                {SITE.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-white mb-4">Free Audit</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get a 20-point digital marketing audit of your business. Free, no strings attached.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#00D4FF] text-[#0A0F1E] text-sm font-bold hover:bg-[#0099CC] transition-colors"
            >
              Claim Free Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Versa Digital. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            AI-Powered Digital Marketing | Kochi, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}
