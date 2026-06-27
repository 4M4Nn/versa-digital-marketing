import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#050816] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-3">Insights</p>
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white">Digital Marketing Blog</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#00D4FF] font-semibold text-sm hover:gap-2.5 transition-all">
            All Articles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D4FF]/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold px-3 py-1 rounded-full mb-3">{post.category}</span>
                <h3 className="font-space-grotesk text-base font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <p className="text-xs text-slate-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
