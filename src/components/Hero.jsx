import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="container">
                    <h1 className="hero-title animate-fade-in">
                        Explore the Authentic Himalayas
                    </h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Thoughtfully guided journeys through Ladakh's majestic landscapes,
                        connecting you with nature, culture, and community
                    </p>
                    <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <a href="#services" className="btn btn-primary">Discover Journeys</a>
                        <a href="#about" className="btn btn-outline">About Dokpa</a>
                    </div>
                </div>
                <div className="scroll-indicator animate-pulse">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="7 13 12 18 17 13"></polyline>
                        <polyline points="7 6 12 11 17 6"></polyline>
                    </svg>
                </div>
            </div>
            <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
          background-image: 
            linear-gradient(135deg, 
              hsla(210, 15%, 15%, 0.92) 0%, 
              hsla(125, 15%, 25%, 0.75) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          width: 100%;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: var(--space-6);
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          max-width: 800px;
          margin: 0 auto var(--space-10);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .scroll-indicator {
          position: absolute;
          bottom: var(--space-8);
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero {
            height: 90vh;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
