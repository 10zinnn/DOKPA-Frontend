import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Peak Climbing',
      description: 'Conquer majestic Himalayan summits with our expert climbing teams and comprehensive support.',
      image: '/peak-climbing.jpg',
      highlights: ['Technical peaks', 'Full logistics', 'Expert guides']
    },
    {
      title: 'Treks',
      description: 'Explore hidden valleys and high passes on curated trekking routes across the Ladakhi landscape.',
      image: '/trekking.jpg',
      highlights: ['Remote trails', 'Local culture', 'Sustainable travel']
    },
    {
      title: 'Ice & Rock Climbing',
      description: 'Challenge yourself on world-class rock faces and frozen waterfalls with professional guidance.',
      image: '/ice-climbing.jpg',
      highlights: ['Skills training', 'Top gear', 'Safety focused']
    },
    {
      title: 'Cultural Tours',
      description: 'Immerse yourself in the rich traditions, monasteries, and hospitality of the High Himalayas.',
      image: '/cultural-tours.jpg',
      highlights: ['Authentic Gompas', 'Local homestays', 'Expert narration']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Adventure Experiences</h2>
        <p className="section-intro">
          Experience peak climbing, treks, ice and rock climbing and cultural tours in Ladakh with expert guides and adventures.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-highlights">
                  {service.highlights.map((highlight, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="btn-link">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-box glass">
          <h3>Ready for Your Next Adventure?</h3>
          <p>Packages and detailed itineraries will be available soon. Get in touch to discuss custom journeys.</p>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
      <style jsx>{`
        .services-section {
          background: var(--bg-primary);
        }

        .section-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--space-12);
          font-size: var(--text-lg);
          color: var(--text-primary);
          opacity: 0.9;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-16);
        }

        .service-card {
          height: 450px;
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
          border: 1px solid var(--glass-border);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl), var(--shadow-glow);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.9) 100%
          );
          transition: opacity var(--transition-base);
        }

        .service-card:hover .card-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.95) 100%
          );
        }

        .card-content {
          position: relative;
          z-index: 2;
          padding: var(--space-8);
          color: white;
        }

        .service-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-3);
          color: white;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--space-4);
          font-size: var(--text-base);
          line-height: 1.4;
        }

        .service-highlights {
          list-style: none;
          margin-bottom: var(--space-6);
        }

        .service-highlights li {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-1);
          color: rgba(255, 255, 255, 0.85);
          font-size: var(--text-sm);
        }

        .check-icon {
          color: var(--color-sage-green-light);
          font-weight: bold;
        }

        .btn-link {
          background: none;
          border: none;
          color: var(--color-sage-green-light);
          font-weight: 600;
          cursor: pointer;
          font-size: var(--text-base);
          text-align: left;
          transition: all var(--transition-fast);
          padding: 0;
        }

        .btn-link:hover {
          color: white;
          transform: translateX(5px);
        }

        .cta-box {
          text-align: center;
          padding: var(--space-12) var(--space-8);
          border-radius: var(--radius-2xl);
          background: var(--bg-secondary);
        }

        .cta-box h3 {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-4);
          color: var(--text-primary);
        }

        .cta-box p {
          max-width: 600px;
          margin: 0 auto var(--space-6);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
