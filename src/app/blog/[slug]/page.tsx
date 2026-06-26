import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLOG_POSTS, WA_URL } from "@/lib/data"
type Props = { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return BLOG_POSTS.map(p => ({ slug: p.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = BLOG_POSTS.find(x => x.slug === slug)
  return p ? { title: p.title, description: p.excerpt } : {}
}
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()
  return (
    <div className="pt-24 bg-[#050816] min-h-screen">
      <article className="py-16 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#00D4FF] text-xs tracking-widest uppercase mb-6 inline-block">← BLOG</Link>
        <span className="text-xs px-2 py-1 rounded block mb-4 w-fit" style={{ background:"#00D4FF20", color:"#00D4FF" }}>{post.tag}</span>
        <h1 className="font-space-grotesk text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        <p className="text-[#6B8080] text-lg leading-relaxed mb-8 border-l-2 border-[#00D4FF] pl-4 italic">{post.excerpt}</p>
        <div className="space-y-4">{post.body.split("\n\n").map((p, i) => <p key={i} className="text-[#6B8080] leading-relaxed">{p}</p>)}</div>
        <div className="mt-12 p-6 rounded-2xl border border-[#00D4FF]/20 text-center" style={{ background:"rgba(0,212,255,0.05)" }}>
          <p className="font-space-grotesk text-xl font-bold text-white mb-3">Ready to Grow Your Business?</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-8 py-3 bg-[#00D4FF] text-[#050816] font-bold text-sm tracking-widest uppercase">Get Free Audit</a>
        </div>
      </article>
    </div>
  )
}
