import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <span className="hero-eyebrow reveal">The Trans-Himalayas Awaits</span>
          <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
            Beyond the Ordinary,<br />
            <span className="text-accent">Above the Clouds.</span>
          </h1>
          <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Bespoke expeditions through Ladakh's ancient landscapes.
            Experience the raw majesty of the Himalayas with expert local guidance.
          </p>
          <div className="hero-buttons reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="#services" className="btn btn-primary">Start Your Journey</a>
            <a href="#about" className="btn btn-secondary">Our Story</a>
          </div>
        </div>
      </div>
      <div className="scroll-hint animate-float">
        <span>Explore</span>
        <div className="hint-line"></div>
      </div>
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(26, 31, 35, 0.9) 0%,
            rgba(26, 31, 35, 0.4) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-eyebrow {
          display: block;
          font-family: var(--font-serif);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.9rem;
          margin-bottom: var(--s-4);
          color: var(--color-sage-light);
        }

        .hero-title {
          font-size: var(--h1);
          max-width: 900px;
          margin-bottom: var(--s-8);
        }

        .text-accent {
          color: var(--color-sage-light);
        }

        .hero-subtitle {
          font-size: var(--body);
          max-width: 600px;
          margin-bottom: var(--s-12);
          opacity: 0.9;
          font-weight: 300;
        }

        .hero-buttons {
          display: flex;
          gap: var(--s-4);
        }

        .hero .btn-secondary {
          color: white;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white;
        }

        .scroll-hint {
          position: absolute;
          bottom: var(--s-12);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--s-2);
          opacity: 0.6;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .hint-line {
          width: 1px;
          height: 50px;
          background: white;
          transform-origin: top;
        }

        @media (max-width: 768px) {
          .hero-content {
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
            flex-direction: column;
          }
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;


