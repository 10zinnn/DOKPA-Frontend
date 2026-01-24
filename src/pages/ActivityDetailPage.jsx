import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getActivityById, getRelatedActivities } from '../data/activitiesData'

const ActivityDetailPage = () => {
  const { activityId } = useParams();
  const activity = getActivityById(activityId);
  const relatedActivities = getRelatedActivities(activityId);

  // If activity not found, redirect to activities page
  if (!activity) {
    return <Navigate to="/activities" replace />;
  }

  return (
    <div className="activity-detail-page">
      {/* Hero Section */}
      <section className="activity-hero">
        <div className="activity-hero-image">
          <img src={activity.image} alt={activity.title} />
          <div className="activity-hero-overlay"></div>
        </div>
        <div className="activity-hero-content">
          <div className="container">
            <div className="breadcrumb reveal">
              <Link to="/">Home</Link>
              <span> / </span>
              <Link to="/activities">Activities</Link>
              <span> / </span>
              <span>{activity.title}</span>
            </div>
            <div className="activity-hero-icon reveal" style={{ transitionDelay: '0.1s' }}>
              {activity.icon}
            </div>
            <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>{activity.title}</h1>
            <p className="activity-hero-description reveal" style={{ transitionDelay: '0.3s' }}>
              {activity.fullDescription}
            </p>
            <div className="activity-hero-meta reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="hero-meta-item">
                <span className="meta-label">Difficulty</span>
                <span className="meta-value">{activity.difficulty}</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Season</span>
                <span className="meta-value">{activity.season}</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{activity.duration}</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Group Size</span>
                <span className="meta-value">{activity.groupSize}</span>
              </div>
            </div>
            <div className="activity-hero-actions reveal" style={{ transitionDelay: '0.5s' }}>
              <a href="#contact" className="btn btn-primary">Book This Activity</a>
              <Link to="/activities" className="btn btn-secondary">View All Activities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="activity-content">
        <div className="container">
          <div className="activity-layout">
            {/* Left Column - Details */}
            <div className="activity-main">
              {/* Highlights */}
              <div className="content-section reveal">
                <h2>Highlights</h2>
                <ul className="highlights-list">
                  {activity.highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="highlight-icon">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="content-section reveal">
                <h2>Sample Itinerary</h2>
                <div className="itinerary-list">
                  {activity.itinerary.map((day, index) => (
                    <div key={index} className="itinerary-item">
                      <div className="itinerary-day">Day {day.day}</div>
                      <div className="itinerary-content">
                        <h4>{day.title}</h4>
                        <p>{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="content-section reveal">
                <h2>What's Included</h2>
                <ul className="included-list">
                  {activity.included.map((item, index) => (
                    <li key={index}>
                      <span className="included-icon">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="activity-sidebar">
              <div className="booking-card glass-panel reveal">
                <div className="booking-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">
                    ₹{activity.pricing.group.toLocaleString()}
                  </span>
                  <span className="price-per">per person</span>
                </div>
                <div className="booking-details">
                  <div className="booking-detail-item">
                    <span className="detail-icon">⏱️</span>
                    <div>
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{activity.duration}</span>
                    </div>
                  </div>
                  <div className="booking-detail-item">
                    <span className="detail-icon">👥</span>
                    <div>
                      <span className="detail-label">Group Size</span>
                      <span className="detail-value">{activity.groupSize}</span>
                    </div>
                  </div>
                  <div className="booking-detail-item">
                    <span className="detail-icon">📅</span>
                    <div>
                      <span className="detail-label">Best Season</span>
                      <span className="detail-value">{activity.season}</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Book Now
                </a>
                <p className="booking-note">
                  Contact us for custom itineraries and group bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <section className="related-activities">
          <div className="container">
            <h2 className="reveal">You Might Also Like</h2>
            <div className="related-grid">
              {relatedActivities.map((related, index) => (
                <Link
                  key={related.id}
                  to={`/activities/${related.id}`}
                  className="related-card reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="related-image">
                    <img src={related.image} alt={related.title} loading="lazy" />
                    <div className="related-icon">{related.icon}</div>
                  </div>
                  <div className="related-content">
                    <h4>{related.title}</h4>
                    <p>{related.shortDescription}</p>
                    <span className="related-link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .activity-detail-page {
          background: var(--bg-app);
        }

        /* Hero Section */
        .activity-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          color: white;
        }

        .activity-hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .activity-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .activity-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(26, 31, 35, 0.7) 0%,
            rgba(26, 31, 35, 0.9) 100%
          );
        }

        .activity-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-top: var(--s-24);
          padding-bottom: var(--s-16);
        }

        .breadcrumb {
          font-size: 0.9rem;
          margin-bottom: var(--s-6);
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

        .activity-hero-icon {
          font-size: 4rem;
          margin-bottom: var(--s-4);
        }

        .activity-hero h1 {
          font-size: var(--h1);
          margin-bottom: var(--s-6);
        }

        .activity-hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          max-width: 800px;
          margin-bottom: var(--s-12);
          opacity: 0.9;
        }

        .activity-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--s-6);
          margin-bottom: var(--s-12);
        }

        .hero-meta-item {
          display: flex;
          flex-direction: column;
          gap: var(--s-1);
        }

        .meta-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .meta-value {
          font-size: 1.1rem;
          font-weight: 700;
          font-family: var(--font-serif);
        }

        .activity-hero-actions {
          display: flex;
          gap: var(--s-4);
          flex-wrap: wrap;
        }

        /* Main Content */
        .activity-content {
          padding-block: var(--s-24);
        }

        .activity-layout {
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

        .itinerary-list {
          display: grid;
          gap: var(--s-8);
        }

        .itinerary-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: var(--s-6);
          padding: var(--s-6);
          background: var(--bg-alt);
          border-radius: var(--radius-outer);
          border-left: 4px solid var(--accent);
        }

        .itinerary-day {
          font-weight: 700;
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 1.1rem;
        }

        .itinerary-content h4 {
          font-size: 1.2rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .itinerary-content p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .included-list {
          list-style: none;
          display: grid;
          gap: var(--s-3);
        }

        .included-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--s-3);
          font-size: 1rem;
          line-height: 1.6;
        }

        .included-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        /* Booking Card */
        .booking-card {
          position: sticky;
          top: 100px;
          padding: var(--s-8);
          border-radius: var(--radius-outer);
        }

        .booking-price {
          text-align: center;
          padding-bottom: var(--s-8);
          border-bottom: 1px solid var(--glass-border);
          margin-bottom: var(--s-8);
        }

        .price-label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: var(--s-2);
        }

        .price-amount {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          font-family: var(--font-serif);
          color: var(--accent);
          line-height: 1;
          margin-bottom: var(--s-2);
        }

        .price-per {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .booking-details {
          display: grid;
          gap: var(--s-4);
          margin-bottom: var(--s-8);
        }

        .booking-detail-item {
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

        .booking-note {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: var(--s-4);
          line-height: 1.5;
        }

        /* Related Activities */
        .related-activities {
          padding-block: var(--s-24);
          background: var(--bg-alt);
        }

        .related-activities h2 {
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
          height: 200px;
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

        .related-icon {
          position: absolute;
          top: var(--s-3);
          right: var(--s-3);
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        [data-theme='dark'] .related-icon {
          background: rgba(26, 31, 35, 0.95);
        }

        .related-content {
          padding: var(--s-6);
        }

        .related-content h4 {
          font-size: 1.25rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .related-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: var(--s-4);
        }

        .related-link {
          color: var(--accent);
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .activity-layout {
            grid-template-columns: 1fr;
          }

          .booking-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .activity-hero {
            min-height: 70vh;
          }

          .activity-hero-icon {
            font-size: 3rem;
          }

          .activity-hero-meta {
            gap: var(--s-4);
          }

          .activity-hero-actions {
            flex-direction: column;
          }

          .activity-hero-actions .btn {
            width: 100%;
            text-align: center;
          }

          .itinerary-item {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityDetailPage;
