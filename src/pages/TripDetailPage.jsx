import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getTripBySlugOrId, getRelatedTrips } from '../data/tripsData'

const TripDetailPage = () => {
  const { tripSlug } = useParams();
  const trip = getTripBySlugOrId(tripSlug);
  const relatedTrips = getRelatedTrips(tripSlug, 3);

  const [activeDay, setActiveDay] = useState(0); // first day open by default

  if (!trip) {
    return <Navigate to="/trips" replace />;
  }

  const toggleDay = (idx) => {
    setActiveDay(activeDay === idx ? null : idx);
  };

  return (
    <div className="trip-detail-page">
      {/* Hero Header */}
      <section className="trip-hero">
        <div className="trip-hero-image-wrap">
          <img src={trip.image} alt={trip.title} />
          <div className="trip-hero-overlay"></div>
        </div>

        <div className="container trip-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/trips">Expeditions</Link>
            <span> / </span>
            <span>{trip.title}</span>
          </div>

          <div className="trip-badges-row reveal">
            <span className="badge category-badge">{trip.categoryIcon} {trip.category}</span>
            <span className="badge difficulty-badge">{trip.difficulty}</span>
          </div>

          <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>{trip.title}</h1>
          
          <p className="trip-hero-lead reveal" style={{ transitionDelay: '0.2s' }}>
            {trip.excerpt}
          </p>

          <div className="trip-key-stats reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="stat-item">
              <span className="stat-label">Duration</span>
              <span className="stat-val">{trip.duration}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Difficulty</span>
              <span className="stat-val">{trip.difficulty}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Itinerary</span>
              <span className="stat-val">{trip.itineraries.length} Days Detailed</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Guidance</span>
              <span className="stat-val">100% Native Mountain Leaders</span>
            </div>
          </div>

          <div className="hero-cta-row reveal" style={{ transitionDelay: '0.4s' }}>
            <a href="#inquiry" className="btn btn-primary">Book / Inquire About This Trip</a>
            <a href="#itinerary" className="btn btn-secondary day-by-day-hero-btn">View Day-by-Day Itinerary</a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container trip-layout">
        <main className="trip-main-content">
          {/* CONTAINER 1: OVERVIEW */}
          <section className="detail-container overview-container reveal">
            <div className="container-heading">
              <span className="sub-badge">About The Journey</span>
              <h2>Expedition Overview</h2>
            </div>
            <div className="overview-text">
              {trip.overview.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* CONTAINER 2: HIGHLIGHTS */}
          {trip.highlights && trip.highlights.length > 0 && (
            <section className="detail-container highlights-container reveal">
              <div className="container-heading">
                <span className="sub-badge">Key Features</span>
                <h2>Expedition Highlights</h2>
              </div>
              <ul className="highlights-grid">
                {trip.highlights.map((h, idx) => (
                  <li key={idx} className="highlight-item">
                    <span className="highlight-star">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CONTAINER 3: DAY-BY-DAY ITINERARY */}
          {trip.itineraries && trip.itineraries.length > 0 && (
            <section id="itinerary" className="detail-container itinerary-container reveal">
              <div className="container-heading">
                <span className="sub-badge">Daily Schedule</span>
                <h2>Detailed Day-by-Day Itinerary</h2>
                <p className="itinerary-intro">
                  Paced for safe acclimatization, optimal recovery, and deep connection with the high Himalayas.
                </p>
              </div>

              <div className="itinerary-timeline">
                {trip.itineraries.map((it, idx) => {
                  const isOpen = activeDay === idx;
                  return (
                    <div
                      key={idx}
                      className={`itinerary-step ${isOpen ? 'open' : ''}`}
                    >
                      <button 
                        type="button"
                        className="itinerary-step-header" 
                        onClick={() => toggleDay(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="day-number-badge">Day {it.day}</span>
                        <div className="step-title-wrap">
                          <h4>{it.title}</h4>
                        </div>
                        <span className="toggle-indicator">
                          {isOpen ? '▲' : '▼'}
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className="itinerary-step-body">
                          {it.description.split('\n\n').map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CONTAINER 4: INCLUSIONS & EXCLUSIONS */}
          <section className="detail-container cost-container reveal">
            <div className="container-heading">
              <span className="sub-badge">Fair Transparency</span>
              <h2>What's Included & Excluded</h2>
            </div>

            <div className="cost-split-grid">
              {/* Inclusions */}
              <div className="cost-box inclusions-box">
                <div className="cost-box-header">
                  <span className="cost-icon">✓</span>
                  <h3>Included in Trip Cost</h3>
                </div>
                <ul className="cost-list">
                  {trip.inclusions.length > 0 ? (
                    trip.inclusions.map((inc, idx) => (
                      <li key={idx}>
                        <span className="icon-check">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li><span className="icon-check">✓</span> Certified local mountain guides & support crew</li>
                      <li><span className="icon-check">✓</span> All expedition camping equipment & high-altitude tents</li>
                      <li><span className="icon-check">✓</span> Wholesome nutritious meals prepared by camp cooks</li>
                      <li><span className="icon-check">✓</span> All wildlife, peak climbing, and inner-line permits</li>
                      <li><span className="icon-check">✓</span> Emergency medical oxygen & first-aid support</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="cost-box exclusions-box">
                <div className="cost-box-header">
                  <span className="cost-icon cross">✕</span>
                  <h3>Excluded from Trip Cost</h3>
                </div>
                <ul className="cost-list">
                  {trip.exclusions.length > 0 ? (
                    trip.exclusions.map((exc, idx) => (
                      <li key={idx}>
                        <span className="icon-cross">✕</span>
                        <span>{exc}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li><span className="icon-cross">✕</span> Flights to and from Leh</li>
                      <li><span className="icon-cross">✕</span> Personal clothing, trekking boots & sleeping bags</li>
                      <li><span className="icon-cross">✕</span> High-altitude travel & medical evacuation insurance</li>
                      <li><span className="icon-cross">✕</span> Personal expenses, tips, and drinks outside meals</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* CONTAINER 5: PHOTO GALLERY */}
          {trip.gallery && trip.gallery.length > 0 && (
            <section className="detail-container gallery-container reveal">
              <div className="container-heading">
                <span className="sub-badge">Trail Dispatches</span>
                <h2>Expedition Photo Gallery</h2>
              </div>
              <div className="trip-gallery-grid">
                {trip.gallery.map((g, idx) => (
                  <div key={idx} className="gallery-photo-card">
                    <img src={g.url} alt={g.alt || trip.title} loading="lazy" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CONTAINER 6: INQUIRY FORM */}
          <section id="inquiry" className="detail-container inquiry-section reveal">
            <div className="inquiry-card">
              <span className="sub-badge">Direct Booking & Inquiry</span>
              <h2>Plan Your Journey: {trip.title}</h2>
              <p className="inquiry-lead">
                Have questions about fitness requirements, acclimatization, or customized group dates?
                Send us a message and our lead guide will respond within 24 hours.
              </p>
              
              <form 
                className="inquiry-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Your inquiry for ${trip.title} has been received. Our expedition leaders will contact you shortly.`);
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input type="tel" placeholder="+91 99060 00000" required />
                  </div>
                  <div className="form-group">
                    <label>Approximate Travel Date</label>
                    <input type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Group Size / Number of Trekkers</label>
                  <select defaultValue="2">
                    <option value="1">Solo Explorer (1 Person)</option>
                    <option value="2">2 Persons</option>
                    <option value="3-5">Small Group (3-5 Persons)</option>
                    <option value="6+">Large Team (6+ Persons)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Questions, Dietary Needs or Mountaineering Experience</label>
                  <textarea rows="4" placeholder="Tell us about your previous high-altitude experience or any specific requests..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-inquiry-btn">
                  Submit Expedition Inquiry
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* SIDEBAR */}
        <aside className="trip-sidebar">
          <div className="sidebar-card quick-book-card">
            <h4>Ready to Explore?</h4>
            <div className="sidebar-meta-list">
              <div className="sidebar-meta-item">
                <span className="label">Activity:</span>
                <span className="value">{trip.category}</span>
              </div>
              <div className="sidebar-meta-item">
                <span className="label">Duration:</span>
                <span className="value">{trip.duration}</span>
              </div>
              <div className="sidebar-meta-item">
                <span className="label">Difficulty:</span>
                <span className="value">{trip.difficulty}</span>
              </div>
              <div className="sidebar-meta-item">
                <span className="label">Location:</span>
                <span className="value">Ladakh, Himalayas</span>
              </div>
            </div>

            <a href="#inquiry" className="btn btn-primary btn-block">Inquire About Dates</a>
          </div>

          <div className="sidebar-card info-guidance-card">
            <h4>High-Altitude Guidance</h4>
            <p>Read our comprehensive field manual on acclimatization, gear lists, and border permits before your journey.</p>
            <ul className="sidebar-guide-links">
              <li><Link to="/general-info#acclimatization">🏔️ Acclimatization Rules</Link></li>
              <li><Link to="/general-info#packing">🎒 Packing & Layering Guide</Link></li>
              <li><Link to="/general-info#permits">📄 Inner Line Permits</Link></li>
              <li><Link to="/blog">📖 Trail Stories & Blog</Link></li>
            </ul>
          </div>

          <div className="sidebar-card dokpa-promise-card">
            <h4>The Dokpa Promise</h4>
            <p className="promise-quote">
              "Guidance over risk, experience over speed, connection over convenience."
            </p>
            <span className="promise-tag">100% Local Sherpa & Ladakhi Guides</span>
          </div>
        </aside>
      </div>

      {/* RELATED EXPEDITIONS */}
      {relatedTrips.length > 0 && (
        <section className="related-trips-section">
          <div className="container">
            <div className="related-trips-header">
              <div>
                <span className="sub-badge">More Journeys</span>
                <h3>Similar {trip.category} Expeditions</h3>
              </div>
              <Link to="/trips" className="view-all-link">Browse All Expeditions →</Link>
            </div>

            <div className="related-trips-grid">
              {relatedTrips.map(rel => (
                <div key={rel.id} className="related-trip-card">
                  <Link to={`/trips/${rel.slug}`}>
                    <div className="related-image-wrap">
                      <img src={rel.image} alt={rel.title} loading="lazy" />
                      <span className="related-badge">{rel.difficulty}</span>
                    </div>
                    <div className="related-card-body">
                      <span className="related-dur">⏱️ {rel.duration}</span>
                      <h4>{rel.title}</h4>
                      <p>{rel.excerpt}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .trip-detail-page {
          background: var(--bg-app);
          min-height: 100vh;
          padding-bottom: var(--s-24);
        }

        /* Hero */
        .trip-hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          color: white;
          padding-top: var(--s-24);
          padding-bottom: var(--s-16);
          overflow: hidden;
        }

        .trip-hero-image-wrap {
          position: absolute;
          inset: 0;
        }

        .trip-hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .trip-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(26, 31, 35, 0.7) 0%, rgba(26, 31, 35, 0.95) 100%);
        }

        .trip-hero-content {
          position: relative;
          z-index: 10;
        }

        .breadcrumb {
          margin-bottom: var(--s-4);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .breadcrumb a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: var(--transition);
        }

        .breadcrumb a:hover {
          color: var(--color-gold);
        }

        .trip-badges-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: var(--s-4);
        }

        .badge {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .category-badge {
          background: rgba(212, 175, 55, 0.2);
          color: var(--color-gold);
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .difficulty-badge {
          background: rgba(107, 142, 111, 0.3);
          color: var(--color-sage-light);
          border: 1px solid var(--color-sage);
        }

        .trip-hero h1 {
          font-size: var(--h1);
          font-family: var(--font-serif);
          max-width: 900px;
          margin-bottom: var(--s-4);
          line-height: 1.2;
        }

        .trip-hero-lead {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 780px;
          line-height: 1.6;
          margin-bottom: var(--s-8);
        }

        .trip-key-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--s-4);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-inner, 12px);
          padding: var(--s-4) var(--s-6);
          margin-bottom: var(--s-8);
          max-width: 850px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold);
          font-weight: 700;
        }

        .stat-val {
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .hero-cta-row {
          display: flex;
          gap: var(--s-4);
          flex-wrap: wrap;
        }

        /* FIX 1: DAY-BY-DAY HERO BUTTON HIGH CONTRAST & VISIBILITY IN LIGHT MODE */
        .trip-hero .btn-secondary.day-by-day-hero-btn {
          color: #FFFFFF !important;
          background: rgba(255, 255, 255, 0.16) !important;
          border: 2px solid rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(12px);
          font-weight: 700 !important;
          opacity: 1 !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .trip-hero .btn-secondary.day-by-day-hero-btn:hover {
          background: #FFFFFF !important;
          color: #1A1F23 !important;
          border-color: #FFFFFF !important;
          text-shadow: none;
          transform: translateY(-2px);
        }

        /* FIX 3: GENEROUS PADDING AND MARGINS (NO LONGER TIGHTLY PACKED) */
        .trip-layout {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: clamp(2.5rem, 4vw, 4.5rem);
          margin-top: clamp(3rem, 5vw, 5rem);
          margin-bottom: clamp(3rem, 5vw, 5rem);
        }

        .trip-main-content {
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 4.5vw, 4rem);
        }

        /* Spacious Containers */
        .detail-container {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: 22px;
          padding: clamp(2.25rem, 4.5vw, 4rem);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          transition: var(--transition);
        }

        [data-theme='light'] .detail-container,
        :root:not([data-theme='dark']) .detail-container {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.07);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
        }

        .container-heading {
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: clamp(1rem, 2vw, 1.5rem);
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

        .container-heading h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .overview-text {
          font-size: 1.1rem;
          line-height: 1.85;
          color: var(--text-main);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Highlights */
        .highlights-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-app);
          padding: 1.25rem 1.5rem;
          border-radius: 14px;
          border: 1px solid var(--glass-border);
          font-size: 1rem;
          color: var(--text-main);
          line-height: 1.6;
        }

        [data-theme='light'] .highlight-item,
        :root:not([data-theme='dark']) .highlight-item {
          background: #F9F8F6;
        }

        .highlight-star {
          color: var(--color-gold);
          font-weight: bold;
          font-size: 1.1rem;
        }

        /* FIX 2: DAY-BY-DAY ITINERARY BUTTONS FULL OPACITY & CLEAR VISIBILITY */
        .itinerary-intro {
          color: var(--text-muted);
          font-size: 1rem;
          margin-top: 0.4rem;
          line-height: 1.6;
        }

        .itinerary-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: clamp(1.5rem, 2.5vw, 2.5rem);
        }

        .itinerary-step {
          background: var(--bg-app);
          border: 1.5px solid var(--glass-border);
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition);
        }

        [data-theme='light'] .itinerary-step,
        :root:not([data-theme='dark']) .itinerary-step {
          background: #F9F8F6;
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .itinerary-step.open {
          border-color: var(--color-gold);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.15);
        }

        .itinerary-step-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.75rem;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          transition: var(--transition);
        }

        .itinerary-step-header:hover {
          background: rgba(212, 175, 55, 0.08);
        }

        .day-number-badge {
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

        .step-title-wrap {
          flex-grow: 1;
        }

        .step-title-wrap h4 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--text-main);
          margin: 0;
          font-weight: 700;
          opacity: 1 !important;
        }

        .toggle-indicator {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-main);
          flex-shrink: 0;
          transition: var(--transition);
          opacity: 1 !important;
        }

        .itinerary-step.open .toggle-indicator {
          background: var(--color-gold);
          color: var(--color-charcoal);
          border-color: var(--color-gold);
        }

        .itinerary-step-body {
          padding: clamp(1.5rem, 3vw, 2.25rem) clamp(1.75rem, 3.5vw, 2.5rem);
          border-top: 1px solid var(--glass-border);
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--text-main);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.4);
        }

        [data-theme='dark'] .itinerary-step-body {
          background: rgba(0, 0, 0, 0.2);
          color: rgba(255, 255, 255, 0.85);
        }

        /* Cost Split Grid */
        .cost-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.75rem, 3vw, 2.75rem);
        }

        .cost-box {
          background: var(--bg-app);
          border-radius: 18px;
          padding: clamp(1.75rem, 3vw, 2.75rem);
          border: 1px solid var(--glass-border);
        }

        [data-theme='light'] .cost-box,
        :root:not([data-theme='dark']) .cost-box {
          background: #F9F8F6;
        }

        .inclusions-box {
          border-top: 4px solid var(--color-sage);
        }

        .exclusions-box {
          border-top: 4px solid #C55353;
        }

        .cost-box-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .cost-icon {
          background: rgba(107, 142, 111, 0.2);
          color: var(--color-sage);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .cost-icon.cross {
          background: rgba(197, 83, 83, 0.2);
          color: #C55353;
        }

        .cost-box-header h3 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--text-main);
        }

        .cost-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .cost-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
        }

        .icon-check {
          color: var(--color-sage);
          font-weight: 800;
          font-size: 1.1rem;
        }

        .icon-cross {
          color: #C55353;
          font-weight: 800;
          font-size: 1.1rem;
        }

        /* Gallery */
        .trip-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .gallery-photo-card {
          height: 200px;
          border-radius: 14px;
          overflow: hidden;
        }

        .gallery-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-photo-card:hover img {
          transform: scale(1.08);
        }

        /* Inquiry Section */
        .inquiry-card {
          background: var(--color-charcoal);
          color: white;
          padding: clamp(2.5rem, 5vw, 4.5rem);
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .inquiry-card h2 {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 2.8rem);
          margin-bottom: 0.5rem;
          color: white;
        }

        .inquiry-lead {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1.05rem;
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
          max-width: 720px;
          line-height: 1.7;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-gold);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.95rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 1rem;
          outline: none;
          font-family: inherit;
        }

        .form-group select option {
          background: var(--color-charcoal);
          color: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.25);
        }

        .submit-inquiry-btn {
          margin-top: 1rem;
          align-self: flex-start;
          padding: 1rem 2.5rem;
          font-size: 1.05rem;
        }

        /* Sidebar */
        .trip-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-card {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: clamp(1.75rem, 3vw, 2.5rem);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }

        [data-theme='light'] .sidebar-card,
        :root:not([data-theme='dark']) .sidebar-card {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.07);
        }

        .sidebar-card h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--text-main);
          margin-bottom: 1.25rem;
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: 0.6rem;
        }

        .sidebar-meta-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .sidebar-meta-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .sidebar-meta-item .label {
          color: var(--text-muted);
        }

        .sidebar-meta-item .value {
          font-weight: 700;
          color: var(--text-main);
        }

        .btn-block {
          display: block;
          text-align: center;
          width: 100%;
        }

        .sidebar-guide-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.8rem;
        }

        .sidebar-guide-links a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .sidebar-guide-links a:hover {
          color: var(--color-gold);
          padding-left: 4px;
        }

        .promise-quote {
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--text-main);
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }

        .promise-tag {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-gold);
        }

        /* Related Trips */
        .related-trips-section {
          margin-top: var(--s-24);
          border-top: 1px solid var(--glass-border);
          padding-top: var(--s-16);
        }

        .related-trips-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--s-8);
        }

        .related-trips-header h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--text-main);
        }

        .view-all-link {
          color: var(--color-gold);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .related-trips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .related-trip-card {
          background: var(--bg-alt);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        [data-theme='light'] .related-trip-card,
        :root:not([data-theme='dark']) .related-trip-card {
          background: #FFFFFF;
        }

        .related-trip-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-gold);
        }

        .related-trip-card a {
          text-decoration: none;
          color: inherit;
        }

        .related-image-wrap {
          position: relative;
          height: 180px;
        }

        .related-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .related-badge {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          background: rgba(26, 31, 35, 0.85);
          color: var(--color-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
        }

        .related-card-body {
          padding: var(--s-4);
        }

        .related-dur {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          display: block;
          margin-bottom: 0.3rem;
        }

        .related-card-body h4 {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .related-card-body p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 968px) {
          .trip-layout {
            grid-template-columns: 1fr;
          }
          .cost-split-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TripDetailPage;
