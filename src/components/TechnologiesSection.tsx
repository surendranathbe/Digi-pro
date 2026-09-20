import React from 'react'
import canvaSvg from '../assets/canva.svg'

export interface TechnologyItem {
  id: string
  name: string
  categoryLabel: string
  tagline: string
  description: string
  imageUrl: string
  badgeLabel: string
  accentColor: string
  gradient: string
  glowColor: string
}

export const TECHNOLOGIES_LIST: TechnologyItem[] = [
  {
    id: 'react',
    name: 'React.js',
    categoryLabel: 'Frontend Framework',
    tagline: 'Dynamic Reactive UI Architecture',
    description:
      'Component-driven single page applications engineered for instant responsiveness, state synchronization, and scalable enterprise web apps.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-mWFpu-0jQGH3E4BTMdw_j5SQW2GsYUgZHbOkdaBtw&s=10',
    badgeLabel: 'Reactive UI Engine',
    accentColor: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    glowColor: 'rgba(2, 132, 199, 0.4)',
  },
  {
    id: 'html',
    name: 'HTML5 & Modern Web',
    categoryLabel: 'Web Standards',
    tagline: 'Semantic DOM & Accessibility',
    description:
      'W3C-compliant semantic architecture, responsive viewport scaffolding, and accessible web standards delivering instant initial render speeds.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9NiruM4qUZmpH-Hnyl31gDc2mts429qxU2IkTBWJg&s=10',
    badgeLabel: 'Semantic & High-Speed',
    accentColor: '#e34f26',
    gradient: 'linear-gradient(135deg, #e34f26 0%, #f06529 100%)',
    glowColor: 'rgba(227, 79, 38, 0.4)',
  },
  {
    id: 'php',
    name: 'PHP Backend',
    categoryLabel: 'Server-Side Engineering',
    tagline: 'Enterprise Web Logic & APIs',
    description:
      'High-throughput server-side scripting, custom business microservices, RESTful API endpoints, and seamless backend workflow automation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjSINRQxYNmxE_AWtzfxYQZqAbCzvqr9iVeZZnf92Yg&s',
    badgeLabel: 'Secure API Pipelines',
    accentColor: '#4f5b93',
    gradient: 'linear-gradient(135deg, #4f5b93 0%, #777bb4 100%)',
    glowColor: 'rgba(119, 123, 180, 0.4)',
  },
  {
    id: 'oracle',
    name: 'Oracle Database',
    categoryLabel: 'Enterprise RDBMS',
    tagline: 'Mission-Critical Transactions',
    description:
      'High-security relational database systems with multi-tenant architecture, automated backups, and extreme ACID transactional integrity for ERPs.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDOOC6tJoGJmLp9uwXBrPbGziZR5oWbZ1d2uSsRjjjg&s=10',
    badgeLabel: 'Enterprise Grade RDBMS',
    accentColor: '#c70000',
    gradient: 'linear-gradient(135deg, #c70000 0%, #ea2323 100%)',
    glowColor: 'rgba(199, 0, 0, 0.4)',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    categoryLabel: 'NoSQL Document Database',
    tagline: 'High-Velocity Cloud Data Storage',
    description:
      'Distributed document database built for horizontal elasticity, agile schema evolution, high-frequency query caching, and real-time analytics.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjikuaGHShaF48CbZOhnJABZUuIN0GF-XhHox20tzzkA&s=10',
    badgeLabel: 'Elastic Cloud NoSQL',
    accentColor: '#13aa52',
    gradient: 'linear-gradient(135deg, #13aa52 0%, #00684a 100%)',
    glowColor: 'rgba(19, 170, 82, 0.4)',
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    categoryLabel: 'Visual Branding & Graphics',
    tagline: 'High-Impact Brand Collateral',
    description:
      'Cohesive visual communication, social media campaigns, promotional advertising banners, and corporate presentation layouts.',
    imageUrl: canvaSvg,
    badgeLabel: 'Brand & Creative Assets',
    accentColor: '#00c4cc',
    gradient: 'linear-gradient(135deg, #00c4cc 0%, #7d2ae8 100%)',
    glowColor: 'rgba(0, 196, 204, 0.4)',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    categoryLabel: 'Video Editing & Motion',
    tagline: 'High-Impact Reels & Commercial Video',
    description:
      'Dynamic short-form video editing, kinetic motion typography, audio synchronization, and viral social content designed for maximum viewer retention.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJfBeQ0vYJjU848HD93ozDTeUa3c547SmFlE1L3Rn6A&s=10',
    badgeLabel: 'Commercial Video & Reels',
    accentColor: '#0f172a',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    glowColor: 'rgba(15, 23, 42, 0.4)',
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    categoryLabel: 'Photo Editing & Graphics',
    tagline: 'Pixel-Perfect Raster Design & Retouching',
    description:
      'Precision photo manipulation, advanced digital retouching, composite poster graphics, and high-fidelity promotional creative artwork.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjesspZcp1tmTDwTmZY5Vw9zTaj_x5fG2phSxVujiyw&s=10',
    badgeLabel: 'Pro Graphic & Retouching',
    accentColor: '#31a8ff',
    gradient: 'linear-gradient(135deg, #001e36 0%, #31a8ff 100%)',
    glowColor: 'rgba(49, 168, 255, 0.4)',
  },
  {
    id: 'seo',
    name: 'SEO & Search Engine Analytics',
    categoryLabel: 'Search Optimization',
    tagline: 'Top Organic Search Rankings',
    description:
      'Deep algorithmic site audits, schema structured data, competitive keyword indexing, and high-conversion organic customer acquisition funnels.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRlhVERDA0QoyPPaFed6fvpPVSAAd-W9CrV3FycVUJg&s=10',
    badgeLabel: 'Organic Revenue Engine',
    accentColor: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
    glowColor: 'rgba(2, 132, 199, 0.4)',
  },
]

