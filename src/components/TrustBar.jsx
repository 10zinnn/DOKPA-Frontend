import React from 'react'

const TrustBar = () => {
    const partners = [
        { name: 'Ministry of Tourism', icon: '🏛️' },
        { name: 'Ladakh Explorers Club', icon: '🏔️' },
        { name: 'Eco-Travel Certified', icon: '🌱' },
        { name: 'Himalayan Safety Council', icon: '🛡️' }
    ];

    return (
        <div className="trust-bar">
            <div className="container">
                <p className="trust-label">Recognized & Trusted By</p>
                <div className="partners-grid">
                    {partners.map((p, i) => (
                        <div key={i} className="partner-item">
                            <span className="partner-icon">{p.icon}</span>
                            <span className="partner-name">{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .trust-bar {
          background: var(--bg-alt);
          padding-block: var(--s-8);
          border-block: 1px solid var(--glass-border);
        }

        .trust-label {
          text-align: center;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: var(--s-8);
          font-weight: 600;
        }

        .partners-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--s-16);
          flex-wrap: wrap;
          opacity: 0.7;
          filter: grayscale(1);
          transition: var(--transition);
        }

        .partners-grid:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .partner-item {
          display: flex;
          align-items: center;
          gap: var(--s-2);
          font-family: var(--font-serif);
          font-weight: 500;
        }

        .partner-icon {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .partners-grid {
            gap: var(--s-8);
          }
        }
      `}</style>
        </div>
    );
};

export default TrustBar;

