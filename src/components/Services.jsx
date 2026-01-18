import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '🥾',
      title: 'Trek Leadership',
      description: 'Expert-guided treks through Ladakh\'s most stunning trails, from gentle walks to challenging high-altitude expeditions.',
      highlights: ['Experienced guides', 'Safety-first approach', 'Local knowledge']
    },
    {
      icon: '⛰️',
      title: 'Mountaineering Expeditions',
      description: 'Technical mountaineering adventures for experienced climbers seeking to conquer the majestic peaks of the Himalayas.',
      highlights: ['Professional equipment', 'Skilled leadership', 'Altitude acclimatization']
    },
    {
      icon: '🚴',
      title: 'Cycling Adventures',
      description: 'Thrilling cycling journeys across high-altitude passes and through picturesque valleys of Ladakh.',
      highlights: ['Scenic routes', 'Support vehicles', 'Flexible difficulty']
    },
    {
      icon: '🏛️',
      title: 'Cultural Journeys',
      description: 'Immersive experiences connecting you with Ladakhi culture, monasteries, festivals, and local communities.',
      highlights: ['Authentic interactions', 'Cultural immersion', 'Community visits']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Journeys</h2>
        <p className="section-intro">
          Specializing in meaningful travel rather than mass tourism, each journey is
          carefully planned with emphasis on safety, sustainability, and local knowledge.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon">{service.icon}</div>
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
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(72, 140, 200, 0.03) 50%,
            transparent 100%
          );
        }

        .section-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--space-12);
          font-size: var(--text-lg);
          color: var(--color-summit-charcoal);
          opacity: 0.85;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-16);
        }

        .service-card {
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
        }

        .service-icon {
          font-size: 4rem;
          margin-bottom: var(--space-4);
        }

        .service-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-3);
          color: var(--color-sage-green-dark);
        }

        .service-description {
          color: var(--color-summit-charcoal);
          flex-grow: 1;
          margin-bottom: var(--space-4);
          opacity: 0.9;
        }

        .service-highlights {
          list-style: none;
          margin-bottom: var(--space-6);
        }

        .service-highlights li {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-2);
          color: var(--color-summit-charcoal);
          font-size: var(--text-sm);
          opacity: 0.8;
        }

        .check-icon {
          color: var(--color-sage-green);
          font-weight: bold;
        }

        .btn-link {
          background: none;
          border: none;
          color: var(--color-sage-green);
          font-weight: 600;
          cursor: pointer;
          font-size: var(--text-base);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .btn-link:hover {
          color: var(--color-sage-green-dark);
          transform: translateX(5px);
        }

        .cta-box {
          text-align: center;
          padding: var(--space-12) var(--space-8);
          border-radius: var(--radius-2xl);
        }

        .cta-box h3 {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-4);
        }

        .cta-box p {
          max-width: 600px;
          margin: 0 auto var(--space-6);
          color: var(--color-summit-charcoal);
          opacity: 0.85;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
