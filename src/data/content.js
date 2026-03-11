import {
  BarChart3,
  Brain,
  Building2,
  Globe,
  Lightbulb,
  LineChart,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

export const BRAND = {
  name: 'Ascend',
  fullName: 'Ascend Consulting Group',
  tagline: 'Elevate Your Business Strategy',
  description:
    'We partner with ambitious organizations to unlock growth, drive transformation, and build lasting competitive advantage.',
  email: 'hello@ascendconsulting.com',
  phone: '+1 (555) 924-8300',
  address: '100 Summit Avenue, Suite 1200, New York, NY 10001',
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
}

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Resources', path: '/resources' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export const SERVICES = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Develop winning strategies that align your vision with market opportunities. We help you define clear objectives, prioritize initiatives, and create actionable roadmaps for sustainable growth.',
    features: ['Market Analysis', 'Competitive Positioning', 'Growth Strategy', 'M&A Advisory'],
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence',
    description:
      'Optimize your operations to reduce costs, improve efficiency, and deliver exceptional value. Our proven methodologies transform how your organization executes.',
    features: ['Process Optimization', 'Supply Chain', 'Lean Management', 'Performance Metrics'],
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description:
      'Navigate the digital landscape with confidence. We guide your organization through technology adoption, data strategy, and digital innovation to stay ahead of the curve.',
    features: ['Technology Roadmap', 'Data & Analytics', 'AI Integration', 'Cloud Strategy'],
  },
  {
    icon: Users,
    title: 'Organizational Design',
    description:
      'Build high-performing teams and cultures that drive results. We help you design structures, develop talent, and create environments where people thrive.',
    features: ['Change Management', 'Leadership Development', 'Culture Transformation', 'Talent Strategy'],
  },
  {
    icon: LineChart,
    title: 'Financial Advisory',
    description:
      'Make informed financial decisions with expert guidance. From restructuring to capital allocation, we provide the analytical rigor your business demands.',
    features: ['Financial Modeling', 'Risk Assessment', 'Capital Strategy', 'Valuation Services'],
  },
  {
    icon: Globe,
    title: 'Market Entry & Expansion',
    description:
      'Expand into new markets with confidence. We provide the research, strategy, and local expertise to help you succeed in new geographies and segments.',
    features: ['Market Research', 'Entry Strategy', 'Partnership Development', 'Regulatory Compliance'],
  },
]

export const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '$2.4B', label: 'Value Created' },
]

export const TESTIMONIALS = [
  {
    quote:
      "Ascend transformed our go-to-market strategy completely. Their team's analytical depth and strategic creativity helped us capture 23% more market share in just 18 months.",
    author: 'Sarah Chen',
    title: 'CEO',
    company: 'Meridian Technologies',
    image: null,
  },
  {
    quote:
      'Working with Ascend was a game-changer for our operational efficiency. They identified $4.2M in cost savings while actually improving our service quality. Remarkable.',
    author: 'James Rodriguez',
    title: 'COO',
    company: 'Atlas Manufacturing',
    image: null,
  },
  {
    quote:
      "The digital transformation roadmap Ascend created for us was incredibly thorough and practical. They didn't just tell us what to do\u2014they walked alongside us every step of the way.",
    author: 'Emily Watson',
    title: 'CTO',
    company: 'Horizon Financial',
    image: null,
  },
  {
    quote:
      'Ascend helped us navigate one of the most complex mergers in our industry. Their expertise in organizational design ensured a seamless integration with zero disruption.',
    author: 'Michael Park',
    title: 'Managing Director',
    company: 'Pinnacle Health Systems',
    image: null,
  },
  {
    quote:
      "Their market entry strategy for Southeast Asia was flawless. Ascend's local expertise and rigorous research gave us the confidence to invest\u2014and we've already exceeded our Year 1 targets.",
    author: 'Priya Sharma',
    title: 'VP of International',
    company: 'Quantum Retail',
    image: null,
  },
  {
    quote:
      'What sets Ascend apart is their genuine partnership approach. They challenged our assumptions, brought fresh perspectives, and ultimately helped us become a stronger organization.',
    author: 'David Kim',
    title: 'Founder & CEO',
    company: 'NovaTech Solutions',
    image: null,
  },
]

