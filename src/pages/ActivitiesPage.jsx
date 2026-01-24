import React from 'react'
import { Link } from 'react-router-dom'
import { activitiesData } from '../data/activitiesData'

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <header className="page-header">
        <div className="container reveal">
          <span className="eyebrow">What We Offer</span>
          <h1>All Activities</h1>
          <p className="subtitle">
            Discover the full range of adventures and experiences we offer in the Himalayas.
            From adrenaline-pumping activities to cultural immersion.
          </p>
        </div>
      </header>

      <section className="activities-grid-section">
        <div className="container">
          <div className="activities-grid">
            {activitiesData.map((activity, index) => (
              <Link
                key={activity.id}
                to={`/activities/${activity.id}`}
                className="activity-grid-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="activity-grid-image">
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                  <div className="activity-grid-icon">{activity.icon}</div>
                  <div className="activity-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
                <div className="activity-grid-content">
                  <h3>{activity.title}</h3>
                  <p className="activity-grid-description">{activity.shortDescription}</p>
                  <div className="activity-grid-meta">
                    <div className="meta-badge">
                      <span className="meta-icon">📊</span>
                      <span>{activity.difficulty}</span>
                    </div>
                    <div className="meta-badge">
                      <span className="meta-icon">📅</span>
                      <span>{activity.season}</span>
                    </div>
                    <div className="meta-badge">
                      <span className="meta-icon">⏱️</span>
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .activities-page {
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
          max-width: 700px;
          margin-inline: auto;
          line-height: 1.6;
        }

        .activities-grid-section {
          padding-block: var(--s-24);
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--s-8);
        }

        .activity-grid-card {
          background: var(--bg-alt);
          border-radius: var(--radius-outer);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .activity-grid-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }

        .activity-grid-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .activity-grid-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .activity-grid-card:hover .activity-grid-image img {
          transform: scale(1.1);
        }

        .activity-grid-icon {
          position: absolute;
          top: var(--s-4);
          right: var(--s-4);
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: var(--shadow-soft);
          z-index: 2;
        }

        [data-theme='dark'] .activity-grid-icon {
          background: rgba(26, 31, 35, 0.95);
        }

        .activity-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: var(--s-6);
          opacity: 0;
          transition: var(--transition);
        }

        .activity-grid-card:hover .activity-overlay {
          opacity: 1;
        }

        .view-details {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: var(--s-2);
        }

        .activity-grid-content {
          padding: var(--s-8);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .activity-grid-content h3 {
          font-size: 1.75rem;
          margin-bottom: var(--s-3);
          font-family: var(--font-serif);
        }

        .activity-grid-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--s-6);
          flex: 1;
        }

        .activity-grid-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--s-2);
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: var(--s-1);
          background: var(--bg-app);
          padding: var(--s-2) var(--s-3);
          border-radius: var(--radius-inner);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .meta-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }

          .activity-grid-image {
            height: 220px;
          }

          .activity-grid-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ActivitiesPage;
