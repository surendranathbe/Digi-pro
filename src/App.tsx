import React, { useState, useEffect, useRef } from 'react'
import './app.css'
import logo from './assets/digi-pro-logo.png'
import aboutImg from './assets/about-us.png'
import Solutions from './pages/Solutions'
import Portfolios from './pages/Portfolios'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Consultant from './pages/Consultant'
import About from './pages/about'
import { EnquiryModal } from './components/EnquiryModal'
import { TechnologiesSection } from './components/TechnologiesSection'
import { OngoingProjectsSection } from './components/OngoingProjectsSection'
import { FooterSection } from './components/FooterSection'

// ============================================================================
// SERVICE DATA INTERFACE & DATA ARRAY WITH DETAILED ROLE INFORMATION
// ============================================================================
export interface ProcessStep {
  step: string
  stageBadge: string
  stageName: string
  title: string
  desc: string
}

export interface ServiceItem {
  id: string
  name: string
  tagline: string
  roleTitle: string
  description: string
  className: string
  color: string
  gradient: string
  glow: string
  icon: React.ReactNode
  responsibilities: {
    title: string
    desc: string
  }[]
  deliverables: string[]
  businessImpact: string
  metricValue: string
  metricLabel: string
  workflow: string[]
  processSteps: ProcessStep[]
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'biz-dev',
    name: 'Business Development',
    tagline: 'Strategic Growth & Scaling',
    roleTitle: 'Strategic Growth & Business Expansion Specialist',
    description:
      'Turn your ideas into practical growth strategies. We help businesses improve their digital presence, reach new customers and build sustainable growth.',
    className: 'biz-dev',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    glow: 'rgba(245, 158, 11, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20.5h18" />
        <rect x="4.5" y="13" width="3.2" height="7.5" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        <rect x="10.4" y="8.5" width="3.2" height="12" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        <rect x="16.3" y="4.5" width="3.2" height="16" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        <path d="M3.5 13.5L8.5 8.5L13 12L19.5 4.5" strokeWidth="2.3" />
        <polyline points="15 4.5 19.5 4.5 19.5 9" strokeWidth="2.3" />
      </svg>
    ),
    responsibilities: [
      { title: 'Market & Opportunity Discovery', desc: 'In-depth industry benchmarking to identify high-margin revenue openings.' },
      { title: 'Go-to-Market (GTM) Architecture', desc: 'Comprehensive roadmaps covering positioning, pricing, and sales funnels.' },
      { title: 'Predictable Sales Pipelines', desc: 'Structured lead generation and client onboarding systems for recurring growth.' },
      { title: 'Strategic Commercial Partnerships', desc: 'Unlocking high-leverage business alliances and distribution networks.' },
    ],
    deliverables: ['Market Audit', 'GTM Roadmap', 'Sales Funnel Blueprint', 'Partnership Matrix'],
    businessImpact: 'Transforms unpredictable sales into a structured, scalable engine that drives predictable quarterly revenue.',
    metricValue: '3.5x',
    metricLabel: 'Average Revenue Pipeline Multiplier',
    workflow: ['Discovery & Audit', 'Pipeline Blueprint', 'Engine Activation', 'Quarterly Scaling'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Discovery & Market Opportunity Audit',
        desc: 'We analyze your commercial baseline, examine competitor pricing, identify untapped market openings, and set measurable revenue KPIs.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'GTM Strategy & Commercial Pipeline Build',
        desc: 'We construct your go-to-market architecture, design automated buyer qualification funnels, and facilitate strategic partnership outreach.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Scalable Sales Engine & Commercial Growth',
        desc: 'We deploy an automated client acquisition engine, deliver complete sales playbooks to your team, and establish ongoing growth reviews.',
      },
    ],
  },
  {
    id: 'web-dev',
    name: 'Website Development',
    tagline: 'High-Performance Web & Apps',
    roleTitle: 'Full-Stack Web Engineering & UI/UX Architecture',
    description:
      'Modern, responsive and fast websites designed to showcase your business, attract customers and convert visitors into clients.',
    className: 'web-dev',
    color: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    glow: 'rgba(2, 132, 199, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.22" />
        <path d="M8 8.5L6 10L8 11.5" strokeWidth="2.2" />
        <path d="M16 8.5L18 10L16 11.5" strokeWidth="2.2" />
        <line x1="12.5" y1="8" x2="11.5" y2="12" strokeWidth="2" />
        <path d="M2 16h20v1.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V16z" fill="currentColor" fillOpacity="0.38" />
        <line x1="10" y1="16" x2="14" y2="16" strokeWidth="2.2" />
      </svg>
    ),
    responsibilities: [
      { title: 'Custom Web & Web App Engineering', desc: 'Bespoke frontend and backend systems built on modern, scalable frameworks for speed and security.' },
      { title: 'Pixel-Perfect Responsive UI/UX', desc: 'Flawless digital experiences crafted to engage customers seamlessly across mobile, tablet, and desktop.' },
      { title: 'Core Web Vitals & Speed Optimization', desc: 'Sub-second page speeds, clean semantic code, and technical SEO structure for superior Google rank.' },
      { title: 'Secure API & Cloud Integrations', desc: 'Payment gateways, ERP connectivity, custom databases, and automated cloud deployments.' },
    ],
    deliverables: ['Custom Web Platform', 'Responsive Mobile UI', 'Technical SEO & Speed', 'Admin Management CMS'],
    businessImpact: 'Builds unshakeable digital authority, maximizes conversion rates, and ensures 99.9% uptime for your brand.',
    metricValue: '< 0.8s',
    metricLabel: 'Ultra-Fast Page Load Speed',
    workflow: ['UX Wireframing', 'Core Engineering', 'Performance Tuning', 'Cloud Deployment'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Requirements, Wireframes & Tech Architecture',
        desc: 'We define your brand objectives, create high-fidelity UI/UX wireframes, and select modern, scalable tech stacks for top performance.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'Agile Sprint Engineering & Interactive Previews',
        desc: 'We build with clean modular code, provide weekly staging previews for review, and optimize responsiveness and sub-second Core Web Vitals.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Cloud Deployment, QA & Complete Handover',
        desc: 'We conduct full security and browser tests, deploy to high-uptime cloud infrastructure, and hand over 100% source code with CMS training.',
      },
    ],
  },
  {
    id: 'seo-analysis',
    name: 'SEO Analysis',
    tagline: 'Search Visibility & Ranking Intelligence',
    roleTitle: 'Senior Technical SEO Analyst & Search Growth Strategist',
    description:
      'We audit, optimize, and scale your organic search footprint. By eliminating technical crawl barriers and targeting commercial-intent keywords, we position your business directly in front of active buyers on Google.',
    className: 'seo-analysis',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    glow: 'rgba(6, 182, 212, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" fill="currentColor" fillOpacity="0.25" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" strokeWidth="2.5" />
        <path d="M7 12l2.5-2.5 2 2 3-3.5" strokeWidth="2" />
        <polyline points="12 8 14.5 8 14.5 10.5" strokeWidth="2" />
      </svg>
    ),
    responsibilities: [
      { title: 'Technical Crawl & Index Architecture', desc: 'Eliminate crawl budget waste, broken redirect loops, canonical errors, and schema omissions that block Google indexation.' },
      { title: 'Commercial-Intent Keyword Strategy', desc: 'Uncover high-intent search terms your prospective buyers use, structuring content topical clusters that rank and convert.' },
      { title: 'Core Web Vitals & On-Page SERP Tuning', desc: 'Optimize page experience, meta tags, heading hierarchies, internal linking, and rich snippets for top 3 Google rankings.' },
      { title: 'Competitor Benchmark & Authority Scaling', desc: 'Benchmark rival ranking factors and build clean, high-authority backlink profiles for sustained organic domain growth.' },
    ],
    deliverables: ['Full Technical SEO Audit', 'Keyword Rank Strategy', 'Core Web Vitals Tuning', 'Competitor Gap Matrix'],
    businessImpact: 'Captures top organic Google rankings to generate compounding, high-intent inbound inquiries without recurring ad spend.',
    metricValue: '#1 Rank',
    metricLabel: 'Google SERP Visibility Goal',
    workflow: ['Technical Site Audit', 'Keyword Intent Architecture', 'On-Page & Speed Tuning', 'Authority & Rank Scaling'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Technical Crawl & Keyword Gap Audit',
        desc: 'We run in-depth site crawls to detect indexing blocks, crawl waste, canonical issues, and benchmark competitor search keyword rankings.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'On-Page Optimization & Intent Clustering',
        desc: 'We restructure semantic HTML, optimize meta tags and site speed, implement schema markup, and publish commercial-intent content clusters.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Authority Backlinks & Live Ranking Tracking',
        desc: 'We build high-DA backlinks to accelerate domain trust, set up live SERP rank tracking, and deliver transparent monthly conversion reports.',
      },
    ],
  },
  {
    id: 'erp-sol',
    name: 'ERP Solutions',
    tagline: 'Enterprise Automation & Workflows',
    roleTitle: 'Enterprise Systems Architect & Operations Consultant',
    description:
      'Smart business management solutions that connect your operations, automate workflows and help you manage everything efficiently.',
    className: 'erp-sol',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
    glow: 'rgba(139, 92, 246, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.35" />
        <path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5.28 5.28L7.05 7.05M16.95 16.95L18.72 18.72M5.28 18.72L7.05 16.95M16.95 7.05L18.72 5.28" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="20" cy="4" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="4" cy="20" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.4" />
        <path d="M5.5 5.5L7.2 7.2M18.5 5.5L16.8 7.2M5.5 18.5L7.2 16.8M18.5 18.5L16.8 16.8" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    responsibilities: [
      { title: 'Operations Centralization', desc: 'Unify sales, inventory, accounting, and supply chain in one central dashboard.' },
      { title: 'Intelligent Workflow Automation', desc: 'Eliminate manual data entry, human error, and multi-department bottlenecks.' },
      { title: 'Granular Role-Based Permissions', desc: 'Protect critical company data with strict enterprise access control.' },
      { title: 'Real-Time Financial & KPI Reporting', desc: 'Instant live dashboards for cash flow, stock tracking, and executive metrics.' },
    ],
    deliverables: ['Unified ERP Platform', 'Automated Workflows', 'Role-Based Dashboard', 'Staff Training & Docs'],
    businessImpact: 'Reduces operational overhead by up to 60% and gives leadership 100% transparency into daily business metrics.',
    metricValue: '60%',
    metricLabel: 'Reduction in Manual Administrative Work',
    workflow: ['Process Mapping', 'System Blueprint', 'Data Migration', 'Go-Live Training'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Operational Diagnostic & Workflow Mapping',
        desc: 'We review cross-department operations across sales, inventory, and accounting to uncover manual bottlenecks and data redundancies.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'Custom ERP Architecture & Secure Migration',
        desc: 'We engineer centralized dashboards, automate cross-team approval workflows, establish role-based permissions, and migrate existing records.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Zero-Downtime Go-Live & Staff Training',
        desc: 'We deliver hands-on training for management and staff, launch the system with zero operational downtime, and provide dedicated support.',
      },
    ],
  },
  {
    id: 'digi-mkt',
    name: 'Digital Marketing',
    tagline: 'Data-Driven Audience Acquisition',
    roleTitle: 'Performance Marketing Director & Acquisition Specialist',
    description:
      'Reach the right audience through SEO, social media and digital campaigns designed to increase visibility, engagement and leads.',
    className: 'digi-mkt',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)',
    glow: 'rgba(239, 68, 68, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5V13.5C3 14.33 3.67 15 4.5 15H7L13 19V5L7 9H4.5C3.67 9 3 9.67 3 10.5Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M7 15V18.5C7 19.33 7.67 20 8.5 20H9C9.55 20 10 19.55 10 19V15" />
        <line x1="13" y1="5.5" x2="13" y2="18.5" strokeWidth="2.2" />
        <path d="M16 9.5C16.8 10.25 17.3 11.08 17.3 12C17.3 12.92 16.8 13.75 16 14.5" strokeWidth="2.2" />
        <path d="M18.8 7C20.2 8.35 21 10.1 21 12C21 13.9 20.2 15.65 18.8 17" strokeWidth="2.2" />
      </svg>
    ),
    responsibilities: [
      { title: 'High-Intent Search Engine SEO', desc: 'Dominate top Google rankings for high-intent search terms that convert.' },
      { title: 'Performance Paid Ads (PPC)', desc: 'Laser-targeted Google, Meta & LinkedIn campaigns with disciplined ROAS focus.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'High-converting landing pages that convert cold traffic into qualified inquiries.' },
      { title: 'Live ROI Attribution & Analytics', desc: 'Transparent reporting showing exact cost per acquisition and returns.' },
    ],
    deliverables: ['Full SEO Optimization', 'Targeted Paid Ads', 'High-Converting Copy', 'Real-Time ROI Dashboard'],
    businessImpact: 'Drives consistent, qualified customer acquisition while continuously lowering your blended acquisition cost.',
    metricValue: '4.2x',
    metricLabel: 'Average Return on Ad Spend (ROAS)',
    workflow: ['Audience Research', 'Creative Launch', 'Funnels & A/B Testing', 'Scale Profitable Campaigns'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Audience Research & Funnel Strategy',
        desc: 'We pinpoint high-converting buyer personas, review past marketing data, establish target ROAS/CPA metrics, and draft campaign messaging.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'Multi-Channel Ad Launch & A/B Testing',
        desc: 'We deploy targeted Google, Meta & LinkedIn campaigns, A/B test ad creatives and landing pages, and optimize bids to maximize qualified inquiries.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Profitable Campaign Scaling & Attribution',
        desc: 'We scale high-performing ad sets for compounding revenue, eliminate ad fatigue, and provide real-time dashboards detailing acquisition ROI.',
      },
    ],
  },
  {
    id: 'poster-edit',
    name: 'Poster Editing',
    tagline: 'Visual Brand Creatives & Design',
    roleTitle: 'High-Impact Brand Identity & Visual Creatives',
    description:
      'Professional posters, promotional creatives and social media designs that make your brand stand out and communicate clearly.',
    className: 'poster-edit',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
    glow: 'rgba(16, 185, 129, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.6" />
        <rect x="2" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="19" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="2" y="19" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="19" y="19" width="3" height="3" rx="0.5" fill="currentColor" />
        <path d="M14.5 6.5L17.5 9.5L11 16L7.5 17L8.5 13.5L14.5 6.5Z" fill="currentColor" fillOpacity="0.32" strokeWidth="1.8" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        <path d="M6 13C7 10.5 9.5 9 12 9" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    responsibilities: [
      { title: 'Commercial Posters & Event Collateral', desc: 'Striking promotional posters for physical prints, launch events, and venues.' },
      { title: 'Social Media Creative Suites', desc: 'Unified visual assets for Instagram, LinkedIn, Facebook, and ad placements.' },
      { title: 'Brand Identity & Vector Toolkits', desc: 'Signature brand colors, vector typography, and cohesive visual guidelines.' },
      { title: 'Product Launch & Promotional Banners', desc: 'High-contrast digital banners optimized for social engagement and clicks.' },
    ],
    deliverables: ['High-Res Print Posters', 'Social Creative Pack', 'Vector Brand Guidelines', 'Ad Banner Suite'],
    businessImpact: 'Captivates prospective clients immediately, elevating perceived brand value and driving higher conversion.',
    metricValue: '100%',
    metricLabel: 'Pixel-Perfect Vector Artwork',
    workflow: ['Creative Concept', 'Design Drafts', 'Precision Revisions', 'High-Res Production Export'],
    processSteps: [
      {
        step: '01',
        stageBadge: 'HOW WE START',
        stageName: 'Starting Stage',
        title: 'Creative Brief & Visual Brand Discovery',
        desc: 'We review your brand style guide, promotional goals, audience aesthetics, and event specifications to establish creative moodboards.',
      },
      {
        step: '02',
        stageBadge: 'HOW WE WORK',
        stageName: 'Working Stage',
        title: 'Vector Design Drafting & Iterative Polish',
        desc: 'We engineer high-contrast graphic layouts, typographic hierarchies, and striking color palettes, refining designs through feedback cycles.',
      },
      {
        step: '03',
        stageBadge: 'HOW WE END',
        stageName: 'Final Stage',
        title: 'Print-Ready Export & Digital Asset Suite',
        desc: 'We deliver CMYK color-accurate, vector-sharp print files for physical displays, along with multi-resolution digital kits for all social media.',
      },
    ],
  },
]