export const TEAM = [
  {
    name: 'Alexandra Foster',
    role: 'Managing Partner',
    bio: 'Former McKinsey principal with 20+ years driving transformation for Fortune 500 companies. Harvard MBA. Specializes in corporate strategy and organizational change.',
    credentials: ['Harvard Business School, MBA', 'McKinsey & Company, 12 years', 'Board Member, TechForward Foundation'],
    image: null,
  },
  {
    name: 'Marcus Thompson',
    role: 'Senior Partner, Operations',
    bio: 'Operations expert with deep expertise in manufacturing, supply chain, and lean management. Led efficiency programs delivering $500M+ in cumulative savings.',
    credentials: ['MIT Sloan, MBA', 'Bain & Company, 8 years', 'Six Sigma Master Black Belt'],
    image: null,
  },
  {
    name: 'Dr. Yuki Tanaka',
    role: 'Partner, Digital & Technology',
    bio: 'AI and digital strategy leader who bridges the gap between cutting-edge technology and practical business outcomes. Published researcher in applied AI.',
    credentials: ['Stanford, PhD Computer Science', 'Google, Strategic Initiatives, 6 years', 'Author of "The Digital Advantage"'],
    image: null,
  },
  {
    name: 'Rafael Santos',
    role: 'Partner, Financial Advisory',
    bio: 'Financial strategist with expertise in M&A, restructuring, and capital markets. Has advised on transactions totaling $15B+ across multiple industries.',
    credentials: ['Wharton School, MBA', 'Goldman Sachs, VP, 7 years', 'CFA Charterholder'],
    image: null,
  },
]

export const BLOG_POSTS = [
  {
    title: 'The Future of Strategic Planning in an AI-Driven World',
    excerpt:
      'How artificial intelligence is reshaping the way organizations think about long-term strategy, and what leaders need to know to stay ahead.',
    category: 'Strategy',
    date: 'March 5, 2026',
    readTime: '8 min read',
    image: null,
  },
  {
    title: '5 Signs Your Organization Needs a Digital Transformation',
    excerpt:
      'Recognizing the warning signs that your business processes and technology stack are holding you back from reaching your full potential.',
    category: 'Digital',
    date: 'February 28, 2026',
    readTime: '6 min read',
    image: null,
  },
  {
    title: 'Building Resilient Supply Chains: Lessons from 2025',
    excerpt:
      'What the latest global disruptions teach us about supply chain resilience, and practical strategies for building more adaptable operations.',
    category: 'Operations',
    date: 'February 20, 2026',
    readTime: '10 min read',
    image: null,
  },
  {
    title: 'The Leadership Playbook for Successful Change Management',
    excerpt:
      'A practical guide for executives navigating organizational change, based on our experience with 200+ transformation projects.',
    category: 'Leadership',
    date: 'February 12, 2026',
    readTime: '7 min read',
    image: null,
  },
  {
    title: 'Market Entry Strategies for Emerging Economies',
    excerpt:
      'A comprehensive framework for evaluating and executing market entry in high-growth emerging economies across Asia and Africa.',
    category: 'Growth',
    date: 'February 5, 2026',
    readTime: '12 min read',
    image: null,
  },
  {
    title: 'How to Measure What Matters: KPIs That Actually Drive Performance',
    excerpt:
      'Most organizations track too many metrics and the wrong ones. Here is how to identify and implement KPIs that create real accountability.',
    category: 'Operations',
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: null,
  },
]

export const RESOURCES = [
  {
    title: 'The Executive Guide to Digital Transformation',
    type: 'Whitepaper',
    description: 'A comprehensive 40-page guide covering every aspect of digital transformation, from strategy to execution.',
    icon: Lightbulb,
  },
  {
    title: 'Strategic Planning Framework Template',
    type: 'Template',
    description: 'Our proprietary strategic planning template used with Fortune 500 clients. Includes worksheets and examples.',
    icon: Target,
  },
  {
    title: 'Operational Excellence Maturity Assessment',
    type: 'Assessment Tool',
    description: 'Evaluate your organization\'s operational maturity across 12 dimensions with this self-assessment tool.',
    icon: BarChart3,
  },
  {
    title: 'M&A Due Diligence Checklist',
    type: 'Checklist',
    description: 'A thorough due diligence checklist covering financial, operational, legal, and cultural aspects of acquisitions.',
    icon: Shield,
  },
  {
    title: 'Innovation Culture Playbook',
    type: 'Guide',
    description: 'How to build and sustain a culture of innovation within your organization. Real case studies included.',
    icon: Brain,
  },
  {
    title: 'Global Market Entry Decision Matrix',
    type: 'Framework',
    description: 'A data-driven framework for evaluating market entry opportunities across 25+ criteria.',
    icon: Globe,
  },
]

export const CLIENT_LOGOS = [
  'Meridian Technologies',
  'Atlas Manufacturing',
  'Horizon Financial',
  'Pinnacle Health',
  'Quantum Retail',
  'NovaTech Solutions',
  'Summit Energy',
  'Vertex Pharmaceuticals',
]
