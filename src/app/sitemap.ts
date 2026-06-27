import type { MetadataRoute } from "next"
import { BLOG_POSTS, SERVICES } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://digital.versagrowthventures.com"

  const staticPages = ["/", "/about", "/services", "/portfolio", "/blog", "/faq", "/schemes", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }))

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }))

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
