import { ServiceItem, CaseStudy, ProcessStep, MetricItem, Testimonial } from '../types';

export const BRAND_COLORS = [
  {
    name: 'Primary Brand Color',
    role: 'Light Blue',
    hex: '#B8E5FA',
    textDark: true,
    description: 'Recognizable brand accent for hero highlights, card accents, subtle backdrops, and active states.',
  },
  {
    name: 'Corporate Primary',
    role: 'Deep Navy',
    hex: '#0B1F3A',
    textDark: false,
    description: 'Grounding authority color for wordmark, main headings, dark corporate sections, and executive footer.',
  },
  {
    name: 'Secondary Accent',
    role: 'Digital Blue',
    hex: '#2F80ED',
    textDark: false,
    description: 'High-conversion interactive color for primary CTA buttons, links, active tabs, and focus outlines.',
  },
  {
    name: 'Supporting Soft Blue',
    role: 'Soft Blue',
    hex: '#EAF6FC',
    textDark: true,
    description: 'Tonal background layer for secondary sections, pill badges, and elevated surface highlights.',
  },
  {
    name: 'Supporting Neutral Light',
    role: 'Light Gray',
    hex: '#F4F7FA',
    textDark: true,
    description: 'Clean canvas tone for structured metric panels, subtle card fills, and table rows.',
  },
  {
    name: 'Supporting Border',
    role: 'Border Gray',
    hex: '#DCE7EF',
    textDark: true,
    description: 'Restrained 1px structural dividing lines with optical precision across light mode containers.',
  },
  {
    name: 'Typography Neutral',
    role: 'Text Gray',
    hex: '#526477',
    textDark: false,
    description: 'Balanced body copy color calibrated for AA accessibility and sustained reading comfort.',
  },
  {
    name: 'Pure Canvas',
    role: 'White',
    hex: '#FFFFFF',
    textDark: true,
    description: 'Primary clean canvas grounding the modern, unencumbered corporate aesthetic.',
  },
];

