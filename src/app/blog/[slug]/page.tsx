import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { BLOG_POSTS, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Not Found" }
  return { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-[#050816]">
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#00D4FF] text-sm font-medium hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <span className="inline-block bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold px-3 py-1 rounded-full mb-4">{post.category}</span>
        <h1 className="font-space-grotesk text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-slate-500 text-sm mb-6">{post.date} · Versa Digital Team</p>

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl mb-10">
          <Image src={post.image} alt={post.title} fill className="object-cover opacity-70" />
        </div>

        <div className="space-y-5">
          {post.body.split("\n\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">{para.trim()}</p>
          ))}
        </div>

        <div className="mt-12 bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-2xl p-8 text-center">
          <h3 className="font-space-grotesk text-2xl font-bold text-white mb-3">Ready to Grow Your Business?</h3>
          <p className="text-slate-400 mb-6">Get a free digital marketing audit from our experts.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00D4FF] text-[#0A0F1E] font-bold px-7 py-3 rounded-full hover:bg-[#0099CC] transition-colors">
            Get Free Audit
          </a>
        </div>
      </article>
    </div>
  )
}
