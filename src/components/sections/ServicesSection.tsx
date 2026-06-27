import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SERVICES } from "@/lib/data"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0A0F1E] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white">7 Services. One Agency.</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Each service is delivered by specialists, not generalists — and backed by data.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D4FF]/30 hover:bg-white/8 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: `${service.color}33`, border: `1px solid ${service.color}55` }}>
                    {service.results}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: service.color }}>{service.tagline}</p>
                <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={12} style={{ color: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: service.color }}>
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
