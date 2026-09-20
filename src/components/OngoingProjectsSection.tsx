import React from 'react'

export interface OngoingProjectItem {
  id: string
  title: string
  category: string
  statusBadge: string
  progressPercent: number
  description: string
  accentColor: string
  gradient: string
  glowColor: string
}

export const ONGOING_PROJECTS: OngoingProjectItem[] = [
  {
    id: 'sridevi-sarees',
    title: 'Sridevi Sarees Collection',
    category: 'E-Commerce & Ethnic Fashion Retail',
    statusBadge: 'Active Sprint • Beta Deployment',
    progressPercent: 85,
    description:
      'A luxury, mobile-first e-commerce shopping experience featuring high-definition fabric showcases, instant WhatsApp order sync, and automated digital payments.',
    accentColor: '#ec4899',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #d946ef 100%)',
    glowColor: 'rgba(236, 72, 153, 0.35)',
  },
  {
    id: 'sai-ramana',
    title: 'Sai Ramana Enterprises',
    category: 'Enterprise ERP & Commercial Operations',
    statusBadge: 'Core Database & API Phase',
    progressPercent: 72,
    description:
      'An end-to-end commercial resource planning platform unifying multi-branch GST invoicing, inventory procurement tracking, and client ledger automation.',
    accentColor: '#0284c7',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 50%, #7c3aed 100%)',
    glowColor: 'rgba(2, 132, 199, 0.35)',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    category: 'Experiential Booking & Media Platform',
    statusBadge: 'UI/UX & Interactive Engine',
    progressPercent: 68,
    description:
      'A modern corporate and celebratory event management system with dynamic package pricing, date-availability booking calendars, and multimedia galleries.',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #06b6d4 100%)',
    glowColor: 'rgba(16, 185, 129, 0.35)',
  },
  {
    id: 'sri-fast-food',
    title: 'Sri-Fast Food',
    category: 'QSR & Digital Food Ordering',
    statusBadge: 'Menu System & Live Kitchen Sync',
    progressPercent: 78,
    description:
      'A streamlined fast food ordering experience featuring contactless QR digital menus, automated kitchen order queues, and direct WhatsApp takeaway checkout.',
    accentColor: '#f97316',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fbbf24 100%)',
    glowColor: 'rgba(249, 115, 22, 0.35)',
  },
]

interface OngoingProjectsSectionProps {
  onEnquiryClick?: () => void
}

export const OngoingProjectsSection: React.FC<OngoingProjectsSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section id="ongoing-projects" className="ongoing-section" aria-label="On-Going Projects">
      <div className="ongoing-container">
        {/* Section Header */}
        <div className="ongoing-header-center">
          <div className="ongoing-eyebrow-badge">
            <span className="ongoing-eyebrow-dot"></span>
            <span>LIVE CLIENT PIPELINE</span>
          </div>

          <h2 className="ongoing-main-title">
            On-Going <span className="text-gradient-purple">Projects</span>
          </h2>

          <p className="ongoing-tagline">
            Take a look at the commercial digital products, enterprise automation ERPs, and e-commerce platforms actively being engineered by Digi-pro.
          </p>
        </div>

        {/* Continuous Sliding Projects Track */}
        <div className="ongoing-slider-viewport">
          <div className="ongoing-slider-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={`slider-group-${groupIndex}`}
                className="ongoing-slider-group"
                aria-hidden={groupIndex === 1}
              >
                {ONGOING_PROJECTS.map((project, idx) => (
                  <div
                    key={`${project.id}-group-${groupIndex}-${idx}`}
                    className="ongoing-project-card"
                    style={{
                      '--proj-accent': project.accentColor,
                      '--proj-gradient': project.gradient,
                      '--proj-glow': project.glowColor,
                    } as React.CSSProperties}
                  >
                    {/* Top Colored Laser Line */}
                    <div className="ongoing-card-laser-top"></div>

                    {/* Card Number & Category Tag */}
                    <div className="ongoing-card-top-bar">
                      <span className="ongoing-project-index">0{idx + 1}</span>
                      <span className="ongoing-category-badge">{project.category}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="ongoing-project-title">{project.title}</h3>

                    {/* Live Status Badge */}
                    <div className="ongoing-status-indicator">
                      <span className="ongoing-radar-dot"></span>
                      <span className="ongoing-status-text">{project.statusBadge}</span>
                    </div>

                    {/* Brief Description */}
                    <p className="ongoing-project-desc">{project.description}</p>

                    {/* Progress Bar & Milestone */}
                    <div className="ongoing-progress-block">
                      <div className="ongoing-progress-header">
                        <span className="progress-label-text">Delivery Milestone</span>
                        <span className="progress-percent-val">{project.progressPercent}%</span>
                      </div>
                      <div className="ongoing-progress-track">
                        <div
                          className="ongoing-progress-fill"
                          style={{ width: `${project.progressPercent}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* View Website Button with '#' Redirection */}
                    <a
                      href="#"
                      className="ongoing-view-website-btn"
                      aria-label={`View website for ${project.title}`}
                    >
                      <span>View Website</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" className="ongoing-view-icon">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Action Bar */}
        <div className="ongoing-bottom-cta">
          <div className="ongoing-cta-info">
            <h4 className="ongoing-cta-title">Want to Launch Your Own Custom Project?</h4>
            <p className="ongoing-cta-desc">
              From business automation to online stores and high-converting marketing campaigns, we build solutions tailored to your growth.
            </p>
          </div>
          {onEnquiryClick && (
            <button
              type="button"
              className="ongoing-enquiry-btn"
              onClick={onEnquiryClick}
              aria-label="Enquiry us for your Project"
            >
              <span>Enquiry us for your Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ongoing-btn-arrow">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
