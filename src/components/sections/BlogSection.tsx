import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"
export default function BlogSection() {
  return (
    <section className="py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#00D4FF] text-xs tracking-[0.4em] uppercase mb-3">INSIGHTS</p>
            <h2 className="font-space-grotesk text-3xl font-bold text-white">Marketing Intelligence</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-xs tracking-widest text-[#00D4FF] border border-[#00D4FF]/30 px-4 py-2">VIEW ALL</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl p-5 flex flex-col gap-3 border border-[#00D4FF]/10 hover:border-[#00D4FF]/30 transition-all" style={{ background:"rgba(0,212,255,0.03)" }}>
              <span className="text-xs px-2 py-1 rounded self-start" style={{ background:"#00D4FF20", color:"#00D4FF" }}>{p.tag}</span>
              <h3 className="font-space-grotesk font-bold text-white group-hover:text-[#00D4FF] transition-colors leading-snug">{p.title}</h3>
              <p className="text-[#6B8080] text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
              <span className="text-[#00D4FF] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
