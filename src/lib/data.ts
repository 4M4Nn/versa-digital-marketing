import type { Service, Founder, BlogPost, FAQ, Scheme, NavLink, PortfolioItem } from "@/types"

export const SITE_NAME = "Versa Digital"
export const SITE_TAGLINE = "AI-Powered Digital Marketing for Kerala Businesses"
export const SITE_DESCRIPTION = "Versa Digital delivers AI-powered SEO, social media, performance marketing, video, content, and WhatsApp marketing for Kerala businesses."
export const PHONE = "+91 7907215816"
export const WHATSAPP = "917907215816"
export const WA_URL = "https://wa.me/917907215816"
export const EMAIL = "hello@versadigital.in"
export const ADDRESS = "Kochi, Kerala, India"
export const SOURCE = "versa-digital"
export const PARENT_URL = "https://versagrowthventures.com"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Schemes", href: "/schemes" },
  { label: "Contact", href: "/contact" },
]

export const SERVICES: Service[] = [
  {
    id: "ai-seo-aeo", name: "AI SEO + AEO", emoji: "🔍", short: "Search & Answer Engine Optimization",
    color: "#00D4FF",
    problem: "Your business doesn't appear when potential customers search online.",
    pain: "Competitors rank on page 1. You're invisible. Every day you don't show up is revenue lost to someone who does.",
    solution: "We optimize for both Google search AND AI answer engines (ChatGPT, Perplexity, Gemini) — the new battleground for visibility.",
    steps: [
      { title: "Audit & Strategy", desc: "Complete SEO audit, keyword research, competitor analysis, and content gap mapping." },
      { title: "On-Page + Technical", desc: "Title tags, meta descriptions, schema markup, site speed, Core Web Vitals." },
      { title: "Content + Authority", desc: "AI-optimized content creation and link building for sustained rank growth." },
    ],
    results: "Average 3x organic traffic in 90 days. Top 3 Google rankings for target keywords.",
  },
  {
    id: "social-media", name: "Social Media Marketing", emoji: "📱", short: "Instagram, Facebook & LinkedIn Management",
    color: "#E879F9",
    problem: "Your social media accounts look abandoned. Inconsistent posts, zero engagement.",
    pain: "Customers check your social media before buying. A dead account signals a dead business. You're losing sales before first contact.",
    solution: "We run your social media like a media company — daily content, community engagement, and platform-specific strategy.",
    steps: [
      { title: "Brand Voice", desc: "Define tone, visual identity, content pillars, and posting schedule." },
      { title: "Content Creation", desc: "Daily posts, Reels, Stories, carousels — designed to stop the scroll." },
      { title: "Community Management", desc: "Respond to comments, DMs, and build follower relationships." },
    ],
    results: "Average 5x engagement increase. 2,000+ new followers in first 60 days.",
  },
  {
    id: "performance-marketing", name: "Performance Marketing", emoji: "🚀", short: "Google & Meta Ads That Convert",
    color: "#F59E0B",
    problem: "Your ads are spending money but not generating customers.",
    pain: "Wasted ad budgets are demoralizing. You've tried Google Ads or Meta Ads and got nothing. The problem is usually targeting, creative, or funnel — not the platforms.",
    solution: "We build conversion-optimized ad campaigns with precise targeting, compelling creative, and data-driven optimization.",
    steps: [
      { title: "Campaign Architecture", desc: "Audience research, campaign structure, bidding strategy, and budget allocation." },
      { title: "Creative Development", desc: "Ad copy, graphics, videos — tested and optimized for your audience." },
      { title: "Optimize & Scale", desc: "A/B testing, conversion tracking, and weekly optimization cycles." },
    ],
    results: "Average 4x ROAS. Cost per lead reduced by 60% vs. industry benchmarks.",
  },
  {
    id: "video-marketing", name: "Video Marketing", emoji: "🎬", short: "Reels, YouTube & Brand Films",
    color: "#10B981",
    problem: "You have no video content, so you're invisible on the most-consumed content format.",
    pain: "Video gets 12x more shares than text + images combined. Every week without video content is market share given away to competitors who have it.",
    solution: "We produce professional short-form and long-form video content — from 30-second Reels to full brand story films.",
    steps: [
      { title: "Concept & Script", desc: "Video strategy, script writing, and production brief tailored to your brand." },
      { title: "Production", desc: "Professional shoot with our Kochi-based team or remote production support." },
      { title: "Distribution", desc: "Multi-platform optimization and scheduling for maximum reach." },
    ],
    results: "Average 800K+ views on first video campaign. Conversion rates 3x higher vs. static content.",
  },
  {
    id: "content-marketing", name: "Content Marketing", emoji: "✍️", short: "Blogs, Case Studies & Lead Magnets",
    color: "#6366F1",
    problem: "Your website has no content that educates, builds trust, or drives organic traffic.",
    pain: "Content is how you become the trusted expert. Without it, you're just another vendor. With it, you become the obvious choice.",
    solution: "We create a content system — blog posts, case studies, lead magnets, email sequences — that builds authority and drives inbound leads.",
    steps: [
      { title: "Content Strategy", desc: "Topic research, content calendar, SEO alignment, and distribution plan." },
      { title: "Content Production", desc: "Long-form blogs, short-form posts, infographics, and downloadable assets." },
      { title: "Performance Tracking", desc: "Monthly content analytics, traffic attribution, and strategy refinement." },
    ],
    results: "Average 250% increase in inbound leads within 6 months of content program.",
  },
  {
    id: "whatsapp-marketing", name: "WhatsApp Marketing", emoji: "💬", short: "Broadcast Campaigns & Automation",
    color: "#25D366",
    problem: "You have a customer database but no system to engage them.",
    pain: "Emails get 20% open rates. WhatsApp gets 98%. Your customers are there — you're just not reaching them where they actually pay attention.",
    solution: "We build WhatsApp Business API campaigns with personalized broadcast sequences, automated follow-ups, and chatbot flows.",
    steps: [
      { title: "Setup & Compliance", desc: "WhatsApp Business API setup, opt-in collection, and template approval." },
      { title: "Campaign Design", desc: "Segmented broadcast sequences, promotional campaigns, and re-engagement flows." },
      { title: "Automation", desc: "Chatbot flows, auto-replies, and CRM integration for seamless customer journeys." },
    ],
    results: "Average 98% open rate. 35% conversion rate from WhatsApp campaigns vs. 3-5% email.",
  },
  {
    id: "podcast-marketing", name: "Podcast Marketing", emoji: "🎙️", short: "Brand Podcasts & Audio Content",
    color: "#EC4899",
    problem: "You want to establish thought leadership but don't know where to start.",
    pain: "Podcasts build deep trust. Listeners spend 30+ minutes with your brand — impossible with any other format. Your competitors haven't started yet.",
    solution: "We produce, distribute, and market branded podcasts — from concept to a subscribed audience.",
    steps: [
      { title: "Concept & Format", desc: "Niche selection, episode format, brand positioning, and guest outreach strategy." },
      { title: "Production", desc: "Recording setup guidance, editing, sound design, and episode packaging." },
      { title: "Launch & Distribution", desc: "Multi-platform distribution, SEO optimization, and audience growth campaigns." },
    ],
    results: "Average 500+ subscribers in first 3 months. 40% of listeners convert to leads.",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59",
    bio: "Sandeep ensures Versa Digital's campaigns run with precision — every deliverable on time, every client reporting cycle flawless. His operational systems are why we scale without quality loss.",
    quote: "Excellence at scale requires systems, not heroics.",
  },
  {
    name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#00D4FF",
    bio: "Sreenivasa's financial discipline keeps our pricing honest and our growth sustainable. He built the resource model that lets us deliver enterprise-quality marketing at SME-accessible prices.",
    quote: "Value-priced, not cheap. There is a difference.",
  },
  {
    name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#E879F9",
    bio: "Aman is the strategic brain behind Versa Digital's growth. He designed the AI-first marketing framework that has delivered 3-5x results for Kerala businesses across every vertical.",
    quote: "AI doesn't replace marketing genius — it amplifies it.",
  },
]

