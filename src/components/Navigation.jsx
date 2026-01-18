import React from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
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
          <img src="/logo.png" alt="Dokpa Expeditions" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
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
          background: rgba(245, 239, 231, 0.95);
          backdrop-filter: blur(10px);
        }

        .nav.scrolled {
          background: rgba(245, 239, 231, 0.98);
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
        }

        .nav-links {
          display: flex;
          gap: var(--space-8);
          list-style: none;
        }

        .nav-links a {
          color: var(--color-summit-charcoal);
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
