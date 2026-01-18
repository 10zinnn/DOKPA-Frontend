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
                    <h3>DOKPA</h3>
                    <span className="nav-tagline">Expeditions</span>
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
        }

        .nav.scrolled {
          background: rgba(23, 37, 50, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-lg);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: baseline;
          gap: var(--space-2);
        }

        .nav-logo h3 {
          font-size: var(--text-2xl);
          font-weight: 800;
          margin: 0;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-tagline {
          font-size: var(--text-sm);
          color: var(--color-glacier-blue);
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: var(--space-8);
          list-style: none;
        }

        .nav-links a {
          color: var(--color-snow-white);
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
          background: var(--gradient-accent);
          transition: width var(--transition-base);
        }

        .nav-links a:hover {
          color: var(--color-golden-hour);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navigation;