export const TRUST_BENEFITS = [
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking',
    description: 'We align every digital initiative directly with your board-level commercial goals, enterprise market positioning, and revenue models.',
    icon: 'Compass',
  },
  {
    id: 'digital-excellence',
    title: 'Digital Excellence',
    description: 'Uncompromising engineering standards, high-converting UX architecture, and modern scalable front-end systems built for longevity.',
    icon: 'Sparkles',
  },
  {
    id: 'business-solutions',
    title: 'Business-Focused Solutions',
    description: 'We eliminate technical debt and vanity metrics, focusing strictly on operational velocity, customer acquisition, and demonstrable ROI.',
    icon: 'TrendingUp',
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    description: 'Beyond launch, we serve as embedded advisors and agile digital co-pilots through continuous iteration, optimization, and scaling.',
    icon: 'ShieldCheck',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design-dev',
    title: 'Web Design & Development',
    shortDescription: 'Bespoke corporate platforms engineered for enterprise credibility, blazing performance, and seamless omnichannel conversions.',
    fullDescription: 'We design and engineer high-performance web ecosystems tailored to modern corporate standards. From headless architectures to multi-region content delivery, our solutions reflect the highest tier of visual craftsmanship while adhering to strict security, speed, and accessibility protocols.',
    deliverables: [
      'Custom Corporate Architecture & CMS',
      'Modern Jamstack & Serverless Systems',
      'Design System & Component Library',
      'WCAG AA Accessibility Compliance',
      'Enterprise Performance Tuning (<1s LCP)',
    ],
    icon: 'Monitor',
    badge: 'Flagship Core',
    businessOutcome: 'Elevated brand authority and measurable reduction in bounce rates across global decision-makers.',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    shortDescription: 'Technical SEO, high-authority information architecture, and algorithmic search visibility that drives qualified organic buyers.',
    fullDescription: 'Our strategic SEO practice targets high-intent commercial keywords. We resolve technical infrastructure hurdles, re-architect crawl pathways, optimize programmatic schema, and build content foundations that protect your brand from volatile algorithmic fluctuations.',
    deliverables: [
      'Core Web Vitals & Technical Crawl Audits',
      'Commercial Keyword Intent Mapping',
      'Enterprise Entity & JSON-LD Structured Data',
      'Information Architecture Engineering',
      'Executive Search Visibility Reporting',
    ],
    icon: 'Search',
    badge: 'Growth Engine',
    businessOutcome: 'Sustainable compounding organic pipeline without recurring ad spend reliance.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Multi-touchpoint performance marketing, demand generation campaigns, and data-backed customer acquisition channels.',
    fullDescription: 'We build targeted demand-generation funnels that engage corporate buyers along non-linear procurement cycles. Utilizing account-based marketing, precision paid search, and attribution modeling, we turn passive interest into qualified pipeline.',
    deliverables: [
      'B2B Account-Based Marketing (ABM)',
      'High-Intent Paid Acquisition (Search & Social)',
      'Multi-Touch Attribution Modeling',
      'Conversion Rate Optimization (CRO)',
      'Quarterly CAC/LTV Efficiency Analysis',
    ],
    icon: 'BarChart3',
    badge: 'Demand Gen',
    businessOutcome: 'Lower cost per qualified opportunity and transparent attribution from click to closed-won.',
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative Design',
    shortDescription: 'Corporate identity systems, visual guidelines, executive presentations, and design collateral that project commanding market leadership.',
    fullDescription: 'A modern brand must resonate in both boardroom presentations and digital interfaces. We create comprehensive visual identities, typographic standards, motion languages, and brand collateral that immediately signal institutional confidence.',
    deliverables: [
      'Wordmark, Monogram & Symbol Systems',
      'Comprehensive Brand Style Guides',
      'Typography & Color Palette Calibration',
      'Executive Pitch & Investor Deck Kits',
      'Digital Asset Design & Motion Guidelines',
    ],
    icon: 'Palette',
    badge: 'Brand Identity',
    businessOutcome: 'Cohesive brand equity that commands premium pricing power and stakeholder buy-in.',
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    shortDescription: 'High-velocity digital commerce platforms built for frictionless checkout, B2B wholesale portals, and global transaction scale.',
    fullDescription: 'We architect frictionless transactional platforms that harmonize complex inventory, localized currencies, ERP integrations, and custom checkout flows for both direct-to-consumer flagships and enterprise B2B distributors.',
    deliverables: [
      'Headless Commerce (Shopify Plus, BigCommerce)',
      'B2B Custom Pricing & Tiered Portals',
      'ERP & Warehouse Management Sync',
      'Payment Gateway & Tax Automation',
      'Cart Abandonment & Retention Funnels',
    ],
    icon: 'ShoppingBag',
    badge: 'Commerce Scale',
    businessOutcome: 'Increased average order value and frictionless international checkout operations.',
  },
  {
    id: 'custom-digital',
    title: 'Custom Digital Solutions',
    shortDescription: 'Proprietary enterprise web applications, customer self-service portals, and cloud integrations built for operational scale.',
    fullDescription: 'When off-the-shelf software falls short, we design and engineer bespoke web applications, interactive calculators, client portal dashboards, and API microservices that streamline mission-critical business workflows.',
    deliverables: [
      'Tailored Client & Partner Portals',
      'API Integration & Middleware Architecture',
      'Secure Role-Based Access Systems',
      'Internal Tooling & Workflow Automation',
      'Cloud Scalability & Infrastructure Audits',
    ],
    icon: 'Cpu',
    badge: 'Enterprise Tech',
    businessOutcome: 'Automated operational workflows saving hundreds of labor hours annually.',
  },
];

