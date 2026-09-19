import React, { useState, useEffect } from 'react'
import './app.css'
import logo from './assets/digi-pro-logo.png'

// ============================================================================
// SERVICE DATA INTERFACE & DATA ARRAY
// ============================================================================
interface ServiceItem {
  id: string
  name: string
  tagline: string
  description: string
  className: string
  color: string
  gradient: string
  glow: string
  icon: React.ReactNode
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'biz-dev',
    name: 'Business Development',
    tagline: 'Strategic Growth & Scaling',
    description:
      'Turn your ideas into practical growth strategies. We help businesses improve their digital presence, reach new customers and build sustainable growth.',
    className: 'biz-dev',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    glow: 'rgba(245, 158, 11, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Base axis */}
        <path d="M3 20.5h18" />
        {/* 3 Ascending growth bar columns */}
        <rect x="4.5" y="13" width="3.2" height="7.5" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        <rect x="10.4" y="8.5" width="3.2" height="12" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        <rect x="16.3" y="4.5" width="3.2" height="16" rx="0.8" fill="currentColor" fillOpacity="0.32" />
        {/* Upward diagonal growth trend arrow */}
        <path d="M3.5 13.5L8.5 8.5L13 12L19.5 4.5" strokeWidth="2.3" />
        <polyline points="15 4.5 19.5 4.5 19.5 9" strokeWidth="2.3" />
      </svg>
    ),
  },
  {
    id: 'web-dev',
    name: 'Website Development',
    tagline: 'High-Performance Web & Apps',
    description:
      'Modern, responsive and fast websites designed to showcase your business, attract customers and convert visitors into clients.',
    className: 'web-dev',
    color: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    glow: 'rgba(2, 132, 199, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Laptop Display Frame */}
        <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.22" />
        {/* Code Brackets </> */}
        <path d="M8 8.5L6 10L8 11.5" strokeWidth="2.2" />
        <path d="M16 8.5L18 10L16 11.5" strokeWidth="2.2" />
        <line x1="12.5" y1="8" x2="11.5" y2="12" strokeWidth="2" />
        {/* Laptop Base & Stand Platform */}
        <path d="M2 16h20v1.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V16z" fill="currentColor" fillOpacity="0.38" />
        <line x1="10" y1="16" x2="14" y2="16" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    id: 'erp-sol',
    name: 'ERP Solutions',
    tagline: 'Enterprise Automation & Workflows',
    description:
      'Smart business management solutions that connect your operations, automate workflows and help you manage everything efficiently.',
    className: 'erp-sol',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
    glow: 'rgba(139, 92, 246, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Center Enterprise Automation Cogwheel */}
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.35" />
        <path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5.28 5.28L7.05 7.05M16.95 16.95L18.72 18.72M5.28 18.72L7.05 16.95M16.95 7.05L18.72 5.28" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        {/* Interconnected Enterprise Workflow Nodes */}
        <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="20" cy="4" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="4" cy="20" r="2" fill="currentColor" fillOpacity="0.4" />
        <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.4" />
        {/* Connecting Data Pipelines */}
        <path d="M5.5 5.5L7.2 7.2M18.5 5.5L16.8 7.2M5.5 18.5L7.2 16.8M18.5 18.5L16.8 16.8" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      </svg>
    ),
  },
  {
    id: 'digi-mkt',
    name: 'Digital Marketing',
    tagline: 'Data-Driven Audience Acquisition',
    description:
      'Reach the right audience through SEO, social media and digital campaigns designed to increase visibility, engagement and leads.',
    className: 'digi-mkt',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)',
    glow: 'rgba(239, 68, 68, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* High-Impact Broadcast Megaphone / Bullhorn */}
        <path d="M3 10.5V13.5C3 14.33 3.67 15 4.5 15H7L13 19V5L7 9H4.5C3.67 9 3 9.67 3 10.5Z" fill="currentColor" fillOpacity="0.3" />
        {/* Megaphone Handle */}
        <path d="M7 15V18.5C7 19.33 7.67 20 8.5 20H9C9.55 20 10 19.55 10 19V15" />
        {/* Speaker Output Line */}
        <line x1="13" y1="5.5" x2="13" y2="18.5" strokeWidth="2.2" />
        {/* Dynamic Sound & Outreach Broadcast Waves */}
        <path d="M16 9.5C16.8 10.25 17.3 11.08 17.3 12C17.3 12.92 16.8 13.75 16 14.5" strokeWidth="2.2" />
        <path d="M18.8 7C20.2 8.35 21 10.1 21 12C21 13.9 20.2 15.65 18.8 17" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    id: 'poster-edit',
    name: 'Poster Editing',
    tagline: 'Visual Brand Creatives & Design',
    description:
      'Professional posters, promotional creatives and social media designs that make your brand stand out and communicate clearly.',
    className: 'poster-edit',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
    glow: 'rgba(16, 185, 129, 0.55)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Artboard Frame with Corner Handles */}
        <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.6" />
        {/* 4 Corner Anchor Points */}
        <rect x="2" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="19" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="2" y="19" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="19" y="19" width="3" height="3" rx="0.5" fill="currentColor" />
        {/* Designer's Pen Nib Tool */}
        <path d="M14.5 6.5L17.5 9.5L11 16L7.5 17L8.5 13.5L14.5 6.5Z" fill="currentColor" fillOpacity="0.32" strokeWidth="1.8" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        {/* Curved Bezier Vector Line */}
        <path d="M6 13C7 10.5 9.5 9 12 9" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
]

