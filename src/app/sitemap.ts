import type { MetadataRoute } from "next"
import { BLOG_POSTS, SERVICES } from "@/lib/data"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://versadigital.in"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...["/services","/portfolio","/about","/blog","/faq","/schemes","/contact"].map(r => ({ url:`${base}${r}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.8 })),
    ...SERVICES.map(s => ({ url:`${base}/services/${s.id}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.7 })),
    ...BLOG_POSTS.map(p => ({ url:`${base}/blog/${p.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.6 })),
  ]
}
