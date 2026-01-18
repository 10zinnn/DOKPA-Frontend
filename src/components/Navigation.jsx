import React, { useState, useEffect } from 'react'

const Navigation = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <img
            src={theme === 'dark' ? "/logo-white.svg" : "/logo-black.svg"}
            alt="Dokpa Expeditions"
            className="logo-image"
          />
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: var(--space-4) 0;
          transition: all var(--transition-base);
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
        }

        .nav.scrolled {
          box-shadow: var(--shadow-lg);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 50px;
          width: auto;
          transition: transform var(--transition-base);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .nav-links {
          display: flex;
          gap: var(--space-8);
          list-style: none;
        }

        .nav-links a {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          font-size: var(--text-base);
          cursor: pointer;
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-sage-green);
          transition: width var(--transition-base);
        }

        .nav-links a:hover {
          color: var(--color-sage-green);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-toggle {
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          padding: var(--space-2);
          border-radius: 50%;
          cursor: pointer;
          font-size: var(--text-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          width: 40px;
          height: 40px;
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          background: var(--color-sage-green);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .logo-image {
            height: 40px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
