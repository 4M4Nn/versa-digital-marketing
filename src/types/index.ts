export interface Service {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  color: string
  results: string
  features: string[]
}

export interface Result {
  metric: string
  label: string
  description: string
}

export interface Testimonial {
  name: string
  company: string
  role: string
  quote: string
  rating: number
  result: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  body: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}
