import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo-text">DOKPA</h2>
            <p className="footer-tagline">Beyond the Ordinary, Above the Clouds.</p>
            <p className="footer-desc">
              Bespoke expeditions through the Trans-Himalayas.
              Rooted in nomadic wisdom, driven by adventure.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about">Our Story</a></li>
              <li><Link to="/trips">Expeditions & Treks</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/general-info">General Info</Link></li>
              <li><Link to="/blog">Trail Blog</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>Leh, Ladakh, India</li>
              <li>+91 9906XXXXXX</li>
              <li>expeditions@dokpa.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} Dokpa Expeditions. All rights reserved.</p>
          </div>
          <div className="footer-meta">
            <span>Handcrafted in the Himalayas 🏔️</span>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--color-charcoal);
          color: white;
          padding-top: var(--s-24);
          padding-bottom: var(--s-8);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        [data-theme='dark'] .footer {
          background: var(--bg-alt);
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: var(--s-16);
          margin-bottom: var(--s-16);
        }

        .logo-text {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          margin-bottom: var(--s-1);
          letter-spacing: 0.1em;
          color: var(--color-gold);
        }

        .footer-tagline {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--color-gold);
          opacity: 0.8;
          margin-bottom: var(--s-4);
        }

        .footer-desc {
          font-size: 0.95rem;
          opacity: 0.6;
          max-width: 400px;
          line-height: 1.6;
        }

        .footer-nav h4, .footer-contact h4 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-bottom: var(--s-6);
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }

        .footer-nav ul, .footer-contact ul {
          list-style: none;
        }

        .footer-nav li, .footer-contact li {
          margin-bottom: var(--s-3);
          font-size: 1rem;
          opacity: 0.7;
          transition: var(--transition);
        }

        .footer-nav a {
          color: inherit;
          text-decoration: none;
        }

        .footer-nav a:hover {
          opacity: 1;
          color: var(--color-gold);
          transform: translateX(5px);
          display: inline-block;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: var(--s-12);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.85rem;
          opacity: 0.5;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--s-12);
          }
          .footer-bottom {
            flex-direction: column;
            gap: var(--s-4);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
