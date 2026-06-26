import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"
export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights for Kerala",
  description: "Expert insights on AI SEO, performance marketing, social media, and WhatsApp marketing for Kerala businesses.",
}
export default function BlogPage() {
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-4">INSIGHTS</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white">Marketing Intelligence</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl p-6 flex flex-col gap-3 border border-[#00D4FF]/10 hover:border-[#00D4FF]/30 transition-all" style={{ background:"rgba(0,212,255,0.03)" }}>
              <span className="text-xs px-2 py-1 rounded self-start" style={{ background:"#00D4FF20", color:"#00D4FF" }}>{p.tag}</span>
              <h2 className="font-space-grotesk font-bold text-white group-hover:text-[#00D4FF] transition-colors leading-snug">{p.title}</h2>
              <p className="text-[#6B8080] text-sm leading-relaxed">{p.excerpt}</p>
              <span className="text-[#00D4FF] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