// ============================================================================
// LIGHTWEIGHT PREMIUM SINGLE-LETTER BANNER ANIMATION COMPONENT
// ============================================================================
interface AnimatedLettersProps {
  text: string
  className?: string
  gradientWords?: string[]
  startDelay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'span' | 'p' | 'div'
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  text,
  className = '',
  gradientWords = [],
  startDelay = 0.1,
  stagger = 0.025,
  as: Component = 'span',
}) => {
  let charIndex = 0
  const words = text.split(' ')

  return (
    <Component className={`anim-letters-text ${className}`} aria-label={text}>
      {words.map((word, wIdx) => {
        const isGradient = gradientWords.includes(word)
        const chars = Array.from(word)

        return (
          <span key={wIdx} className="anim-word">
            {chars.map((char, cIdx) => {
              const delay = +(startDelay + charIndex * stagger).toFixed(3)
              charIndex++
              return (
                <span
                  key={cIdx}
                  className={`anim-char ${isGradient ? 'char-gradient' : ''}`}
                  style={{ animationDelay: `${delay}s` }}
                  aria-hidden="true"
                >
                  {char}
                </span>
              )
            })}
            {wIdx < words.length - 1 && (
              <span className="anim-space" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </span>
        )
      })}
    </Component>
  )
}

// ============================================================================
// MODULAR COMPONENT: CenterGlobe (3D Earth Globe with Digi-pro Logo)
// ============================================================================
const CenterGlobe: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="central-globe-wrapper"
      onClick={onClick}
      title="Digi-pro — Global Digital Growth Partner"
    >
      {/* Rotating Breathing Halo Ring */}
      <div className="globe-halo-ring" />

      {/* 3D Realistic Earth Globe Sphere */}
      <div className="globe-sphere-body">
        <div className="globe-grid-lines" />
      </div>

      {/* Center Glass Emblem Disc with Digi-pro Branding */}
      <div className="globe-emblem-disc">
        <img src={logo} alt="Digi-pro Central Logo" className="center-logo-img" decoding="async" />
        <div className="center-brand-title">Digi-pro</div>
        <div className="center-brand-sub">GLOBAL PARTNER</div>
      </div>
    </div>
  )
}

