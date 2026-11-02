import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getActivityById, getRelatedActivities } from '../data/activitiesData'
import { tripsData } from '../data/tripsData'

const ActivityDetailPage = () => {
  const { activityId } = useParams();
  const activity = getActivityById(activityId);
  const relatedActivities = getRelatedActivities(activityId);

  // If activity not found, redirect to activities page
  if (!activity) {
    return <Navigate to="/activities" replace />;
  }

  // Get matching migrated trips
  let matchingTrips = [];
  if (activityId === 'trekking') {
    matchingTrips = tripsData.filter(t => t.categorySlug === 'trekking');
  } else if (activityId === 'expeditions') {
    matchingTrips = tripsData.filter(t => t.categorySlug === 'peak-climbing');
  } else if (activityId === 'cultural-tours') {
    matchingTrips = tripsData.filter(t => t.categorySlug === 'cultural-tours');
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
              <Link to="/activities" className="btn btn-secondary activity-hero-sec-btn">View All Activities</Link>
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
              {/* WRAPPED TRIPS CONTAINER FOR TREKKING, EXPEDITIONS, AND CULTURAL TOURS */}
              {matchingTrips.length > 0 && (
                <div className="content-section trips-container-section reveal">
                  <div className="trips-container-header">
                    <span className="sub-badge">Featured Journeys</span>
                    <h2>Available {activity.title} ({matchingTrips.length})</h2>
                    <p className="trips-header-desc">
                      Explore our complete itineraries and mountaineering climbs for {activity.title.toLowerCase()}.
                    </p>
                  </div>

                  <div className="activity-trips-grid">
                    {matchingTrips.map(trip => (
                      <Link key={trip.id} to={`/trips/${trip.slug}`} className="activity-trip-card">
                        <div className="trip-thumb-wrap">
                          <img src={trip.image} alt={trip.title} loading="lazy" />
                          <span className="trip-dur-badge">⏱️ {trip.duration}</span>
                          <span className="trip-diff-badge">{trip.difficulty}</span>
                        </div>
                        <div className="trip-thumb-content">
                          <h4>{trip.title}</h4>
                          <p>{trip.excerpt}</p>
                          <div className="trip-thumb-footer">
                            <span className="itinerary-pill">📋 {trip.itineraries.length} Days Itinerary</span>
                            <span className="view-link">View Details →</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

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
                <h2>Sample Day-by-Day Itinerary</h2>
                <div className="itinerary-list">
                  {activity.itinerary.map((day, index) => (
                    <div key={index} className="itinerary-item">
                      <div className="itinerary-day-badge">Day {day.day}</div>
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
          min-height: 100vh;
        }

        /* Hero Section */
        .activity-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          color: white;
          padding-top: var(--s-24);
          padding-bottom: var(--s-16);
        }

        .activity-hero-image {
          position: absolute;
          inset: 0;
          z-index: 1;
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
          z-index: 2;
          width: 100%;
        }

        .breadcrumb {
          display: flex;
          gap: var(--s-2);
          margin-bottom: var(--s-4);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
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
          font-size: 3.5rem;
          margin-bottom: var(--s-4);
        }

        .activity-hero h1 {
          font-size: var(--h1);
          margin-bottom: var(--s-4);
          font-family: var(--font-serif);
        }

        .activity-hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 800px;
          margin-bottom: var(--s-8);
          color: rgba(255, 255, 255, 0.9);
        }

        .activity-hero-meta {
          display: flex;
          gap: var(--s-8);
          margin-bottom: var(--s-8);
          flex-wrap: wrap;
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
          color: var(--color-gold);
          font-weight: 700;
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

        /* FIX 1: HERO SECONDARY BUTTON HIGH CONTRAST IN LIGHT MODE */
        .activity-hero-actions .activity-hero-sec-btn {
          color: #FFFFFF !important;
          background: rgba(255, 255, 255, 0.16) !important;
          border: 2px solid rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(10px);
          font-weight: 700;
          opacity: 1 !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .activity-hero-actions .activity-hero-sec-btn:hover {
          background: #FFFFFF !important;
          color: #1A1F23 !important;
          border-color: #FFFFFF !important;
        }

        /* Main Content - IMPROVED PADDING & SPACING */
        .activity-content {
          padding-block: clamp(3rem, 5vw, 5rem);
        }

        .activity-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: clamp(2.5rem, 4.5vw, 4.5rem);
          align-items: start;
        }

        .activity-main {
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 4vw, 3.5rem);
        }

        .content-section {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: clamp(2rem, 4vw, 3.5rem);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }

        [data-theme='light'] .content-section,
        :root:not([data-theme='dark']) .content-section {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.07);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
        }

        .content-section h2 {
          font-size: var(--h3);
          margin-bottom: var(--s-6);
          font-family: var(--font-serif);
          color: var(--text-main);
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: var(--s-4);
        }

        /* WRAPPED TRIPS CONTAINER */
        .trips-container-section {
          border-top: 4px solid var(--color-gold);
        }

        .trips-container-header {
          margin-bottom: var(--s-6);
        }

        .sub-badge {
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 800;
          color: var(--color-gold);
          margin-bottom: var(--s-2);
        }

        .trips-header-desc {
          color: var(--text-muted);
          font-size: 1rem;
          margin-top: 0.3rem;
        }

        .activity-trips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .activity-trip-card {
          background: var(--bg-app);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        [data-theme='light'] .activity-trip-card,
        :root:not([data-theme='dark']) .activity-trip-card {
          background: #F9F8F6;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .activity-trip-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-gold);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
        }

        .trip-thumb-wrap {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .trip-thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .activity-trip-card:hover .trip-thumb-wrap img {
          transform: scale(1.08);
        }

        .trip-dur-badge {
          position: absolute;
          bottom: 0.8rem;
          left: 0.8rem;
          background: rgba(26, 31, 35, 0.85);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
        }

        .trip-diff-badge {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          background: rgba(107, 142, 111, 0.95);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
        }

        .trip-thumb-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.6rem;
        }

        .trip-thumb-content h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-main);
          margin: 0;
          line-height: 1.35;
        }

        .trip-thumb-content p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .trip-thumb-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid var(--glass-border);
          font-size: 0.85rem;
        }

        .itinerary-pill {
          color: var(--text-muted);
          font-weight: 600;
        }

        .view-link {
          color: var(--color-gold);
          font-weight: 800;
        }

        /* Highlights */
        .highlights-list {
          list-style: none;
          display: grid;
          gap: 1rem;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--s-3);
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-main);
        }

        .highlight-icon {
          color: var(--color-gold);
          font-weight: 800;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* FIX 2: DAY-BY-DAY ITINERARY BUTTON CRISP CONTRAST IN LIGHT MODE */
        .itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .itinerary-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--bg-app);
          border-radius: 14px;
          border: 1px solid var(--glass-border);
          border-left: 4px solid var(--color-gold);
        }

        [data-theme='light'] .itinerary-item,
        :root:not([data-theme='dark']) .itinerary-item {
          background: #F9F8F6;
          border-color: rgba(0, 0, 0, 0.08);
          border-left: 4px solid var(--color-gold);
        }

        .itinerary-day-badge {
          background: var(--color-charcoal);
          color: var(--color-gold);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          white-space: nowrap;
          border: 1.5px solid var(--color-gold);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          opacity: 1 !important;
          flex-shrink: 0;
        }

        .itinerary-content h4 {
          font-size: 1.25rem;
          margin-bottom: 0.4rem;
          font-family: var(--font-serif);
          color: var(--text-main);
          font-weight: 700;
        }

        .itinerary-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        .included-list {
          list-style: none;
          display: grid;
          gap: 0.85rem;
        }

        .included-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--s-3);
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-main);
        }

        .included-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          font-size: 1.1rem;
        }

        /* Booking Card */
        .booking-card {
          position: sticky;
          top: 100px;
          padding: clamp(2rem, 3.5vw, 2.75rem);
          border-radius: 20px;
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme='light'] .booking-card,
        :root:not([data-theme='dark']) .booking-card {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
        }

        .booking-price {
          text-align: center;
          padding-bottom: var(--s-6);
          border-bottom: 1px solid var(--glass-border);
          margin-bottom: var(--s-6);
        }

        .price-label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: var(--s-2);
        }

        .price-amount {
          display: block;
          font-size: 2.75rem;
          font-weight: 800;
          font-family: var(--font-serif);
          color: var(--color-gold);
        }

        .price-per {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .booking-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
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
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .detail-value {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .booking-note {
          font-size: 0.8rem;
          text-align: center;
          color: var(--text-muted);
          margin-top: var(--s-4);
          line-height: 1.4;
        }

        /* Related Activities */
        .related-activities {
          padding-block: clamp(3rem, 5vw, 5rem);
          border-top: 1px solid var(--glass-border);
        }

        .related-activities h2 {
          font-size: var(--h2);
          margin-bottom: var(--s-12);
          text-align: center;
          font-family: var(--font-serif);
          color: var(--text-main);
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }

        .related-card {
          background: var(--bg-alt);
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: var(--transition);
          border: 1px solid var(--glass-border);
        }

        [data-theme='light'] .related-card,
        :root:not([data-theme='dark']) .related-card {
          background: #FFFFFF;
        }

        .related-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-gold);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .related-image {
          position: relative;
          height: 200px;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .related-icon {
          position: absolute;
          top: var(--s-3);
          right: var(--s-3);
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        [data-theme='dark'] .related-icon {
          background: rgba(26, 31, 35, 0.95);
        }

        .related-content {
          padding: 1.5rem;
        }

        .related-content h4 {
          font-size: 1.35rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
          color: var(--text-main);
        }

        .related-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--s-4);
        }

        .related-link {
          color: var(--color-gold);
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .activity-layout {
            grid-template-columns: 1fr;
          }
          .activity-hero-meta {
            gap: var(--s-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityDetailPage;
