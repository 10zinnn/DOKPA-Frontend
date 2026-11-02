import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { tripsData } from '../data/tripsData'

const TripsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const trekkingTrips = tripsData.filter(t => t.categorySlug === 'trekking');
  const peakClimbingTrips = tripsData.filter(t => t.categorySlug === 'peak-climbing');
  const culturalTrips = tripsData.filter(t => t.categorySlug === 'cultural-tours');

  const filterMatches = (trip) => {
    const matchesSearch = searchQuery.trim() === '' ||
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.difficulty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  };

  const renderTripCard = (trip) => (
    <article key={trip.id} className="trip-card reveal">
      <Link to={`/trips/${trip.slug}`} className="trip-card-link">
        <div className="trip-card-image-wrap">
          <img src={trip.image} alt={trip.title} loading="lazy" />
          <div className="trip-card-overlay"></div>
          <span className="trip-category-badge">{trip.categoryIcon} {trip.category}</span>
          <span className="trip-difficulty-badge">{trip.difficulty}</span>
        </div>
        <div className="trip-card-body">
          <div className="trip-meta-row">
            <span className="trip-duration">⏱️ {trip.duration}</span>
            {trip.itineraries.length > 0 && (
              <span className="trip-itinerary-count">📋 {trip.itineraries.length} Days Itinerary</span>
            )}
          </div>
          <h3 className="trip-title">{trip.title}</h3>
          <p className="trip-excerpt">{trip.excerpt}</p>
          
          {trip.highlights && trip.highlights.length > 0 && (
            <div className="trip-highlights-preview">
              <span className="highlights-label">Highlights:</span>
              <ul className="highlights-mini-list">
                {trip.highlights.slice(0, 2).map((h, idx) => (
                  <li key={idx}>✦ {h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="trip-card-footer">
            <span className="view-trip-btn">View Full Itinerary & Details →</span>
          </div>
        </div>
      </Link>
    </article>
  );

  return (
    <div className="trips-page">
      {/* Header */}
      <header className="page-header">
        <div className="container reveal">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <span>Expeditions & Treks</span>
          </div>
          <span className="eyebrow">Himalayan Expeditions</span>
          <h1>Expeditions, Treks & Cultural Journeys</h1>
          <p className="subtitle">
            Authentic mountain journeys inspired by nomadic traditions. From demanding 7,000m summits
            to peaceful trans-Himalayan valley traverses.
          </p>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <div className="trips-filter-bar">
        <div className="container filter-container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Expeditions ({tripsData.length})
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'trekking' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('trekking')}
            >
              🥾 Trekking ({trekkingTrips.length})
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'peak-climbing' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('peak-climbing')}
            >
              🏔️ Peak Climbing ({peakClimbingTrips.length})
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'cultural-tours' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('cultural-tours')}
            >
              🛕 Cultural Tours ({culturalTrips.length})
            </button>
          </div>

          <div className="search-wrap">
            <input
              type="text"
              placeholder="Search by peak, pass, or valley..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="trip-search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </div>

      <div className="container trips-sections-wrapper">
        {/* CONTAINER 1: TREKKING & HIGH PASSES */}
        {(selectedFilter === 'all' || selectedFilter === 'trekking') && (
          <section id="trekking" className="category-section-container reveal">
            <div className="category-container-header">
              <div className="category-badge-wrap">
                <span className="category-icon">🥾</span>
                <span className="category-eyebrow">Wilderness Traverses</span>
              </div>
              <h2>Trekking & High Himalayan Passes</h2>
              <p className="category-desc">
                Immersive foot journeys crossing towering passes, deep glacial gorges, remote nomadic settlements,
                and sacred Buddhist valleys. Thoughtfully paced with safety and acclimatization as top priorities.
              </p>
            </div>

            <div className="trips-grid">
              {trekkingTrips.filter(filterMatches).map(renderTripCard)}
            </div>

            {trekkingTrips.filter(filterMatches).length === 0 && (
              <p className="no-trips-msg">No trekking expeditions match your search.</p>
            )}
          </section>
        )}

        {/* CONTAINER 2: PEAK CLIMBING & MOUNTAINEERING */}
        {(selectedFilter === 'all' || selectedFilter === 'peak-climbing') && (
          <section id="peak-climbing" className="category-section-container reveal">
            <div className="category-container-header">
              <div className="category-badge-wrap">
                <span className="category-icon">🏔️</span>
                <span className="category-eyebrow">High Summits</span>
              </div>
              <h2>Peak Climbing & Mountaineering Expeditions</h2>
              <p className="category-desc">
                Ascend some of the most celebrated peaks of the Indian Himalayas. Led by certified Ladakhi alpine
                mountain guides with full fixed-rope, high-camp, bottled oxygen, and technical equipment support.
              </p>
            </div>

            <div className="trips-grid">
              {peakClimbingTrips.filter(filterMatches).map(renderTripCard)}
            </div>

            {peakClimbingTrips.filter(filterMatches).length === 0 && (
              <p className="no-trips-msg">No mountaineering expeditions match your search.</p>
            )}
          </section>
        )}

        {/* CONTAINER 3: CULTURAL & HERITAGE JOURNEYS */}
        {(selectedFilter === 'all' || selectedFilter === 'cultural-tours') && (
          <section id="cultural-tours" className="category-section-container reveal">
            <div className="category-container-header">
              <div className="category-badge-wrap">
                <span className="category-icon">🛕</span>
                <span className="category-eyebrow">Heritage & Landscapes</span>
              </div>
              <h2>Cultural & Heritage Journeys</h2>
              <p className="category-desc">
                Bespoke overland journeys connecting ancient cliffside monasteries, turquoise high-altitude lakes
                (Pangong, Tso Moriri), the sand dunes of Nubra Valley, and authentic village homestays.
              </p>
            </div>

            <div className="trips-grid">
              {culturalTrips.filter(filterMatches).map(renderTripCard)}
            </div>

            {culturalTrips.filter(filterMatches).length === 0 && (
              <p className="no-trips-msg">No cultural journeys match your search.</p>
            )}
          </section>
        )}

        {/* Bottom Inquiry Banner */}
        <div className="custom-expedition-banner reveal">
          <div className="banner-content">
            <span className="banner-eyebrow">Custom Expeditions</span>
            <h3>Looking for a custom private traverse or peak climb?</h3>
            <p>
              We craft private tailor-made itineraries for individual climbers, families, and specialized groups.
              Tell us your preferred dates and experience level.
            </p>
          </div>
          <div className="banner-cta">
            <a href="/#contact" className="btn btn-primary">Request Custom Itinerary</a>
          </div>
        </div>
      </div>

      <style>{`
        .trips-page {
          background: var(--bg-app);
          min-height: 100vh;
          padding-bottom: var(--s-24);
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
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
        }

        .page-header .container {
          position: relative;
          z-index: 10;
        }

        .breadcrumb {
          margin-bottom: var(--s-4);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .breadcrumb a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition);
        }

        .breadcrumb a:hover {
          color: var(--color-gold);
        }

        .page-header .eyebrow {
          color: var(--color-gold);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 700;
          display: block;
          margin-bottom: var(--s-2);
        }

        .page-header h1 {
          font-size: var(--h1);
          font-family: var(--font-serif);
          margin-bottom: var(--s-4);
          letter-spacing: 0.05em;
        }

        .page-header .subtitle {
          font-size: var(--body);
          color: rgba(255, 255, 255, 0.8);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filter Bar */
        .trips-filter-bar {
          position: sticky;
          top: 68px;
          z-index: 150;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
        }

        .filter-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--s-4);
          flex-wrap: wrap;
        }

        .filter-buttons {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .filter-buttons::-webkit-scrollbar {
          display: none;
        }

        .filter-btn {
          white-space: nowrap;
          padding: 0.6rem 1.25rem;
          border-radius: 99px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn:hover {
          background: var(--bg-alt);
          color: var(--color-gold);
        }

        .filter-btn.active {
          background: var(--color-charcoal);
          color: var(--color-gold);
          border-color: var(--color-gold);
        }

        [data-theme='dark'] .filter-btn.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .search-wrap {
          position: relative;
          min-width: 280px;
        }

        .trip-search-input {
          width: 100%;
          padding: 0.65rem 1.2rem;
          padding-right: 2.2rem;
          border-radius: 99px;
          border: 1px solid var(--glass-border);
          background: var(--bg-alt);
          color: var(--text-main);
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition);
        }

        .trip-search-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }

        .clear-search {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        /* Sections Wrapper */
        .trips-sections-wrapper {
          padding-top: clamp(2.5rem, 5vw, 4rem);
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 6vw, 5rem);
        }

        /* IMPROVED CONTAINER MARGINS & PADDINGS (NO LONGER TIGHTLY PACKED) */
        .category-section-container {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: clamp(2.25rem, 4.5vw, 4rem);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme='light'] .category-section-container,
        :root:not([data-theme='dark']) .category-section-container {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.07);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
        }

        .category-container-header {
          margin-bottom: clamp(1.75rem, 3.5vw, 3rem);
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: clamp(1.25rem, 2.5vw, 2rem);
        }

        .category-badge-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }

        .category-icon {
          font-size: 1.6rem;
        }

        .category-eyebrow {
          color: var(--color-gold);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .category-container-header h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .category-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          max-width: 820px;
          line-height: 1.7;
        }

        /* Trips Grid */
        .trips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: clamp(1.75rem, 3vw, 2.5rem);
        }

        .trip-card {
          background: var(--bg-app);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        [data-theme='light'] .trip-card,
        :root:not([data-theme='dark']) .trip-card {
          background: #F9F8F6;
          border-color: rgba(0, 0, 0, 0.07);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }

        .trip-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
        }

        .trip-card-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .trip-card-image-wrap {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .trip-card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .trip-card:hover .trip-card-image-wrap img {
          transform: scale(1.08);
        }

        .trip-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 60%);
        }

        .trip-category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(26, 31, 35, 0.9);
          backdrop-filter: blur(6px);
          color: var(--color-gold);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .trip-difficulty-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(107, 142, 111, 0.95);
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
        }

        .trip-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.85rem;
        }

        .trip-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .trip-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--text-main);
          margin: 0;
          line-height: 1.35;
          transition: var(--transition);
        }

        .trip-card:hover .trip-title {
          color: var(--color-gold);
        }

        .trip-excerpt {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .trip-highlights-preview {
          margin-top: 0.4rem;
          padding: 0.75rem 1rem;
          background: var(--bg-alt);
          border-radius: 10px;
          border: 1px solid var(--glass-border);
          font-size: 0.85rem;
        }

        [data-theme='light'] .trip-highlights-preview,
        :root:not([data-theme='dark']) .trip-highlights-preview {
          background: #FFFFFF;
        }

        .highlights-label {
          font-weight: 800;
          color: var(--text-main);
          display: block;
          margin-bottom: 0.3rem;
        }

        .highlights-mini-list {
          list-style: none;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          line-height: 1.4;
        }

        .trip-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .view-trip-btn {
          color: var(--color-gold);
          font-weight: 800;
          font-size: 0.9rem;
          display: inline-block;
          transition: var(--transition);
        }

        .trip-card:hover .view-trip-btn {
          transform: translateX(5px);
        }

        .no-trips-msg {
          text-align: center;
          padding: var(--s-8);
          color: var(--text-muted);
        }

        /* Custom Expedition Banner */
        .custom-expedition-banner {
          background: var(--color-charcoal);
          color: white;
          padding: clamp(2.5rem, 5vw, 4rem);
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--s-8);
        }

        .banner-eyebrow {
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.85rem;
          font-weight: 800;
          display: block;
          margin-bottom: var(--s-2);
        }

        .banner-content h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin-bottom: 0.5rem;
        }

        .banner-content p {
          color: rgba(255, 255, 255, 0.75);
          max-width: 620px;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        @media (max-width: 968px) {
          .custom-expedition-banner {
            flex-direction: column;
            text-align: center;
            padding: var(--s-8);
          }
          .filter-container {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
};

export default TripsPage;
