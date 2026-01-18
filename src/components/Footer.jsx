import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">DOKPA</h3>
                        <p className="footer-tagline">Expeditions</p>
                        <p className="footer-description">
                            Authentic Himalayan adventures rooted in responsibility,
                            community, and respect for nature.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <div className="contact-info">
                            <p>
                                <span className="icon">📍</span>
                                Ladakh, India
                            </p>
                            <p>
                                <span className="icon">📧</span>
                                info@dokpaexpeditions.com
                            </p>
                            <p>
                                <span className="icon">📱</span>
                                +91 XXXXX XXXXX
                            </p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="social-link" aria-label="Facebook">👍</a>
                            <a href="#" className="social-link" aria-label="YouTube">▶️</a>
                            <a href="#" className="social-link" aria-label="Email">✉️</a>
                        </div>
                        <p className="footer-note">
                            Join us on social media for breathtaking views and expedition updates
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Dokpa Expeditions. All rights reserved.</p>
                    <p className="footer-credits">
                        Crafted with ❤️ for adventure seekers
                    </p>
                </div>
            </div>
            <style jsx>{`
        .footer {
          background: linear-gradient(180deg,
            var(--color-deep-blue) 0%,
            var(--color-mountain-dark) 100%
          );
          padding: var(--space-16) 0 var(--space-8);
          margin-top: var(--space-20);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-10);
          margin-bottom: var(--space-12);
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: var(--space-4);
        }

        .footer-logo {
          font-size: var(--text-3xl);
          font-weight: 800;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-2);
        }

        .footer-tagline {
          color: var(--color-glacier-blue);
          font-size: var(--text-lg);
          font-weight: 500;
          margin-bottom: var(--space-4);
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
          color: rgba(255, 255, 255, 0.8);
        }

        .icon {
          font-size: var(--text-lg);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: var(--space-3);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-golden-hour);
        }

        .social-links {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-xl);
          text-decoration: none;
          transition: all var(--transition-base);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: var(--gradient-accent);
          transform: translateY(-3px);
          box-shadow: var(--shadow-glow);
        }

        .footer-note {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .footer-bottom {
          text-align: center;
          padding-top: var(--space-8);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom p {
          margin-bottom: var(--space-2);
        }

        .footer-credits {
          font-size: var(--text-sm);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
