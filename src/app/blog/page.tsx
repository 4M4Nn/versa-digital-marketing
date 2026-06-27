import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Digital Marketing Blog",
  description: "Expert insights on AI SEO, Meta ads, WhatsApp marketing, and digital growth from Versa Digital.",
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="bg-[#050816]">
      <section className="bg-[#0A0F1E] py-16 px-4 text-center">
        <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase mb-4">Knowledge Base</p>
        <h1 className="font-space-grotesk text-4xl font-bold text-white mb-4">Digital Marketing Insights</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Expert perspectives on AI marketing, SEO, ads, and growth strategies for Kerala businesses.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-12 hover:border-[#00D4FF]/30 transition-all">
            <div className="relative h-64 md:h-auto">
              <Image src={featured.image} alt={featured.title} fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                <span className="text-xs text-slate-500">Featured</span>
              </div>
              <h2 className="font-space-grotesk text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">{featured.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="text-xs text-slate-500">{featured.date}</p>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
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
          )}
        </div>
      </section>
    </div>
  )
}
