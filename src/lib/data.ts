import type { Service, Result, Testimonial, BlogPost, Stat } from "@/types"

export const SITE = {
  name: "Versa Digital",
  phone: "+91 7907215816",
  email: "hello@versadigital.in",
  address: "Kochi, Kerala, India",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

export const SERVICES: Service[] = [
  {
    id: "ai-seo-aeo",
    name: "AI SEO + AEO",
    tagline: "Rank on Google AND AI Answers",
    description:
      "Optimise for both traditional search engines and AI answer engines (ChatGPT, Perplexity). Double your organic visibility.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80&auto=format&fit=crop",
    color: "#00D4FF",
    results: "3× organic traffic in 6 months",
    features: [
      "AI Overview Optimization",
      "Technical SEO Audit",
      "Content Strategy",
      "Link Building",
      "Monthly Reporting",
    ],
  },
  {
    id: "social-media",
    name: "AI Social Media",
    tagline: "Content That Converts at Scale",
    description:
      "AI-powered content creation, scheduling, and analytics for Instagram, Facebook, LinkedIn, and YouTube.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    color: "#E879F9",
    results: "5× engagement rate",
    features: [
      "AI Content Creation",
      "7-Day Content Calendar",
      "Story + Reel Production",
      "Community Management",
      "Influencer Coordination",
    ],
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    tagline: "Every Rupee Accountable",
    description:
      "Meta, Google, and YouTube ads optimised for maximum ROAS. We only succeed when your campaigns succeed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    color: "#F59E0B",
    results: "4× ROAS average",
    features: [
      "Meta Ads (FB+IG)",
      "Google Search + Display",
      "YouTube Ads",
      "Retargeting Campaigns",
      "Weekly ROAS Reports",
    ],
  },
  {
    id: "video-marketing",
    name: "Video Marketing",
    tagline: "Stories That Sell",
    description:
      "Professional video production and distribution. Reels, YouTube, explainers, testimonials, and brand films.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80&auto=format&fit=crop",
    color: "#10B981",
    results: "80% higher engagement",
    features: [
      "Script + Storyboard",
      "Professional Shoot",
      "Reel + Short Production",
      "YouTube Optimization",
      "Video Ad Campaigns",
    ],
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    tagline: "Direct Access to Your Customers",
    description:
      "Automated WhatsApp campaigns, broadcast lists, chatbot flows, and conversational marketing.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80&auto=format&fit=crop",
    color: "#25D366",
    results: "70% open rate vs 20% email",
    features: [
      "Broadcast Campaigns",
      "Chatbot Automation",
      "Catalog Integration",
      "Lead Nurturing Flows",
      "Analytics Dashboard",
    ],
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    tagline: "Authority Through Expertise",
    description:
      "Long-form content, blogs, whitepapers, and thought leadership that builds your brand authority.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop",
    color: "#6366F1",
    results: "200% increase in organic leads",
    features: [
      "Blog Strategy + Writing",
      "Infographic Creation",
      "Email Newsletters",
      "Whitepaper Production",
      "Content Distribution",
    ],
  },
  {
    id: "podcast",
    name: "Podcast Marketing",
    tagline: "Your Brand, Your Voice",
    description:
      "End-to-end podcast production and promotion. Strategy, recording, editing, and distribution on all platforms.",
    image: "https://images.unsplash.com/photo-1478737270197-2b3adc640f22?w=600&q=80&auto=format&fit=crop",
    color: "#EC4899",
    results: "Growing audience channel",
    features: [
      "Concept + Strategy",
      "Professional Recording",
      "Editing + Mixing",
      "Spotify + Apple Distribution",
      "Episode Promotion",
    ],
  },
]

export const STATS: Stat[] = [
  { value: 3, suffix: "×", label: "Average Traffic Growth" },
  { value: 500, suffix: "+", label: "Campaigns Run" },
  { value: 4, suffix: "×", label: "Average ROAS" },
  { value: 80, suffix: "%+", label: "Client Retention" },
]

export const RESULTS: Result[] = [
  {
    metric: "3×",
    label: "Traffic Growth",
    description: "Average organic traffic increase within 6 months",
  },
  {
    metric: "5×",
    label: "Engagement",
    description: "Social media engagement vs industry average",
  },
  {
    metric: "4×",
    label: "ROAS",
    description: "Return on ad spend across Meta and Google campaigns",
  },
  {
    metric: "80%",
    label: "Retention Rate",
    description: "Clients who continue after first 3 months",
  },
]

export const TRUST_BADGES = [
  {
    title: "Results First",
    description: "We report real numbers, not vanity metrics",
    icon: "BarChart3",
  },
  {
    title: "AI-Powered",
    description: "Cutting-edge tools for maximum efficiency",
    icon: "Cpu",
  },
  {
    title: "Kerala&apos;s Agency",
    description: "Local insights, global execution",
    icon: "MapPin",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Kerala",
    role: "Founder",
    quote:
      "Versa Digital tripled our website traffic in 4 months. Their AI SEO approach is unlike anything we&apos;d seen before.",
    rating: 5,
    result: "3× traffic in 4 months",
  },
  {
    name: "Meera Pillai",
    company: "StyleKochi",
    role: "Marketing Head",
    quote:
      "Our Instagram went from 2,000 to 18,000 followers and actual sales followed. The team really understands the Kerala market.",
    rating: 5,
    result: "9× follower growth",
  },
  {
    name: "Arjun Nambiar",
    company: "AgroFresh Kerala",
    role: "CEO",
    quote:
      "Performance marketing with Versa Digital gave us 5× ROAS on our Meta campaigns. Best marketing investment we&apos;ve made.",
    rating: 5,
    result: "5× ROAS",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-seo-kerala-2026",
    title: "How AI SEO is Changing Digital Marketing in Kerala",
    category: "AI & SEO",
    date: "June 2026",
    excerpt:
      "Google&apos;s AI Overviews and tools like Perplexity are changing how customers find businesses.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80&auto=format&fit=crop",
    body: `The digital marketing landscape in Kerala is undergoing a seismic shift. With Google's AI Overviews now appearing for over 40% of search queries, businesses that only optimise for traditional blue-link results are missing out on massive visibility. AI answer engines like ChatGPT, Perplexity, and Google Gemini are becoming the first stop for customers researching products and services.

For Kerala businesses, this means a fundamental rethink of SEO strategy. Traditional keyword stuffing and backlink farming are giving way to Answer Engine Optimisation (AEO) — structuring content so that AI systems understand, trust, and cite your brand as an authoritative source. Businesses that get this right early will dominate their categories for years to come.

At Versa Digital, we have been running AI SEO campaigns for Kerala clients since early 2025. The results have been striking: clients who combine traditional SEO with AEO strategies see an average 3× increase in organic traffic within six months. More importantly, the quality of that traffic improves — AI-referred visitors convert at nearly double the rate of generic organic traffic.

The opportunity for Kerala SMEs is enormous. Local competitors are largely still running 2018-era SEO playbooks. By investing in AI-native content strategies, technical schema markup, and entity-based optimisation now, forward-thinking businesses can lock in top positions before the market catches up.`,
  },
  {
    slug: "meta-ads-roas-kerala",
    title: "Achieving 4× ROAS on Meta Ads for Kerala SMEs",
    category: "Performance",
    date: "May 2026",
    excerpt:
      "Kerala businesses are missing out on Meta ads ROI. Here&apos;s how to fix it.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    body: `Most Kerala small and medium businesses running Meta ads are getting 1× to 1.5× ROAS at best — essentially breaking even or losing money. The problem is almost never the platform itself, but the approach: generic targeting, static creatives, and no proper funnel structure. The good news is that fixing these issues consistently delivers 3× to 5× improvements in return on ad spend.

The first lever is audience architecture. Rather than targeting broad interest groups, high-performing Meta campaigns in Kerala use layered custom audiences — website visitors, video viewers, Instagram engagers — combined with lookalike audiences built from actual buyers. This alone typically improves ROAS by 40 to 60 percent, simply by showing ads to people who are genuinely likely to convert.

The second lever is creative velocity. Kerala consumers scroll fast. Static images with text overlays rarely stop thumbs in 2026. Short-form video ads — ideally 15 to 30 seconds, with a hook in the first two seconds — outperform static creatives by 2× to 4× in our campaigns. User-generated content and authentic testimonial videos from satisfied customers perform especially well because they bypass the skepticism that polished brand ads trigger.

The third lever is funnel structure. Most SMEs run single-stage campaigns that ask cold audiences to buy immediately. A three-stage funnel — awareness video, consideration retargeting, conversion offer — typically reduces cost per acquisition by 50 percent while improving overall ROAS. For Kerala businesses with average order values above Rs 2,000, this structure is almost always worth the additional complexity.`,
  },
  {
    slug: "whatsapp-marketing-kerala",
    title: "WhatsApp Marketing: Kerala's Secret Growth Channel",
    category: "WhatsApp",
    date: "April 2026",
    excerpt:
      "70% open rates vs 20% for email. WhatsApp marketing is the highest ROI channel for Kerala businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    body: `Kerala has one of the highest WhatsApp penetration rates in India, with virtually every smartphone user active on the platform daily. Yet most businesses are still using WhatsApp the way they used SMS in 2010 — bulk blasts to unorganised contact lists. This is not just ineffective; it actively damages brand perception. The businesses that are winning with WhatsApp have moved to structured, consent-based conversational marketing.

The numbers speak for themselves. WhatsApp messages achieve 70% open rates compared to 20% for email and 4% for social media organic posts. Response rates are 40 to 50 times higher than email. For service businesses in Kerala — real estate agents, educational institutions, healthcare providers, retail stores — WhatsApp is the single highest-ROI marketing channel available.

The key shift is from broadcasting to conversations. Modern WhatsApp marketing uses chatbot flows that greet new leads, qualify their needs, send relevant content, and schedule follow-ups automatically. A well-designed flow can handle the first three stages of the sales process without any human involvement, freeing your team to focus only on high-intent prospects who are ready to buy.

For Kerala businesses with existing customer lists, re-engagement campaigns through WhatsApp Business API consistently outperform email re-engagement by a factor of three to five. A properly segmented broadcast to past customers with a relevant offer typically achieves 15 to 25 percent conversion rates — numbers that would be extraordinary in any other marketing channel.`,
  },
]

export const ABOUT = {
  headline: "Kerala's Most Results-Driven Digital Marketing Agency",
  description:
    "We are a team of digital marketing specialists, AI enthusiasts, and creative strategists based in Kochi. Since 2020, we have helped over 100 Kerala businesses grow their online presence and revenue through data-driven marketing strategies.",
  mission:
    "To make enterprise-grade digital marketing accessible to every Kerala business, delivering measurable results that directly impact growth and revenue.",
  vision:
    "To be the most trusted digital marketing partner in South India, known for transparency, innovation, and results that matter.",
  checkpoints: [
    "100+ campaigns run successfully",
    "Specialists in AI-native SEO and AEO",
    "Average 4× ROAS on paid campaigns",
    "Dedicated account managers for every client",
    "Weekly transparent reporting",
    "No lock-in contracts",
  ],
  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
}

export const OFFER = {
  title: "Free Digital Marketing Audit",
  description:
    "We audit your current digital presence and give you a 20-point action plan. Free, no commitment.",
  cta: "Claim Your Free Audit",
}
