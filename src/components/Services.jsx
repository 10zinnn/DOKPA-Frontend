import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Peak Climbing',
      description: 'Conquer majestic Himalayan summits with our expert climbing teams and technical support.',
      image: '/peak-climbing.jpg',
      highlights: ['Technical peaks', 'Full logistics', 'Expert guides']
    },
    {
      title: 'Luxury Treks',
      description: 'Explore hidden valleys and high passes with curated comfort in the rugged Ladakhi landscape.',
      image: '/trekking.jpg',
      highlights: ['Remote trails', 'Organic local food', 'Sustainable travel']
    },
    {
      title: 'Technical Alpine',
      description: 'Challenge yourself on world-class rock faces and frozen waterfalls with professional guidance.',
      image: '/ice-climbing.jpg',
      highlights: ['Ice & Rock climbing', 'Expert training', 'Top-tier safety']
    },
    {
      title: 'Cultural Immersion',
      description: 'Immerse yourself in the rich traditions, ancient monasteries, and hospitality of the High Himalayas.',
      image: '/cultural-tours.jpg',
      highlights: ['Authentic Gompas', 'Local homestays', 'Expert narration']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Expertly Guided</span>
          <h2 className="section-title-alt">Unforgettable Adventures</h2>
          <p className="section-intro">
            From technical climbs to soul-stirring cultural journeys, we specialize in high-altitude
            experiences that remain etched in your memory forever.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="service-image">
                <img src={service.image} alt={`${service.title} - Dokpa Expeditions`} loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-meta">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="meta-tag">{h}</span>
                  ))}
                </div>
                <a href="#contact" className="service-cta">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner glass-panel reveal">
          <div className="cta-content">
            <h3>Plan Your Custom Expedition</h3>
            <p>Every journey is unique. Let us craft an itinerary that matches your ambition.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
        </div>
      </div>
      <style>{`
        .services-section {
          background: var(--bg-alt);
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto var(--s-16);
        }

        .section-intro {
          font-size: var(--body);
          color: var(--text-muted);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--s-8);
          margin-bottom: var(--s-24);
        }

        .service-card {
          background: var(--bg-app);
          border-radius: var(--radius-outer);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }

        .service-image {
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-content {
          padding: var(--s-8);
        }

        .service-content h3 {
          margin-bottom: var(--s-2);
          font-size: 1.5rem;
        }

        .service-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: var(--s-6);
        }

        .service-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--s-2);
          margin-bottom: var(--s-8);
        }

        .meta-tag {
          font-size: 0.75rem;
          background: var(--bg-alt);
          padding: var(--s-1) var(--s-3);
          border-radius: var(--radius-inner);
          color: var(--accent);
          font-weight: 600;
        }

        .service-cta {
          background: none;
          border: none;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: var(--s-2);
        }

        .service-cta::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .service-cta:hover::after {
          transform: translateX(5px);
        }

        .cta-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--s-12);
          border-radius: var(--radius-outer);
          gap: var(--s-8);
        }

        .cta-content h3 {
          font-size: var(--h3);
          margin-bottom: var(--s-2);
        }

        .cta-content p {
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 850px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;