// ============================================================================
// MODULAR COMPONENT: ServiceInfoCard (Futuristic Glassmorphic Popup)
// ============================================================================
interface ServiceInfoCardProps {
  service: ServiceItem
  onExplore: () => void
}

const ServiceInfoCard: React.FC<ServiceInfoCardProps> = ({ service, onExplore }) => {
  return (
    <div className="service-info-panel-container">
      <div
        className="service-info-card"
        style={{
          ['--info-color' as string]: service.color,
          ['--info-gradient' as string]: service.gradient,
          ['--info-glow' as string]: service.glow,
          ['--info-border' as string]: `${service.color}66`,
        }}
      >
        <div className="info-card-header">
          <div className="info-title-group">
            <div className="info-badge-icon">
              {service.icon}
            </div>
            <div>
              <div className="info-service-title">{service.name}</div>
            </div>
          </div>
        </div>

        <p className="info-service-desc">{service.description}</p>

        <div className="info-card-footer">
          <button className="info-explore-btn" onClick={onExplore}>
            <span>Explore Service →</span>
          </button>
          <span className="info-hint-text">Hover any service to pause</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MODULAR COMPONENT: ServicesOrbit (JS-Driven 60 FPS Precision Orbit)
// ============================================================================
interface ServicesOrbitProps {
  onServiceSelect: (serviceId: string) => void
}

const ServicesOrbit: React.FC<ServicesOrbitProps> = ({ onServiceSelect }) => {
  const [angle, setAngle] = useState(0)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // 60 FPS JavaScript Orbital Animation Loop
  useEffect(() => {
    let animId: number
    let lastTime = performance.now()
    const speed = 0.00032 // Smooth 20s revolution

    const animate = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      if (!hoveredId) {
        setAngle((prev) => (prev + speed * delta) % (2 * Math.PI))
      }
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [hoveredId])

  // Coordinate math based on expanded viewBox (640 x 640), Center = (320, 320), Radius = 224
  const centerCoord = 324
  const orbitRadius = 224

  // Calculate exact position for each of the 5 services
  const planetCoords = SERVICES_DATA.map((service, index) => {
    const phi = angle + (index * 2 * Math.PI) / SERVICES_DATA.length
    const x = centerCoord + orbitRadius * Math.sin(phi)
    const y = centerCoord - orbitRadius * Math.cos(phi)
    return {
      service,
      x,
      y,
      percentX: (x / 640) * 100,
      percentY: (y / 640) * 100,
    }
  })

  // 5 Polygon vertices connecting all services continuously
  const polygonPoints = planetCoords.map((p) => `${p.x},${p.y}`).join(' ')

  const activeService = SERVICES_DATA.find((s) => s.id === hoveredId) || null

  return (
    <div className="hero-orbit-right">
      {/* Script Accents */}
      <div className="script-accent-top">Digital Growth Simplified</div>
      <div className="script-accent-bottom">
        SMALL BUSINESSES<br />BIGGER POSSIBILITIES
      </div>

      <div className={`services-orbit-stage ${hoveredId ? 'has-hover' : ''}`}>
        {/* SVG Layer: Orbit Guide + Dynamic Polygonal Mesh Lines */}
        <svg
          className="polygonal-mesh-svg"
          viewBox="0 0 640 640"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="polyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="20%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#ef4444" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Guide Circle */}
          <circle cx={centerCoord} cy={centerCoord} r={orbitRadius} className="orbit-guide-circle" />

          {/* Continuous Polygonal Mesh Lines Touching All Services */}
          <polygon points={polygonPoints} className="polygon-perimeter-line" />

          {/* Radial Spokes from Center Globe to each Service */}
          {planetCoords.map((p, idx) => (
            <line
              key={idx}
              x1={centerCoord}
              y1={centerCoord}
              x2={p.x}
              y2={p.y}
              className="polygon-spoke-line"
            />
          ))}

          {/* Glowing Vertex Dots at Each Service Connection */}
          {planetCoords.map((p, idx) => (
            <circle
              key={idx}
              cx={p.x}
              cy={p.y}
              r={4.5}
              fill={p.service.color}
              opacity={0.9}
            />
          ))}
        </svg>

        {/* Fixed Central 3D Globe with Digi-pro Logo */}
        <CenterGlobe onClick={() => setHoveredId(null)} />

        {/* 5 Service Planets with 100% Horizontal Level Labels (Positioned Mathematically via JS) */}
        {planetCoords.map(({ service, percentX, percentY }) => {
          const isActive = hoveredId === service.id
          return (
            <div
              key={service.id}
              className={`service-planet-card ${service.className} ${isActive ? 'is-active' : ''}`}
              style={{
                left: `${percentX}%`,
                top: `${percentY}%`,
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onServiceSelect(service.id)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${service.name}`}
            >
              {/* Glowing Icon Orb */}
              <div className="planet-orb">
                {service.icon}
              </div>

              {/* Service Label: ALWAYS 100% Horizontal, Level, Directly Under Icon */}
              <div className="planet-name-text">
                {service.name}
              </div>
            </div>
          )
        })}

        {/* Hovered Service Glassmorphic Information Card */}
        {activeService && (
          <ServiceInfoCard
            service={activeService}
            onExplore={() => onServiceSelect(activeService.id)}
          />
        )}
      </div>
    </div>
  )
}

// ============================================================================
// MODULAR COMPONENT: HeroContent (Left side 48% — Neat Left Alignment)
// ============================================================================
interface HeroContentProps {
  onCtaClick: () => void
}

const HeroContent: React.FC<HeroContentProps> = ({ onCtaClick }) => {
  return (
    <div className="hero-content-left">
      {/* 1. Top Preheader Tagline */}
      <div className="hero-preheader-tag">
        <span className="anim-fade-scale" style={{ animationDelay: '0.05s' }}>IDEAS</span>
        <span className="preheader-sep">|</span>
        <span className="anim-fade-scale" style={{ animationDelay: '0.12s' }}>SOLUTIONS</span>
        <span className="preheader-sep">|</span>
        <span className="anim-fade-scale" style={{ animationDelay: '0.2s' }}>RESULTS</span>
      </div>

      {/* 2 & 3. Brand Title (Single-letter animation) & Subcaption */}
      <div className="hero-brand-heading">
        <h1 className="hero-big-title">
          <AnimatedLetters text="Digi-pro" startDelay={0.08} stagger={0.038} />
        </h1>
        <div className="hero-brand-subcaption">
          YOUR DIGITAL PARTNER FOR GROWTH
        </div>
      </div>

      {/* 4. Main Banner Tagline (Single-letter premium animation) */}
      <div className="hero-tagline-block">
        <AnimatedLetters
          text="Transforming Ideas into Digital Success"
          gradientWords={['Digital', 'Success']}
          startDelay={0.32}
          stagger={0.024}
          className="hero-main-tagline"
          as="h2"
        />
      </div>

      {/* 5. Supporting Description */}
      <p className="hero-supporting-desc">
        We build, design, automate and grow digital experiences that help businesses move forward.
      </p>

      {/* 4 Feature Badges (Cascaded entrance) */}
      <div className="hero-four-features">
        <div className="feature-mini-pill" style={{ animationDelay: '1.42s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="feature-pill-text">Innovative Solutions</span>
        </div>

        <div className="feature-mini-pill" style={{ animationDelay: '1.5s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span className="feature-pill-text">Client Focused</span>
        </div>

        <div className="feature-mini-pill" style={{ animationDelay: '1.58s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="feature-pill-text">Quality Driven</span>
        </div>

        <div className="feature-mini-pill" style={{ animationDelay: '1.66s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <span className="feature-pill-text">Growth Together</span>
        </div>
      </div>

      {/* Premium CTA Button */}
      <a
        href="#contact"
        className="cta-grow-button"
        style={{ animationDelay: '1.76s' }}
        onClick={(e) => {
          e.preventDefault()
          onCtaClick()
        }}
      >
        <span>LET'S GROW TOGETHER</span>
        <div className="cta-arrow-circle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </a>

      {/* Bottom Manifesto */}
      <div className="hero-bottom-manifesto" style={{ animationDelay: '1.86s' }}>
        WE BUILD &nbsp;•&nbsp; DESIGN &nbsp;•&nbsp; AUTOMATE &nbsp;•&nbsp; GROW
      </div>
    </div>
  )
}

// ============================================================================
// MODULAR COMPONENT: HeroSection
// ============================================================================
const HeroSection: React.FC<{
  onTabClick: (tabId: string) => void
}> = ({ onTabClick }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-aura" />
      <div className="hero-layout-grid">
        {/* Left side — 48% Neat Text Alignment & Single-Letter Tagline */}
        <HeroContent onCtaClick={() => onTabClick('contact')} />

        {/* Right side — 52% Continuous Polygonal Lines & 3D Center Globe */}
        <ServicesOrbit onServiceSelect={() => onTabClick('services')} />
      </div>
    </section>
  )
}

// ============================================================================
// MODULAR COMPONENT: AboutSection (50% / 50% Equal Alignment Layout)
// ============================================================================
interface AboutSectionProps {
  onCtaClick: () => void
}

const AboutSection: React.FC<AboutSectionProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="about-container">
        {/* Equal 50/50 Grid */}
        <div className="about-layout-grid">
          {/* Left Column (50%) — Visual Presentation of about-us.png */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img
                src={aboutImg}
                alt="Digi-pro Workspace — Turning Ideas into Real Results"
                className="about-poster-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column (50%) — Content based directly on about-us.png */}
          <div className="about-content-column">
            <div className="about-preheader-tag">
              <span className="about-tag-dot"></span>
              <span>ABOUT DIGI-PRO</span>
            </div>

            <h2 className="about-main-title">
              Turning Your Ideas into <span>Real Results</span>
            </h2>

            <p className="about-mission-quote">
              “Good ideas grow here. We plan, build, and scale digital experiences with disciplined execution so your business moves forward.”
            </p>

            <p className="about-desc-text">
              We operate with a focused daily mission: structured strategy, transparent client partnership, and delivering high-performance websites, ERP automation, and creative digital campaigns.
            </p>

            {/* 4 Core Checklist Points inspired by the notepad in the image */}
            <div className="about-checklist-grid">
              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="check-item-text">
                  <strong>Disciplined Work</strong>
                  <span>Strategy & thorough execution</span>
                </div>
              </div>

              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="check-item-text">
                  <strong>Client-First Mindset</strong>
                  <span>Transparent shared vision</span>
                </div>
              </div>

              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="check-item-text">
                  <strong>Complete Projects</strong>
                  <span>On-time web & creative delivery</span>
                </div>
              </div>

              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="check-item-text">
                  <strong>Grow Business</strong>
                  <span>Marketing to expand your reach</span>
                </div>
              </div>
            </div>

            {/* 3 Pillars Inspired by the Leather Notebooks: WORK • CLIENT • PROJECTS */}
            <div className="about-three-pillars">
              <div className="pillar-mini-chip">
                <span className="chip-label">WORK</span>
                <span className="chip-desc">Technical Mastery</span>
              </div>
              <div className="pillar-mini-chip">
                <span className="chip-label">CLIENT</span>
                <span className="chip-desc">Trusted Partner</span>
              </div>
              <div className="pillar-mini-chip">
                <span className="chip-label">PROJECTS</span>
                <span className="chip-desc">Proven Delivery</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="about-actions-row">
              <a
                href="#contact"
                className="cta-grow-button about-cta-btn"
                onClick={(e) => {
                  e.preventDefault()
                  onCtaClick()
                }}
              >
                <span>LET'S GROW TOGETHER</span>
                <div className="cta-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </a>
              <span className="about-manifesto-sub">
                Small Businesses • Bigger Possibilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MODULAR COMPONENT: ServicesSection (Placed under About Us)
// ============================================================================
export interface ServicesSectionProps {
  onCtaClick: () => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onCtaClick }) => {
  const [activeId, setActiveId] = useState<string>('biz-dev')
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0]
  const currentActiveStep = hoveredStep !== null ? hoveredStep : selectedStep

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Centered Header: 'Our Services' */}
        <div className="services-header-center">
          <div className="services-preheader-tag">
            <span className="services-tag-dot"></span>
            <span>OUR SERVICES</span>
          </div>

          <h2 className="services-main-title">
            Engineered for Growth. Built for <span>Performance.</span>
          </h2>
        </div>

        {/* Side-by-Side Horizontal Services Tab Row */}
        <div className="services-tabs-row" role="tablist" aria-label="Digi-pro Services">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeId
            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={isActive}
                className={`service-tab-btn ${isActive ? 'is-active' : ''}`}
                style={{
                  ['--tab-color' as string]: service.color,
                  ['--tab-gradient' as string]: service.gradient,
                  ['--tab-glow' as string]: service.glow,
                }}
                onClick={() => {
                  setActiveId(service.id)
                  setSelectedStep(null)
                  setHoveredStep(null)
                }}
              >
                <span className="service-tab-icon">{service.icon}</span>
                <span className="service-tab-label">{service.name}</span>
                {isActive && <span className="service-tab-glow-pill" />}
              </button>
            )
          })}
        </div>

        {/* Detailed Role Showcase Panel */}
        <div
          key={activeService.id}
          className="service-detail-panel"
          style={{
            ['--theme-color' as string]: activeService.color,
            ['--theme-gradient' as string]: activeService.gradient,
            ['--theme-glow' as string]: activeService.glow,
          }}
        >
          {/* Left Column: Role Details, Key Capability Points, Direct Action */}
          <div className="service-detail-left">
            <div className="service-role-badge">
              <span className="role-dot" style={{ backgroundColor: activeService.color }} />
              <span>{activeService.roleTitle}</span>
            </div>

            <h3 className="service-detail-headline">{activeService.tagline}</h3>

            <p className="service-detail-summary">{activeService.description}</p>

            {/* Core Capability Points with Interactive Laser Line Hover Effects */}
            <div className="service-responsibilities-grid">
              {activeService.responsibilities.map((item, idx) => (
                <div key={idx} className="service-resp-card">
                  {/* 4 Drawing Border Lines on Hover */}
                  <span className="card-hover-line-top" aria-hidden="true" />
                  <span className="card-hover-line-right" aria-hidden="true" />
                  <span className="card-hover-line-bottom" aria-hidden="true" />
                  <span className="card-hover-line-left" aria-hidden="true" />

                  <div className="resp-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="resp-text-wrap">
                    <strong className="resp-title">{item.title}</strong>
                    <span className="resp-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="service-detail-actions">
              <button
                className="cta-grow-button service-action-cta"
                onClick={onCtaClick}
              >
                <span>CONSULT ABOUT {activeService.name.toUpperCase()}</span>
                <div className="cta-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Process-Wise Execution Framework */}
          <div className="service-detail-right">
            <div className="service-workflow-card">
              <div className="workflow-card-header">
                <div className="workflow-badge-pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>EXECUTION FRAMEWORK</span>
                </div>
                <h4 className="workflow-heading">Process From Start to Finish</h4>
                <p className="workflow-subtext">Hover or click any stage below to inspect our delivery steps.</p>
              </div>

              {/* 3 Connected Process-Wise Stages (Interactive Hover/Click Accordion) */}
              <div className="workflow-process-flow">
                {activeService.processSteps.map((pStep, pIdx) => {
                  const isPointActive = currentActiveStep === pIdx
                  return (
                    <div
                      key={pIdx}
                      className={`process-stage-card stage-${pIdx + 1} ${isPointActive ? 'is-expanded' : ''}`}
                      onMouseEnter={() => setHoveredStep(pIdx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => setSelectedStep(selectedStep === pIdx ? null : pIdx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isPointActive}
                      title={`Click or hover to view details for ${pStep.title}`}
                    >
                      <div className="stage-node-col">
                        <div className="stage-node-circle">
                          <span>{pStep.step}</span>
                        </div>
                        {pIdx < activeService.processSteps.length - 1 && (
                          <div className="stage-track-line" />
                        )}
                      </div>
                      <div className="stage-content-wrap">
                        <div className="stage-header-row">
                          <div className="stage-header-line">
                            <span className={`stage-tag-badge badge-${pIdx + 1}`}>
                              {pStep.stageBadge}
                            </span>
                            <span className="stage-name-meta">{pStep.stageName}</span>
                          </div>
                          <div className="stage-expand-indicator">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className={`expand-chevron ${isPointActive ? 'chevron-rotated' : ''}`}>
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>

                        {/* Always visible Heading */}
                        <h5 className="stage-action-title">{pStep.title}</h5>

                        {/* Related Content - Displays smoothly on hover or click */}
                        <div className="stage-desc-collapsible">
                          <div className="stage-desc-inner">
                            <p className="stage-action-desc">{pStep.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return hash || 'home'
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  // Sync with browser back/forward and URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setActiveTab(hash)
      } else {
        setActiveTab('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Track window scroll for elevated header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on Escape or desktop resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth > 859) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Navigation tabs
  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'portfolios', label: 'Portfolios' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setMobileMenuOpen(false)
    window.location.hash = tabId
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="app-container">
      {/* ================= SINGLE-LAYER CLEAN NAVBAR ================= */}
      <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault()
              handleTabClick('home')
            }}
          >
            <img src={logo} alt="Digi pro Logo" className="logo-img" decoding="async" />
            <div className="brand-text">
              <span className="brand-title">Digi <span className="brand-pro">pro</span></span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-list">
            {navTabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(tab.id)
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Enquiry Us CTA Button */}
          <div className="nav-actions">
            <button
              type="button"
              className="consultant-box"
              onClick={() => setIsEnquiryModalOpen(true)}
              aria-label="Enquiry us"
            >
              <span className="consultant-icon-dot"></span>
              <span>Enquiry us</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-active' : ''}`}>
        <ul className="mobile-nav-list">
          {navTabs.map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className={`mobile-nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleTabClick(tab.id)
                }}
              >
                <span>{tab.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="consultant-box mobile-consultant-cta"
          onClick={() => {
            setMobileMenuOpen(false)
            setIsEnquiryModalOpen(true)
          }}
          aria-label="Enquiry us"
        >
          <span className="consultant-icon-dot"></span>
          <span>Enquiry us</span>
        </button>
      </div>

      {/* ================= DEDICATED INDIVIDUAL PAGE VIEWS ================= */}
      <main className="main-content">
        {activeTab === 'home' && (
          <>
            <HeroSection onTabClick={handleTabClick} />
            <AboutSection onCtaClick={() => handleTabClick('contact')} />
            <ServicesSection onCtaClick={() => handleTabClick('contact')} />
            <TechnologiesSection />
            <OngoingProjectsSection onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
            <FooterSection
              onTabClick={handleTabClick}
              onEnquiryClick={() => setIsEnquiryModalOpen(true)}
            />
          </>
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'services' && <ServicesSection onCtaClick={() => handleTabClick('contact')} />}
        {activeTab === 'solutions' && <Solutions />}
        {activeTab === 'portfolios' && <Portfolios />}
        {activeTab === 'case-studies' && <CaseStudies />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'consultant' && <Consultant />}
      </main>

      {/* Pop-up Modal for Business Enquiry */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  )
}

export default App
