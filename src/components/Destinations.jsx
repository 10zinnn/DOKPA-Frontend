import React from 'react'
import { Link } from 'react-router-dom'

const Destinations = () => {
  const featured = [
    {
      title: 'Kargil',
      subtitle: 'The Gateway to Adventure',
      image: '/dest-kargil.jpg',
      tag: 'Most Authentic'
    },
    {
      title: 'Leh & Ladakh',
      subtitle: 'Land of High Passes',
      image: '/dest-leh.jpg',
      tag: 'Must Visit'
    },
    {
      title: 'Zanskar Valley',
      subtitle: 'The Untouched Frontier',
      image: '/dest-zanskar.jpg',
      tag: 'Hidden Gem'
    }
  ];

  return (
    <section id="destinations" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Explore the Region</span>
          <h2 className="section-title-alt">Iconic Landscapes</h2>
          <p className="section-intro">
            Journey through a mosaic of snow-capped peaks, azure lakes, and ancient cultures.
          </p>
        </div>

        <div className="destinations-preview-grid">
          {featured.map((dest, index) => (
            <Link to="/destinations" key={index} className="dest-preview-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="dest-image">
                <img src={dest.image} alt={`${dest.title} - ${dest.subtitle}`} loading="lazy" />
                <span className="dest-tag">{dest.tag}</span>
              </div>
              <div className="dest-info">
                <h3>{dest.title}</h3>
                <p>{dest.subtitle}</p>
                <span className="view-link">Explore Details</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="see-more-container reveal">
          <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
        </div>
      </div>
      <style>{`
        .destinations-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--s-8);
          margin-bottom: var(--s-12);
        }

        .dest-preview-card {
          text-decoration: none;
          color: inherit;
          background: var(--bg-app);
          border-radius: var(--radius-outer);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          transition: var(--transition);
          border: 1px solid var(--glass-border);
        }

        .dest-preview-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-strong);
        }

        .dest-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .dest-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .dest-preview-card:hover .dest-image img {
          transform: scale(1.1);
        }

        .dest-tag {
          position: absolute;
          top: var(--s-4);
          right: var(--s-4);
          background: var(--accent);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .dest-info {
          padding: var(--s-8);
        }

        .dest-info h3 {
          font-size: 1.5rem;
          margin-bottom: var(--s-1);
        }

        .dest-info p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: var(--s-6);
        }

        .view-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: var(--s-2);
        }

        .view-link::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .dest-preview-card:hover .view-link::after {
          transform: translateX(5px);
        }

        .see-more-container {
          display: flex;
          justify-content: center;
          margin-top: var(--s-8);
        }

        @media (max-width: 768px) {
          .dest-image {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Destinations;

