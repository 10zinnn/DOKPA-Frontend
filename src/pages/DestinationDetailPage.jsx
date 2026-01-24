import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getDestinationById, getRelatedDestinations } from '../data/destinationsData'

const DestinationDetailPage = () => {
  const { destinationId } = useParams();
  const destination = getDestinationById(destinationId);
  const relatedDestinations = getRelatedDestinations(destinationId);

  // If destination not found, redirect to destinations page
  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="destination-detail-page">
      {/* Hero Section */}
      <section className="destination-hero">
        <div className="destination-hero-image">
          <img src={destination.image} alt={destination.title} />
          <div className="destination-hero-overlay"></div>
        </div>
        <div className="destination-hero-content">
          <div className="container">
            <div className="breadcrumb reveal">
              <Link to="/">Home</Link>
              <span> / </span>
              <Link to="/destinations">Destinations</Link>
              <span> / </span>
              <span>{destination.title}</span>
            </div>
            <span className="dest-tag reveal" style={{ transitionDelay: '0.1s' }}>
              {destination.tag}
            </span>
            <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>{destination.title}</h1>
            <p className="destination-subtitle reveal" style={{ transitionDelay: '0.3s' }}>
              {destination.subtitle}
            </p>
            <p className="destination-hero-description reveal" style={{ transitionDelay: '0.4s' }}>
              {destination.fullDescription}
            </p>
            <div className="destination-hero-meta reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="hero-meta-item">
                <span className="meta-icon">📍</span>
                <div>
                  <span className="meta-label">Altitude</span>
                  <span className="meta-value">{destination.altitude}</span>
                </div>
              </div>
              <div className="hero-meta-item">
                <span className="meta-icon">🚗</span>
                <div>
                  <span className="meta-label">From Leh</span>
                  <span className="meta-value">{destination.distanceFromLeh}</span>
                </div>
              </div>
              <div className="hero-meta-item">
                <span className="meta-icon">📅</span>
                <div>
                  <span className="meta-label">Best Time</span>
                  <span className="meta-value">{destination.bestTimeToVisit}</span>
                </div>
              </div>
            </div>
            <div className="destination-hero-actions reveal" style={{ transitionDelay: '0.6s' }}>
              <a href="#contact" className="btn btn-primary">Plan Your Visit</a>
              <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="destination-content">
        <div className="container">
          <div className="destination-layout">
            {/* Left Column - Details */}
            <div className="destination-main">
              {/* Highlights */}
              <div className="content-section reveal">
                <h2>Highlights</h2>
                <ul className="highlights-list">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="highlight-icon">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Major Attractions */}
              <div className="content-section reveal">
                <h2>Major Attractions</h2>
                <div className="attractions-list">
                  {destination.attractions.map((attraction, index) => (
                    <div key={index} className="attraction-item glass-panel">
                      <h4>{attraction.name}</h4>
                      <p>{attraction.description}</p>
                      <span className="attraction-distance">📍 {attraction.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="content-section reveal">
                <h2>Things to Do</h2>
                <div className="activities-tags">
                  {destination.activities.map((activity, index) => (
                    <span key={index} className="activity-tag">{activity}</span>
                  ))}
                </div>
              </div>

              {/* Practical Information */}
              <div className="content-section reveal">
                <h2>Practical Information</h2>
                <div className="practical-info glass-panel">
                  <div className="info-item">
                    <span className="info-icon">🏨</span>
                    <div>
                      <h4>Accommodation</h4>
                      <p>{destination.accommodation}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🍽️</span>
                    <div>
                      <h4>Local Cuisine</h4>
                      <p>{destination.localCuisine}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="destination-sidebar">
              <div className="info-card glass-panel reveal">
                <h3>Quick Info</h3>
                <div className="info-details">
                  <div className="info-detail-item">
                    <span className="detail-icon">⛰️</span>
                    <div>
                      <span className="detail-label">Altitude</span>
                      <span className="detail-value">{destination.altitude}</span>
                    </div>
                  </div>
                  <div className="info-detail-item">
                    <span className="detail-icon">🚗</span>
                    <div>
                      <span className="detail-label">Distance from Leh</span>
                      <span className="detail-value">{destination.distanceFromLeh}</span>
                    </div>
                  </div>
                  <div className="info-detail-item">
                    <span className="detail-icon">📅</span>
                    <div>
                      <span className="detail-label">Best Time to Visit</span>
                      <span className="detail-value">{destination.bestTimeToVisit}</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Plan Your Trip
                </a>
                <p className="info-note">
                  Contact us for customized itineraries and travel arrangements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="related-destinations">
          <div className="container">
            <h2 className="reveal">Explore More Destinations</h2>
            <div className="related-grid">
              {relatedDestinations.map((related, index) => (
                <Link
                  key={related.id}
                  to={`/destinations/${related.id}`}
                  className="related-card reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="related-image">
                    <img src={related.image} alt={related.title} loading="lazy" />
                    <span className="related-tag">{related.tag}</span>
                  </div>
                  <div className="related-content">
                    <h4>{related.title}</h4>
                    <p>{related.subtitle}</p>
                    <span className="related-link">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .destination-detail-page {
          background: var(--bg-app);
        }

        /* Hero Section */
        .destination-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          color: white;
        }

        .destination-hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .destination-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .destination-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(26, 31, 35, 0.7) 0%,
            rgba(26, 31, 35, 0.9) 100%
          );
        }

        .destination-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-top: var(--s-24);
          padding-bottom: var(--s-16);
        }

        .breadcrumb {
          font-size: 0.9rem;
          margin-bottom: var(--s-4);
          opacity: 0.8;
        }

        .breadcrumb a {
          color: white;
          text-decoration: none;
          transition: var(--transition);
        }

        .breadcrumb a:hover {
          color: var(--color-gold);
        }

        .dest-tag {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: var(--s-4);
        }

        .destination-hero h1 {
          font-size: var(--h1);
          margin-bottom: var(--s-3);
        }

        .destination-subtitle {
          font-size: 1.5rem;
          font-family: var(--font-serif);
          font-style: italic;
          opacity: 0.9;
          margin-bottom: var(--s-6);
        }

        .destination-hero-description {
          font-size: 1.2rem;
          line-height: 1.7;
          max-width: 900px;
          margin-bottom: var(--s-12);
          opacity: 0.9;
        }

        .destination-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--s-8);
          margin-bottom: var(--s-12);
        }

        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: var(--s-3);
        }

        .meta-icon {
          font-size: 2rem;
        }

        .meta-label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .meta-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          font-family: var(--font-serif);
        }

        .destination-hero-actions {
          display: flex;
          gap: var(--s-4);
          flex-wrap: wrap;
        }

        /* Main Content */
        .destination-content {
          padding-block: var(--s-24);
        }

        .destination-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: var(--s-16);
          align-items: start;
        }

        .content-section {
          margin-bottom: var(--s-16);
        }

        .content-section h2 {
          font-size: var(--h3);
          margin-bottom: var(--s-8);
          font-family: var(--font-serif);
        }

        .highlights-list {
          list-style: none;
          display: grid;
          gap: var(--s-4);
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--s-3);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .highlight-icon {
          color: var(--accent);
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .attractions-list {
          display: grid;
          gap: var(--s-6);
        }

        .attraction-item {
          padding: var(--s-6);
          border-radius: var(--radius-outer);
        }

        .attraction-item h4 {
          font-size: 1.3rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .attraction-item p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--s-3);
        }

        .attraction-distance {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
        }

        .activities-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--s-3);
        }

        .activity-tag {
          background: var(--bg-alt);
          color: var(--text-main);
          padding: var(--s-3) var(--s-6);
          border-radius: var(--radius-inner);
          font-weight: 600;
          border: 1px solid var(--glass-border);
        }

        .practical-info {
          padding: var(--s-8);
          border-radius: var(--radius-outer);
          display: grid;
          gap: var(--s-8);
        }

        .info-item {
          display: flex;
          gap: var(--s-4);
          align-items: flex-start;
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .info-item p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Info Card */
        .info-card {
          position: sticky;
          top: 100px;
          padding: var(--s-8);
          border-radius: var(--radius-outer);
        }

        .info-card h3 {
          font-size: 1.5rem;
          margin-bottom: var(--s-8);
          font-family: var(--font-serif);
          text-align: center;
        }

        .info-details {
          display: grid;
          gap: var(--s-6);
          margin-bottom: var(--s-8);
        }

        .info-detail-item {
          display: flex;
          align-items: center;
          gap: var(--s-3);
        }

        .detail-icon {
          font-size: 1.5rem;
        }

        .detail-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .detail-value {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .info-note {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: var(--s-4);
          line-height: 1.5;
        }

        /* Related Destinations */
        .related-destinations {
          padding-block: var(--s-24);
          background: var(--bg-alt);
        }

        .related-destinations h2 {
          text-align: center;
          font-size: var(--h2);
          margin-bottom: var(--s-12);
          font-family: var(--font-serif);
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--s-8);
        }

        .related-card {
          background: var(--bg-app);
          border-radius: var(--radius-outer);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .related-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-strong);
        }

        .related-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .related-card:hover .related-image img {
          transform: scale(1.1);
        }

        .related-tag {
          position: absolute;
          top: var(--s-3);
          right: var(--s-3);
          background: var(--accent);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .related-content {
          padding: var(--s-6);
        }

        .related-content h4 {
          font-size: 1.3rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .related-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: var(--s-4);
          font-style: italic;
        }

        .related-link {
          color: var(--accent);
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .destination-layout {
            grid-template-columns: 1fr;
          }

          .info-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .destination-hero {
            min-height: 75vh;
          }

          .destination-hero-meta {
            gap: var(--s-4);
          }

          .destination-hero-actions {
            flex-direction: column;
          }

          .destination-hero-actions .btn {
            width: 100%;
            text-align: center;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DestinationDetailPage;
