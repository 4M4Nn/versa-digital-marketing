import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { SERVICES, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)
  if (!service) return { title: "Not Found" }
  return { title: service.name, description: service.description }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)
  if (!service) notFound()

  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(`Hi, I want to know more about ${service.name} from Versa Digital.`)}`

  return (
    <div className="bg-[#050816]">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-[#00D4FF] text-sm font-medium hover:gap-3 transition-all">
          <ArrowLeft size={16} /> All Services
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl mb-8">
          <Image src={service.image} alt={service.name} fill className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white border" style={{ borderColor: `${service.color}55`, backgroundColor: `${service.color}22` }}>
              {service.results}
            </span>
          </div>
        </div>

        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: service.color }}>{service.tagline}</p>
        <h1 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white mb-4">{service.name}</h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="font-space-grotesk text-xl font-bold text-white mb-4">What&apos;s Included</h2>
          <ul className="space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 size={18} style={{ color: service.color }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 rounded-2xl p-8 text-center">
          <h3 className="font-space-grotesk text-2xl font-bold text-white mb-3">Ready to See Results?</h3>
          <p className="text-slate-400 mb-6">Start with a free audit — no commitment required.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00D4FF] text-[#0A0F1E] font-bold px-8 py-4 rounded-full hover:bg-[#0099CC] transition-colors">
            Get Free Audit
          </a>
        </div>
      </article>
    </div>
  )
}