export const DIFFERENTIATORS = [
  {
    title: 'Business-First Strategy',
    description: 'We do not build technology for the sake of technology. Every digital asset is mapped directly to your commercial P&L, customer retention, and long-term enterprise valuation.',
    metric: '100% Commercial Alignment',
  },
  {
    title: 'Modern Technology',
    description: 'We leverage future-ready web standards, serverless infrastructure, and modular design tokens that remain maintainable, fast, and agile for years to come.',
    metric: 'Zero Legacy Debt Stack',
  },
  {
    title: 'Transparent Collaboration',
    description: 'Executive visibility at every phase. Direct access to lead strategists and principal engineers with weekly sprint demos, clear roadmaps, and zero agency friction.',
    metric: 'Direct Senior Access',
  },
  {
    title: 'Results-Focused Execution',
    description: 'Our metrics are tied to real business outcomes: conversion velocity, operational efficiency, search dominance, and stakeholder satisfaction.',
    metric: 'Objective-Driven Delivery',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Deep-Dive Alignment',
    description: 'We conduct structured stakeholder interviews, competitive landscape mapping, and technical audits to uncover your deepest operational constraints and market opportunities.',
    deliverables: ['Stakeholder Discovery Workshop', 'Technical & UX Benchmark Audit', 'Competitive Moat Assessment'],
  },
  {
    number: '02',
    title: 'Strategize',
    subtitle: 'Architecture & Roadmap',
    description: 'We formulate an actionable digital blueprint detailing information architecture, user journeys, technical stack recommendations, and phase-by-phase rollout timelines.',
    deliverables: ['Digital Strategy Blueprint', 'Information Architecture Diagrams', 'Technology Stack Specifications'],
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'High-Craft Interface Systems',
    description: 'Our senior UI/UX team drafts interactive prototypes, scalable design systems, and responsive layouts that balance visual restraint with engaging micro-interactions.',
    deliverables: ['Figma Design System & Tokens', 'Interactive Prototype Walkthroughs', 'Executive Sign-off Presentation'],
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Rigorous Engineering',
    description: 'Clean, type-safe development following automated testing, accessibility standards, and CI/CD deployment pipelines to guarantee bulletproof stability.',
    deliverables: ['Type-Safe Clean Codebase', 'Accessibility (WCAG AA) Audit', 'Staging Environment Verification'],
  },
  {
    number: '05',
    title: 'Grow',
    subtitle: 'Optimization & Scaling',
    description: 'Post-launch, we continuously monitor performance analytics, conversion rates, and search metrics to iteratively sharpen your market advantage.',
    deliverables: ['Post-Launch Analytics Review', 'A/B Conversion Testing Roadmap', 'Ongoing Strategic Advisory'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'corporate-transformation',
    title: 'Corporate Platform & Digital Infrastructure',
    category: 'Corporate Web Architecture',
    clientPlaceholder: 'Veritas Financial Technologies (Placeholder Client)',
    industry: 'Financial Services & Risk Advisory',
    shortDescription: 'A complete modernization of a legacy enterprise presence into a high-authority digital platform that elevated stakeholder trust and cut bounce rates by 42%.',
    challenge: 'A multi-billion dollar advisory firm struggled with an outdated 8-year-old website that failed to communicate their technological sophistication to institutional investors and C-suite procurement boards.',
    solution: 'Syscon Digital engineered a clean, high-contrast digital flagship utilizing custom design tokens, interactive client calculators, and structured governance workflows.',
    results: [
      { label: 'Bounce Rate Reduction', metric: '-42%' },
      { label: 'Executive Inquiries', metric: '+68%' },
      { label: 'Page Speed Index', metric: '0.8s' },
    ],
    deliverables: ['Corporate Positioning', 'Design System', 'Custom React Platform', 'Bilingual CMS Integration'],
    visualAccent: 'from-[#0B1F3A] to-[#142B4D]',
  },
  {
    id: 'ecommerce-growth',
    title: 'Omnichannel B2B & D2C Commerce Experience',
    category: 'Enterprise Commerce',
    clientPlaceholder: 'Aura Logistics & Global Supply (Placeholder Client)',
    industry: 'Industrial Supply & Global Distribution',
    shortDescription: 'Unified dual-channel commerce ecosystem streamlining multi-currency purchasing, wholesale tier pricing, and instant self-serve reordering.',
    challenge: 'Wholesale buyers faced manual PDF order forms and clunky phone ordering, while consumer retail traffic suffered high abandonment on checkout.',
    solution: 'Designed and deployed a unified headless commerce platform with real-time ERP catalog sync, custom corporate credit terms, and sub-second checkout paths.',
    results: [
      { label: 'Wholesale Order Volume', metric: '+135%' },
      { label: 'Checkout Conversion', metric: '+3.4x' },
      { label: 'Cart Abandonment Drop', metric: '-28%' },
    ],
    deliverables: ['Headless Architecture', 'B2B Wholesale Portal', 'Automated Invoicing Flow', 'Global CDN Routing'],
    visualAccent: 'from-[#0B1F3A] via-[#103058] to-[#2F80ED]',
  },
  {
    id: 'brand-identity-launch',
    title: 'Brand Identity & Digital Market Launch',
    category: 'Branding & Digital Strategy',
    clientPlaceholder: 'Novus Health Systems (Placeholder Client)',
    industry: 'Healthcare Intelligence & MedTech',
    shortDescription: 'Comprehensive corporate rebranding, bespoke typography guidelines, and digital launch campaign supporting a successful Series B capital raise.',
    challenge: 'Following rapid technology expansion, the company’s outdated visual identity failed to reflect their status as an advanced AI healthcare leader.',
    solution: 'Crafted a disciplined corporate wordmark, cohesive light blue and deep navy design tokens, executive presentation templates, and an interactive digital launch microsite.',
    results: [
      { label: 'Series B Capital Secured', metric: '$45M' },
      { label: 'Inbound Talent Growth', metric: '+85%' },
      { label: 'Brand Recognition Index', metric: '+92%' },
    ],
    deliverables: ['Full Identity System', 'Investor Presentation Kit', 'Corporate Website', 'Motion Guidelines'],
    visualAccent: 'from-[#0B1F3A] to-[#2F80ED]',
  },
];

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'projects',
    label: 'Projects Delivered',
    value: '140+',
    subtext: 'Enterprise-grade digital initiatives engineered on schedule across North America & Europe.',
  },
  {
    id: 'industries',
    label: 'Industries Served',
    value: '12',
    subtext: 'Deep sector fluency across Fintech, Healthcare, B2B SaaS, Logistics, and High-Growth Commerce.',
  },
  {
    id: 'digital-experiences',
    label: 'Digital Experiences',
    value: '2.5M+',
    subtext: 'Monthly business decision-makers and enterprise users interacting with Syscon-crafted platforms.',
  },
  {
    id: 'client-partnerships',
    label: 'Client Retention Rate',
    value: '94%',
    subtext: 'Long-term corporate partnerships extending beyond initial launch into ongoing digital advisory.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Syscon Digital brought an exceptional standard of strategic clarity and design discipline to our corporate transformation. They understood our enterprise governance needs from day one and delivered a platform our board is immensely proud of.',
    namePlaceholder: 'Marcus Vance (Executive Placeholder)',
    rolePlaceholder: 'Chief Marketing Officer',
    companyPlaceholder: 'Apex Global Financial Group',
    industry: 'Financial Services',
  },
  {
    id: 'test-2',
    quote: 'In an industry crowded with generic agencies, Syscon stands apart. Their technical precision, transparent sprint communication, and dedication to measurable business outcomes made our digital relaunch an undeniable commercial success.',
    namePlaceholder: 'Elena Rostova (Executive Placeholder)',
    rolePlaceholder: 'Head of Digital Strategy & Product',
    companyPlaceholder: 'Valence Health Innovations',
    industry: 'Healthcare & Life Sciences',
  },
  {
    id: 'test-3',
    quote: 'Our sales cycle shortened noticeably after deploying the new Syscon-designed enterprise experience. The clean aesthetics and rapid page speed gave prospective clients instant confidence in our institutional capabilities.',
    namePlaceholder: 'David Sterling (Executive Placeholder)',
    rolePlaceholder: 'Managing Director & VP of Operations',
    companyPlaceholder: 'Krypton Industrial Solutions',
    industry: 'B2B Manufacturing & Logistics',
  },
];