export const PORTFOLIO: PortfolioItem[] = [
  { client: "Kerala Fashion Brand", industry: "Fashion & Retail", result: "3.8x ROAS in 60 days", service: "Performance Marketing", color: "#F59E0B" },
  { client: "Kochi Real Estate Developer", industry: "Real Estate", result: "₹2.4Cr leads in 90 days", service: "AI SEO + Meta Ads", color: "#00D4FF" },
  { client: "Kerala Education Institute", industry: "Education", result: "5x organic traffic", service: "Content + SEO", color: "#10B981" },
  { client: "Kozhikode Restaurant Chain", industry: "F&B", result: "12,000 new followers", service: "Social Media + Video", color: "#E879F9" },
  { client: "Kerala FMCG Brand", industry: "FMCG", result: "38% WhatsApp conversion", service: "WhatsApp Marketing", color: "#25D366" },
  { client: "Thrissur Jewellery Store", industry: "Jewellery", result: "400K+ Reel views", service: "Video Marketing", color: "#EC4899" },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-seo-kerala-2026",
    title: "AI SEO in 2026: Why AEO is the New Battleground for Kerala Businesses",
    date: "June 2026", tag: "SEO",
    excerpt: "Google's AI Overviews now show up for 80% of commercial queries. If you're not optimizing for AI answer engines, you're losing visibility you don't even know about.",
    body: `The search landscape has changed permanently. In 2026, AI answer engines — Google's AI Overviews, ChatGPT Search, Perplexity — now intercept a significant portion of search traffic before users ever click a link.\n\nFor Kerala businesses, this creates an urgent optimization challenge. Traditional SEO still matters, but Answer Engine Optimization (AEO) is now equally critical. When a potential customer asks an AI "best digital marketing agency in Kochi," will your business be cited?\n\nThe answer depends on three things: structured data markup that AI can parse, content that directly answers questions in a citable format, and authority signals that make AI engines trust your brand.\n\nVersa Digital has been developing AEO-first content strategies since early 2025. Our Kerala clients who adopted AEO early are now seeing their businesses cited in AI answers for high-intent commercial queries.\n\nThe businesses that win in 2026 and beyond are those who adapt now — before AEO becomes table stakes.`,
  },
  {
    slug: "meta-ads-roas-kerala",
    title: "Why Kerala Businesses Get Poor ROAS on Meta Ads (And How to Fix It)",
    date: "May 2026", tag: "Paid Ads",
    excerpt: "Most Kerala SMEs who try Meta ads get disappointed. Here's the systematic breakdown of where campaigns fail and exactly how to fix each issue.",
    body: `Kerala businesses spend millions on Meta ads annually, and a large portion gets wasted. After auditing 50+ Kerala ad accounts, here are the most common failure patterns.\n\nProblem 1: Wrong objective. Most businesses use "Traffic" campaigns when they should use "Leads" or "Sales." This sends the algorithm the wrong optimization signal.\n\nProblem 2: Too-broad audiences. "Kerala, Age 18-65, All interests" is not a targeting strategy. It's a budget incinerator.\n\nProblem 3: No creative testing. Single static images run for months with no performance benchmarking. Meta's algorithm rewards testing — typically 3-5 variations per ad set minimum.\n\nProblem 4: No conversion tracking. Without Meta Pixel + CAPI server-side events properly configured, the algorithm is flying blind. We see 60%+ campaign performance improvement just from proper pixel setup.\n\nProblem 5: Stopping too early. Meta campaigns need 7-10 days in the learning phase before optimizing. Most Kerala businesses kill campaigns at day 3 when they see no instant results.\n\nFix all five of these and your ROAS will improve dramatically — even before touching creative.`,
  },
  {
    slug: "whatsapp-marketing-kerala",
    title: "The WhatsApp Marketing Playbook Every Kerala Business Needs",
    date: "April 2026", tag: "WhatsApp",
    excerpt: "Kerala has one of the highest WhatsApp penetration rates in India. Here's how to turn that into a revenue-generating marketing channel.",
    body: `Kerala is one of India's most WhatsApp-connected states. Over 90% of smartphone users are active on WhatsApp daily. This makes WhatsApp the most underutilized marketing channel for Kerala businesses.\n\nThe WhatsApp Business API — not just the app — is what unlocks serious marketing capability. With the API, you can send broadcast campaigns to thousands of opted-in customers, build automated sequences, and set up chatbot flows.\n\nThe numbers are compelling: 98% open rates vs. 20% for email. 35% click-through rates on well-designed campaigns. Response rates 10x higher than SMS.\n\nThe key to ethical, effective WhatsApp marketing is opt-in quality. Building your WhatsApp list through genuine value — a lead magnet, a discount offer, a useful newsletter — produces lists that convert. Purchased lists are worthless and violate Meta's terms.\n\nVersa Digital's WhatsApp Marketing service handles the entire setup: API integration, template creation and approval, broadcast campaigns, and automation flows. Our Kerala clients average ₹8 revenue per ₹1 spent on WhatsApp campaigns.`,
  },
]

