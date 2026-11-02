import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { tripsData } from '../data/tripsData'

const FeaturedTrips = () => {
  const [activeCategory, setActiveCategory] = useState('trekking');

  const trekkingTrips = tripsData.filter(t => t.categorySlug === 'trekking').slice(0, 3);
  const peakClimbingTrips = tripsData.filter(t => t.categorySlug === 'peak-climbing').slice(0, 3);
  const culturalTrips = tripsData.filter(t => t.categorySlug === 'cultural-tours').slice(0, 3);

  const displayedTrips = activeCategory === 'trekking' 
    ? trekkingTrips 
    : activeCategory === 'peak-climbing' 
      ? peakClimbingTrips 
      : culturalTrips;

  return (
    <section id="expeditions" className="featured-trips-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Himalayan Journeys</span>
          <h2 className="section-title-alt">Curated Expeditions & Treks</h2>
          <p className="section-intro">
            Thoughtfully planned with local expertise, optimal acclimatization schedules,
            and respect for nomadic traditions.
          </p>

          {/* Category Tabs */}
          <div className="trip-tabs">
            <button
              className={`trip-tab-btn ${activeCategory === 'trekking' ? 'active' : ''}`}
              onClick={() => setActiveCategory('trekking')}
            >
              <span>🥾</span> Trekking
            </button>
            <button
              className={`trip-tab-btn ${activeCategory === 'peak-climbing' ? 'active' : ''}`}
              onClick={() => setActiveCategory('peak-climbing')}
            >
              <span>🏔️</span> Peak Climbing
            </button>
            <button
              className={`trip-tab-btn ${activeCategory === 'cultural-tours' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cultural-tours')}
            >
              <span>🛕</span> Cultural Tours
            </button>
          </div>
        </div>

        {/* Category Container */}
        <div className="featured-category-container reveal">
          <div className="container-intro-bar">
            {activeCategory === 'trekking' && (
              <div>
                <h3>🥾 Trekking & High Passes</h3>
                <p>Traverse pristine high-altitude valleys, cross legendary passes, and walk through ancient nomadic pastures.</p>
              </div>
            )}
            {activeCategory === 'peak-climbing' && (
              <div>
                <h3>🏔️ Peak Climbing & Mountaineering</h3>
                <p>Ascend towering peaks from 6,000m to 7,000m guided by certified local Himalayan alpinists.</p>
              </div>
            )}
            {activeCategory === 'cultural-tours' && (
              <div>
                <h3>🛕 Cultural & Heritage Journeys</h3>
                <p>Immerse yourself in centuries-old Buddhist monasteries, village homestays, and high mountain lakes.</p>
              </div>
            )}
            <Link to="/trips" className="explore-all-link">View All in {activeCategory === 'trekking' ? 'Trekking' : activeCategory === 'peak-climbing' ? 'Climbing' : 'Culture'} →</Link>
          </div>

          <div className="trips-showcase-grid">
            {displayedTrips.map(trip => (
              <div key={trip.id} className="showcase-card">
                <Link to={`/trips/${trip.slug}`}>
                  <div className="showcase-image-wrap">
                    <img src={trip.image} alt={trip.title} loading="lazy" />
                    <span className="showcase-difficulty">{trip.difficulty}</span>
                    <span className="showcase-duration">{trip.duration}</span>
                  </div>
                  <div className="showcase-body">
                    <h4>{trip.title}</h4>
                    <p>{trip.excerpt}</p>
                    <div className="showcase-footer">
                      <span className="itinerary-tag">{trip.itineraries.length} Days Itinerary</span>
                      <span className="arrow-link">Explore →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta reveal" style={{ marginTop: 'var(--s-12)', textAlign: 'center' }}>
          <Link to="/trips" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}>
            Browse All 13 Expeditions & Treks →
          </Link>
        </div>
      </div>

      <style>{`
        .featured-trips-section {
          padding: var(--s-24) 0;
          background: var(--bg-app);
          border-top: 1px solid var(--glass-border);
        }

        .trip-tabs {
          display: flex;
          justify-content: center;
          gap: var(--s-3);
          margin-top: var(--s-8);
          flex-wrap: wrap;
        }

        .trip-tab-btn {
          padding: 0.6rem 1.4rem;
          border-radius: 99px;
          border: 1px solid var(--glass-border);
          background: var(--bg-alt);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .trip-tab-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        .trip-tab-btn.active {
          background: var(--color-charcoal);
          color: var(--color-gold);
          border-color: var(--color-gold);
        }

        [data-theme='dark'] .trip-tab-btn.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .featured-category-container {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-inner, 16px);
          padding: var(--s-8);
          margin-top: var(--s-10);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .container-intro-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: var(--s-6);
          margin-bottom: var(--s-8);
          flex-wrap: wrap;
          gap: var(--s-4);
        }

        .container-intro-bar h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 0.3rem;
        }

        .container-intro-bar p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 650px;
        }

        .explore-all-link {
          color: var(--color-gold);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .trips-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--s-8);
        }

        .showcase-card {
          background: var(--bg-app);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-inner, 14px);
          overflow: hidden;
          transition: var(--transition);
        }

        .showcase-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-gold);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .showcase-card a {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .showcase-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .showcase-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .showcase-card:hover .showcase-image-wrap img {
          transform: scale(1.06);
        }

        .showcase-difficulty {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(26, 31, 35, 0.85);
          color: var(--color-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
        }

        .showcase-duration {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(107, 142, 111, 0.9);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
        }

        .showcase-body {
          padding: var(--s-6);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .showcase-body h4 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: var(--s-3);
          line-height: 1.35;
        }

        .showcase-body p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--s-6);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .showcase-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--s-3);
          border-top: 1px solid var(--glass-border);
          font-size: 0.85rem;
        }

        .itinerary-tag {
          color: var(--text-muted);
          font-weight: 600;
        }

        .arrow-link {
          color: var(--color-gold);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default FeaturedTrips;
