import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { activitiesData } from '../data/activitiesData'
import { tripsData } from '../data/tripsData'

const Activities = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Helper to map migrated trips inside activity cards
  const getTripsForActivity = (activityId) => {
    if (activityId === 'trekking') {
      return tripsData.filter(t => t.categorySlug === 'trekking');
    }
    if (activityId === 'expeditions') {
      return tripsData.filter(t => t.categorySlug === 'peak-climbing');
    }
    if (activityId === 'cultural-tours') {
      return tripsData.filter(t => t.categorySlug === 'cultural-tours');
    }
    return [];
  };

  // Use shared data with wrapped trips
  const activities = activitiesData.map(activity => ({
    title: activity.title,
    icon: activity.icon,
    description: activity.shortDescription,
    difficulty: activity.difficulty,
    season: activity.season,
    image: activity.image,
    id: activity.id,
    trips: getTripsForActivity(activity.id)
  }));

  // Create infinite loop by tripling the array
  const infiniteActivities = [...activities, ...activities, ...activities];
  const totalSlides = activities.length;

  const cardWidth = 400 + 32; // card width + gap

  // Scroll to specific index
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const targetScroll = index * cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Handle scroll navigation
  const scroll = (direction) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const newIndex = direction === 'left' 
      ? currentIndex - 1 
      : currentIndex + 1;
    
    scrollToIndex(totalSlides + newIndex);
    setCurrentIndex(newIndex);
    
    setTimeout(() => setIsScrolling(false), 600);
  };

  // Handle dot click
  const goToSlide = (index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    scrollToIndex(totalSlides + index);
    setCurrentIndex(index);
    
    setTimeout(() => setIsScrolling(false), 600);
  };

  // Handle infinite scroll loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      
      const slideIndex = index % totalSlides;
      setCurrentIndex(slideIndex);

      if (index <= 0) {
        container.scrollLeft = totalSlides * cardWidth;
      } else if (index >= totalSlides * 2) {
        container.scrollLeft = totalSlides * cardWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.scrollLeft = totalSlides * cardWidth;

    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSlides, cardWidth]);

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title-alt">Adventure Activities & Expeditions</h2>
          <p className="section-intro">
            From technical 7,000m summits and high-pass traverses to soul-enriching cultural homestays,
            discover the full spectrum of Himalayan exploration.
          </p>
        </div>

        <div className="activities-scroll-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
          <button 
            className="scroll-btn scroll-btn-left" 
            onClick={() => scroll('left')}
            aria-label="Previous activity"
          >
            ‹
          </button>
          
          <div className="activities-scroll-container" ref={scrollRef}>
            {infiniteActivities.map((activity, index) => (
              <div
                key={index}
                className="activity-card"
              >
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                  <div className="activity-icon">{activity.icon}</div>
                  {activity.trips.length > 0 && (
                    <span className="activity-trips-count-badge">
                      {activity.trips.length} Migrated Expeditions
                    </span>
                  )}
                </div>
                <div className="activity-content">
                  <h3>{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  
                  <div className="activity-meta">
                    <div className="meta-item">
                      <span className="meta-label">Difficulty</span>
                      <span className="meta-value">{activity.difficulty}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Season</span>
                      <span className="meta-value">{activity.season}</span>
                    </div>
                  </div>

                  {/* WRAPPED TRIPS CONTAINER INSIDE TREKKING, EXPEDITIONS, AND CULTURAL TOURS */}
                  {activity.trips && activity.trips.length > 0 && (
                    <div className="activity-wrapped-container">
                      <div className="wrapped-header">
                        <span className="wrapped-heading-label">
                          {activity.id === 'trekking' ? '🥾 Included Treks' : 
                           activity.id === 'expeditions' ? '🏔️ Included Peaks' : '🛕 Included Circuits'}
                        </span>
                        <span className="wrapped-badge-count">{activity.trips.length} Trips</span>
                      </div>

                      <div className="wrapped-trips-chips-list">
                        {activity.trips.slice(0, 3).map(trip => (
                          <Link 
                            key={trip.id} 
                            to={`/trips/${trip.slug}`}
                            className="wrapped-trip-chip-link"
                            title={`View ${trip.title} itinerary`}
                          >
                            <span className="chip-icon">✦</span>
                            <span className="chip-name">{trip.title}</span>
                            <span className="chip-time">{trip.duration.split('/')[0].trim()}</span>
                          </Link>
                        ))}
                      </div>

                      {activity.trips.length > 3 && (
                        <Link to="/trips" className="wrapped-more-link">
                          + {activity.trips.length - 3} more {activity.title.toLowerCase()} available →
                        </Link>
                      )}
                    </div>
                  )}

                  <div className="activity-card-actions">
                    <Link to={`/activities/${activity.id}`} className="activity-link">
                      Activity Overview →
                    </Link>
                    {activity.trips.length > 0 && (
                      <Link to="/trips" className="browse-all-trips-link">
                        All Expeditions
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="scroll-btn scroll-btn-right" 
            onClick={() => scroll('right')}
            aria-label="Next activity"
          >
            ›
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="dot-indicators reveal" style={{ transitionDelay: '0.3s' }}>
          {activities.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .activities-section {
          background: var(--bg-alt);
          overflow: hidden;
          position: relative;
          padding: clamp(3rem, 6vw, 6rem) 0;
        }

        .activities-scroll-wrapper {
          position: relative;
          margin-inline: calc(var(--s-4) * -1);
          padding-inline: var(--s-4);
          margin-top: var(--s-8);
        }

        .activities-scroll-container {
          display: flex;
          gap: 32px;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: var(--s-8) var(--s-4);
        }

        .activities-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .activity-card {
          flex: 0 0 400px;
          background: var(--bg-app);
          border-radius: 20px;
          overflow: hidden;
          scroll-snap-align: start;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
        }

        [data-theme='light'] .activity-card,
        :root:not([data-theme='dark']) .activity-card {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .activity-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: var(--color-gold);
        }

        .activity-image {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .activity-card:hover .activity-image img {
          transform: scale(1.08);
        }

        .activity-trips-count-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(26, 31, 35, 0.9);
          backdrop-filter: blur(6px);
          color: var(--color-gold);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .activity-icon {
          position: absolute;
          top: var(--s-4);
          right: var(--s-4);
          width: 54px;
          height: 54px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        [data-theme='dark'] .activity-icon {
          background: rgba(26, 31, 35, 0.95);
        }

        .activity-content {
          padding: clamp(1.5rem, 3vw, 2rem);
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1rem;
        }

        .activity-content h3 {
          font-size: 1.65rem;
          font-family: var(--font-serif);
          color: var(--text-main);
          margin: 0;
        }

        .activity-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .activity-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--s-3);
          padding: 0.75rem 1rem;
          background: var(--bg-alt);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .meta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .meta-value {
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 700;
        }

        /* WRAPPED TRIPS CONTAINER */
        .activity-wrapped-container {
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        [data-theme='light'] .activity-wrapped-container,
        :root:not([data-theme='dark']) .activity-wrapped-container {
          background: #F9F8F6;
          border-color: rgba(212, 175, 55, 0.25);
        }

        .wrapped-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.4rem;
        }

        .wrapped-heading-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .wrapped-badge-count {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .wrapped-trips-chips-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .wrapped-trip-chip-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.45rem 0.75rem;
          background: var(--bg-app);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          text-decoration: none;
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition);
        }

        [data-theme='light'] .wrapped-trip-chip-link,
        :root:not([data-theme='dark']) .wrapped-trip-chip-link {
          background: #FFFFFF;
        }

        .wrapped-trip-chip-link:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          transform: translateX(3px);
        }

        .chip-icon {
          color: var(--color-gold);
          font-size: 0.75rem;
        }

        .chip-name {
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chip-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .wrapped-more-link {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-gold);
          text-decoration: none;
          padding-top: 0.2rem;
          text-align: right;
        }

        .wrapped-more-link:hover {
          text-decoration: underline;
        }

        .activity-card-actions {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--s-3);
          border-top: 1px solid var(--glass-border);
        }

        .activity-link {
          display: inline-flex;
          align-items: center;
          gap: var(--s-2);
          color: var(--color-gold);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .browse-all-trips-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }

        .browse-all-trips-link:hover {
          color: var(--text-main);
        }

        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          background: var(--color-charcoal);
          color: var(--color-gold);
          border: 1px solid var(--color-gold);
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          z-index: var(--z-dropdown);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .scroll-btn:hover {
          background: var(--color-gold);
          color: var(--color-charcoal);
          transform: translateY(-50%) scale(1.1);
        }

        .scroll-btn-left {
          left: -20px;
        }

        .scroll-btn-right {
          right: -20px;
        }

        .dot-indicators {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--s-3);
          margin-top: var(--s-8);
          padding: var(--s-4);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--glass-border);
          border: none;
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
        }

        .dot.active {
          background: var(--color-gold);
          width: 30px;
          border-radius: 99px;
        }

        @media (max-width: 768px) {
          .activity-card {
            flex: 0 0 320px;
          }
          .scroll-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Activities;