export const FAQS: FAQ[] = [
  { q: "What makes Versa Digital different from other agencies?", a: "We are AI-first — every campaign uses AI for research, optimization, and reporting. We also specialize in Kerala businesses, so we understand local culture, language, and market dynamics better than generalist agencies." },
  { q: "How long before we see results?", a: "SEO results typically show in 60-90 days. Paid ads campaigns typically deliver measurable ROAS within 2-4 weeks. Social media growth is visible within the first month of consistent posting." },
  { q: "Do you work with small businesses?", a: "Absolutely. Most of our clients are Kerala SMEs — restaurants, retail stores, real estate developers, educational institutes, and healthcare providers. We have packages designed for every budget." },
  { q: "What is AEO and why does it matter?", a: "Answer Engine Optimization (AEO) optimizes your content to be cited by AI tools like ChatGPT, Google AI Overviews, and Perplexity. These tools now answer 80%+ of commercial queries. Without AEO, you're invisible to AI-generated answers." },
  { q: "Do you handle content creation?", a: "Yes — all of it. We create blog posts, social media content, ad copy, video scripts, email sequences, and WhatsApp messages. Content creation is included in our marketing packages." },
  { q: "Can I pause or cancel my contract?", a: "Yes. We offer monthly contracts for most services. We believe in earning your business every month, not locking you in." },
  { q: "Do you work with B2B clients?", a: "Yes. We have dedicated LinkedIn and content marketing strategies for B2B Kerala businesses. Our SEO and AEO work is particularly effective for B2B lead generation." },
]

export const SCHEMES: Scheme[] = [
  {
    title: "AI Audit — Free", tag: "FREE OFFER",
    desc: "Get a free 30-minute AI marketing audit for your business. We review your current digital presence, identify the top 3 growth opportunities, and give you a clear action plan — with no strings attached.",
    cta: "Get Free Audit",
  },
  {
    title: "Starter Growth Package", tag: "FOR NEW CLIENTS",
    desc: "3 months of SEO + Social Media + WhatsApp marketing bundled at 20% off individual rates. Perfect for Kerala businesses starting their digital marketing journey.",
    cta: "Get Starter Package",
  },
  {
    title: "Performance Guarantee", tag: "ROI ASSURED",
    desc: "Our Performance Marketing clients get a ROAS guarantee — if we don't hit your target return in 60 days, we work for free until we do. That's how confident we are.",
    cta: "See Guarantee Details",
  },
]
