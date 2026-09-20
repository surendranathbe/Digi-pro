import React from 'react'
import logo from '../assets/digi-pro-logo.png'

interface FooterSectionProps {
  onTabClick?: (tabId: string) => void
  onEnquiryClick?: () => void
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onTabClick,
  onEnquiryClick,
}) => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (tabId: string, anchorId?: string) => {
    if (onTabClick) {
      onTabClick(tabId)
    }
    if (anchorId) {
      const el = document.getElementById(anchorId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" aria-label="Site Footer">
      {/* Subtle Top Glowing Gradient Line */}
      <div className="footer-glow-bar" />

      <div className="footer-container">
        {/* Main Footer Grid: 4 Columns */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-col-brand">
            <div
              className="footer-brand"
              onClick={() => handleNavClick('home', 'home')}
              role="button"
              tabIndex={0}
            >
              <img
                src={logo}
                alt="Digi-pro Logo"
                className="footer-logo-img"
              />
              <span className="footer-brand-text">
                Digi<span className="footer-brand-accent">pro</span>
              </span>
            </div>

            <p className="footer-bio">
              Empowering visionary businesses with enterprise web applications, high-performance database architectures, modern creative design, and dynamic video production.
            </p>

            <div className="footer-status-badge">
              <span className="footer-radar-dot"></span>
              <span className="footer-status-text">Available for New Projects</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('home', 'home')}
                >
                  <span className="footer-link-arrow">›</span>
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('home', 'about')}
                >
                  <span className="footer-link-arrow">›</span>
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('home', 'services')}
                >
                  <span className="footer-link-arrow">›</span>
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('home', 'technologies')}
                >
                  <span className="footer-link-arrow">›</span>
                  Technologies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('home', 'ongoing-projects')}
                >
                  <span className="footer-link-arrow">›</span>
                  On-Going Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleNavClick('contact')}
                >
                  <span className="footer-link-arrow">›</span>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="footer-col">
            <h4 className="footer-heading">Key Capabilities</h4>
            <ul className="footer-capabilities-list">
              <li>
                <span className="footer-cap-dot"></span>
                <span>Full-Stack Web & React Dev</span>
              </li>
              <li>
                <span className="footer-cap-dot"></span>
                <span>Enterprise Oracle & MongoDB</span>
              </li>
              <li>
                <span className="footer-cap-dot"></span>
                <span>PHP & Cloud Backend API</span>
              </li>
              <li>
                <span className="footer-cap-dot"></span>
                <span>UI/UX, Canva & Photoshop</span>
              </li>
              <li>
                <span className="footer-cap-dot"></span>
                <span>CapCut Video Editing & Reels</span>
              </li>
              <li>
                <span className="footer-cap-dot"></span>
                <span>Targeted Search Engine SEO</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Immediate Action & Connect */}
          <div className="footer-col footer-col-action">
            <h4 className="footer-heading">Ready to Grow?</h4>
            <p className="footer-action-desc">
              Have an upcoming product, e-commerce brand, or enterprise system requirement? Let's engineer it together.
            </p>

            {onEnquiryClick && (
              <button
                type="button"
                className="footer-enquiry-trigger-btn"
                onClick={onEnquiryClick}
                id="footer-enquiry-btn"
              >
                <span>Book Business Enquiry</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-trigger-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            )}

            {/* Social & Contact Links */}
            <div className="footer-social-row">
              <a
                href="#contact"
                className="footer-social-pill"
                onClick={(e) => {
                  e.preventDefault()
                  if (onTabClick) onTabClick('contact')
                }}
                title="Direct Contact"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social-pill"
                title="LinkedIn Network"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social-pill"
                title="GitHub Codebase"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social-pill"
                title="Instagram Media"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} <strong>Digi-pro</strong>. All rights reserved. Crafted for scalable digital performance.
          </p>

          <button
            type="button"
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