export const TechnologiesSection: React.FC = () => {
  return (
    <section id="technologies" className="technologies-section" aria-label="Technologies Used">
      <div className="technologies-container">
        {/* Section Header */}
        <div className="technologies-header-center">
          <div className="tech-eyebrow-badge">
            <span className="tech-eyebrow-dot"></span>
            <span>ENTERPRISE-GRADE STACK</span>
          </div>

          <h2 className="technologies-main-title">
            Technologies <span className="text-gradient-purple">We Use</span>
          </h2>

          <p className="technologies-tagline">
            Battle-tested frameworks, enterprise databases, creative design suites, and professional video editing tools powering digital growth for your business.
          </p>
        </div>

        {/* 9 Technologies Grid Layout */}
        <div className="technologies-grid">
          {TECHNOLOGIES_LIST.map((tech) => (
            <div
              key={tech.id}
              className="tech-card"
              style={{
                '--tech-accent': tech.accentColor,
                '--tech-gradient': tech.gradient,
                '--tech-glow': tech.glowColor,
              } as React.CSSProperties}
            >
              {/* Top Laser Hover Beam */}
              <div className="tech-card-laser-top"></div>

              {/* Card Header with Real Image */}
              <div className="tech-card-header">
                <div className="tech-image-frame">
                  <img
                    src={tech.imageUrl}
                    alt={`${tech.name} logo`}
                    className="tech-real-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="tech-meta-group">
                  <span className="tech-category-tag">{tech.categoryLabel}</span>
                  <h3 className="tech-card-title">{tech.name}</h3>
                </div>
              </div>

              {/* Tagline */}
              <div className="tech-card-tagline">{tech.tagline}</div>

              {/* Detailed Description */}
              <p className="tech-card-desc">{tech.description}</p>

              {/* Bottom Badge & Indicator */}
              <div className="tech-card-footer">
                <span className="tech-spec-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="tech-spec-icon">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {tech.badgeLabel}
                </span>

                <div className="tech-active-indicator" title="Active Digi-pro Stack">
                  <span className="tech-indicator-dot"></span>
                  <span className="tech-indicator-text">Active Stack</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
