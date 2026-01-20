import React from 'react'
import { Link } from 'react-router-dom'

const Destinations = () => {
  const destinations = [
    {
      title: 'Kargil',
      description: 'Discover the gateway to Ladakh, rich in history, brave stories, and stunning valleys.',
      image: '/dest-kargil.jpg',
      features: ['Historic Sites', 'Suru Valley', 'Aryan Valley']
    },
    {
      title: 'Leh & Ladakh',
      description: 'Experience the heart of the high-altitude desert, ancient monasteries, and azure lakes.',
      image: '/dest-leh.jpg',
      features: ['Nubra Valley', 'Pangong Lake', 'Ancient Monasteries']
    }
  ];

  return (
    <section id="destinations" className="section destinations-section">
      <div className="container">
        <h2 className="section-title">Iconic Destinations</h2>
        <p className="section-intro">
          Traverse the most breath-taking landscapes of the Trans-Himalayas with our specialized local expertise.
        </p>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="destination-card"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="dest-overlay"></div>
              <div className="dest-content">
                <h3>{dest.title}</h3>
                <p className="dest-description">{dest.description}</p>
                <div className="dest-tags">
                  {dest.features.map((feature, i) => (
                    <span key={i} className="dest-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="see-more-container">
          <Link to="/destinations" className="cta-button secondary">See All Destinations</Link>
        </div>
      </div>
      <style jsx>{`
        .destinations-section {
          background: var(--bg-secondary);
          padding: var(--space-20) 0;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-10);
          margin-top: var(--space-12);
          margin-bottom: var(--space-12);
        }

        .see-more-container {
            display: flex;
            justify-content: center;
            margin-top: var(--space-8);
        }

        .destination-card {
          height: 500px;
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: all var(--transition-slow);
          box-shadow: 0 0 0 1px var(--glass-border), var(--shadow-lg);
          outline: 1px solid transparent;
          isolation: isolate;
        }

        .destination-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 0 1px var(--glass-border), var(--shadow-2xl), 0 0 20px var(--shadow-glow);
        }

        .dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.85) 100%
          );
        }

        .dest-content {
          position: relative;
          z-index: 2;
          padding: var(--space-10);
          color: white;
        }

        .destination-card h3 {
          font-size: var(--text-4xl);
          margin-bottom: var(--space-4);
          color: white;
          font-weight: 700;
        }

        .dest-description {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--space-6);
          font-size: var(--text-lg);
          line-height: 1.6;
          max-width: 90%;
        }

        .dest-tags {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .dest-tag {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(5px);
          padding: var(--space-1) var(--space-4);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }
          .destination-card {
            height: 400px;
          }
           .destination-card h3 {
            font-size: var(--text-3xl);
          }
        }
      `}</style>
    </section>
  );
};

export default Destinations;
