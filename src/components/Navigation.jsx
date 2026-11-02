import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="brand-logo">
          DOKPA<span>.</span>
        </Link>

        <div className={`nav-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>Story</a></li>
            <li>
              <Link
                to="/trips"
                className={location.pathname.startsWith('/trips') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Expeditions
              </Link>
            </li>
            <li><a onClick={() => scrollToSection('activities')}>Activities</a></li>
            <li><a onClick={() => scrollToSection('destinations')}>Destinations</a></li>
            <li>
              <Link
                to="/general-info"
                className={location.pathname === '/general-info' ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                General Info
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname.startsWith('/blog') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <div className="nav-controls">
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="#contact" className="btn-book" onClick={() => setMobileMenuOpen(false)}>Inquire</a>
          </div>
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
