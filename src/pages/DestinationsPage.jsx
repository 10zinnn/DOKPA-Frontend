import React from 'react'
import { Link } from 'react-router-dom'
import { destinationsData } from '../data/destinationsData'

const DestinationsPage = () => {
  return (
    <div className="destinations-page">
      <header className="page-header">
        <div className="container reveal">
          <span className="eyebrow">The Trans-Himalayas</span>
          <h1>Our Destinations</h1>
          <p className="subtitle">Discover the raw, unfiltered beauty of the High Himalayas.</p>
        </div>
      </header>

      <section className="destinations-list">
        <div className="container">
          {destinationsData.map((dest, index) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.id}`}
              className="dest-item reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="dest-item-image">
                <img src={dest.image} alt={dest.title} loading="lazy" />
              </div>
              <div className="dest-item-content">
                <div className="dest-header">
                  <h3>{dest.title}</h3>
                  <span className="dest-subtitle">{dest.subtitle}</span>
                  <div className="dest-features">
                    {dest.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                </div>
                <p className="dest-desc">{dest.shortDescription}</p>
                <div className="dest-details-box glass-panel">
                  <p>{dest.fullDescription}</p>
                </div>
                <div className="dest-action">
                  <span className="btn btn-primary">Explore {dest.title} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .destinations-page {
          background: var(--bg-app);
          min-height: 100vh;
        }

        .page-header {
          padding-top: var(--s-24);
          padding-bottom: var(--s-16);
          background: var(--color-charcoal);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(107, 142, 111, 0.2) 0%, transparent 70%);
        }

        .page-header .container {
          position: relative;
          z-index: 10;
        }

        .page-header .eyebrow {
          color: var(--color-gold);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 700;
          display: block;
          margin-bottom: var(--s-2);
        }

        .page-header h1 {
          font-size: var(--h1);
          margin-bottom: var(--s-4);
        }

        .page-header .subtitle {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          opacity: 0.8;
          max-width: 600px;
          margin-inline: auto;
        }

        .destinations-list {
          padding-block: var(--s-24);
        }

        .dest-item {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--s-16);
          background: var(--bg-alt);
          border-radius: var(--radius-outer);
          overflow: hidden;
          margin-bottom: var(--s-24);
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
        }

        .dest-item:nth-child(even) {
          direction: rtl;
        }

        .dest-item:nth-child(even) > * {
          direction: ltr;
        }

        .dest-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-strong);
        }

        .dest-item-image {
          height: 500px;
          overflow: hidden;
        }

        .dest-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .dest-item:hover .dest-item-image img {
          transform: scale(1.08);
        }

        .dest-item-content {
          padding: var(--s-12);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dest-header {
          margin-bottom: var(--s-8);
        }

        .dest-header h3 {
          font-size: var(--h2);
          margin-bottom: var(--s-2);
        }

        .dest-subtitle {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: var(--s-4);
          font-style: italic;
        }

        .dest-features {
          display: flex;
          gap: var(--s-2);
          flex-wrap: wrap;
        }

        .feature-tag {
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--bg-app);
          color: var(--accent);
          padding: 0.4rem 1rem;
          border-radius: 99px;
          border: 1px solid var(--glass-border);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dest-desc {
          font-size: 1.1rem;
          color: var(--text-main);
          margin-bottom: var(--s-8);
          line-height: 1.7;
          font-family: var(--font-serif);
        }

        .dest-details-box {
          padding: var(--s-6);
          margin-bottom: var(--s-10);
          border-radius: var(--radius-inner);
        }

        .dest-details-box p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .dest-action {
          margin-top: auto;
        }

        .dest-action .btn {
          display: inline-block;
        }

        @media (max-width: 968px) {
          .dest-item {
            grid-template-columns: 1fr;
          }
          .dest-item:nth-child(even) {
            direction: ltr;
          }
          .dest-item-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default DestinationsPage;
