export interface Service {
  id: string; name: string; emoji: string; short: string
  problem: string; pain: string; solution: string
  steps: { title: string; desc: string }[]
  results: string; color: string
}
export interface Founder {
  name: string; role: string; monogram: string; color: string; bio: string; quote: string
}
export interface BlogPost {
  slug: string; title: string; date: string; excerpt: string; tag: string; body: string
}
export interface FAQ { q: string; a: string }
export interface Scheme { title: string; desc: string; cta: string; tag: string }
export interface NavLink { label: string; href: string }
export interface PortfolioItem {
  client: string; industry: string; result: string; service: string; color: string
}