// ============================================================================
// ANIMATED BANNER TEXT COMPONENTS (SINGLE-BY-SINGLE TEXT ANIMATIONS)
// ============================================================================

// 1. Preheader Tagline: "IDEAS | SOLUTIONS | RESULTS" (Single-word fade & scale)
const AnimatedPreheader: React.FC = () => {
  const items = [
    { text: 'IDEAS', isSep: false },
    { text: '|', isSep: true },
    { text: 'SOLUTIONS', isSep: false },
    { text: '|', isSep: true },
    { text: 'RESULTS', isSep: false },
  ]
  return (
    <div className="hero-preheader-tag">
      {items.map((item, idx) => (
        <span
          key={idx}
          className={item.isSep ? 'preheader-sep anim-fade-scale' : 'anim-fade-scale'}
          style={{ animationDelay: `${0.08 + idx * 0.12}s` }}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}

// 2. Brand Title: "Digi-pro" (Single-letter 3D pop-in)
const AnimatedBrandTitle: React.FC = () => {
  const parts = [
    { text: 'Digi-', isGradient: false },
    { text: 'pro', isGradient: true },
  ]
  let charIdx = 0
  return (
    <h1 className="hero-big-title">
      {parts.map((part, pIdx) => (
        <span
          key={pIdx}
          className={part.isGradient ? 'brand-part-gradient' : 'brand-part-normal'}
        >
          {part.text.split('').map((char, cIdx) => {
            const delay = 0.45 + charIdx * 0.055
            charIdx++
            return (
              <span
                key={cIdx}
                className="title-char-anim"
                style={{ animationDelay: `${delay}s` }}
              >
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

// 3. Brand Subcaption: "YOUR DIGITAL PARTNER FOR GROWTH" (Single-word fade & rise)
const AnimatedSubcaption: React.FC = () => {
  const words = ['YOUR', 'DIGITAL', 'PARTNER', 'FOR', 'GROWTH']
  return (
    <div className="hero-brand-subcaption">
      {words.map((word, idx) => (
        <span
          key={idx}
          className="subcaption-word-anim"
          style={{ animationDelay: `${0.85 + idx * 0.08}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  )
}

// 4. Main Tagline: "Transforming Ideas into Digital Success" (Single-letter pop-in)
const SingleLetterTagline: React.FC = () => {
  const words = [
    { text: 'Transforming', isGradient: false },
    { text: 'Ideas', isGradient: false },
    { text: 'into', isGradient: false },
    { text: 'Digital', isGradient: true },
    { text: 'Success', isGradient: true },
  ]

  let globalCharIndex = 0

  return (
    <h2 className="hero-main-tagline" aria-label="Transforming Ideas into Digital Success">
      {words.map((word, wIdx) => {
        const letters = word.text.split('')
        return (
          <React.Fragment key={wIdx}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {letters.map((char, cIdx) => {
                const delay = 1.25 + globalCharIndex * 0.032
                globalCharIndex++
                return (
                  <span
                    key={cIdx}
                    className={`char-anim ${word.isGradient ? 'char-gradient' : ''}`}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    {char}
                  </span>
                )
              })}
            </span>
            {wIdx < words.length - 1 && <span className="char-space">&nbsp;</span>}
          </React.Fragment>
        )
      })}
    </h2>
  )
}

// 5. Supporting Description: "We build, design, automate and grow digital experiences that help businesses move forward." (Single-word fade & rise)
const AnimatedSupportingDesc: React.FC = () => {
  const words =
    'We build, design, automate and grow digital experiences that help businesses move forward.'.split(
      ' '
    )
  return (
    <p className="hero-supporting-desc">
      {words.map((word, idx) => (
        <span
          key={idx}
          className="desc-word-anim"
          style={{ animationDelay: `${2.05 + idx * 0.04}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
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
        <img src={logo} alt="Digi-pro Central Logo" className="center-logo-img" />
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
              <stop offset="25%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ef4444" stopOpacity="0.85" />
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
      {/* 1. Top Preheader Tagline (Single-word fade & scale) */}
      <AnimatedPreheader />

      {/* 2 & 3. Brand Title (Single-letter 3D pop-in) & Subcaption (Single-word fade & rise) */}
      <div className="hero-brand-heading">
        <AnimatedBrandTitle />
        <AnimatedSubcaption />
      </div>

      {/* 4. Main Tagline (Single-letter gradient pop-in) */}
      <div className="hero-tagline-block">
        <SingleLetterTagline />
      </div>

      {/* 5. Supporting Description (Single-word fluid rise) */}
      <AnimatedSupportingDesc />

      {/* 4 Feature Badges (Cascaded entrance) */}
      <div className="hero-four-features">
        <div className="feature-mini-pill" style={{ animationDelay: '2.6s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="feature-pill-text">Innovative Solutions</span>
        </div>

        <div className="feature-mini-pill" style={{ animationDelay: '2.68s' }}>
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

        <div className="feature-mini-pill" style={{ animationDelay: '2.76s' }}>
          <div className="feature-pill-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="feature-pill-text">Quality Driven</span>
        </div>

        <div className="feature-mini-pill" style={{ animationDelay: '2.84s' }}>
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
        style={{ animationDelay: '2.95s' }}
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
      <div className="hero-bottom-manifesto" style={{ animationDelay: '3.08s' }}>
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
// MAIN APP COMPONENT
// ============================================================================
function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    const element = document.getElementById(tabId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
            <img src={logo} alt="Digi pro Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">Digi</span>
              <span className="brand-badge">pro</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
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

          {/* Consultant CTA Box with Hover Effect */}
          <div className="nav-actions">
            <a
              href="#consultant"
              className="consultant-box"
              onClick={(e) => {
                e.preventDefault()
                handleTabClick('consultant')
              }}
            >
              <span className="consultant-icon-dot"></span>
              <span>Consultant</span>
            </a>
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

        <a
          href="#consultant"
          className="consultant-box mobile-consultant-cta"
          onClick={(e) => {
            e.preventDefault()
            handleTabClick('consultant')
          }}
        >
          <span className="consultant-icon-dot"></span>
          <span>Book a Consultant</span>
        </a>
      </div>

      {/* ================= HERO SECTION ================= */}
      <main>
        <HeroSection onTabClick={handleTabClick} />
      </main>
    </div>
  )
}

export default App
