import React, { useEffect } from 'react'
import Footer from '../components/Footer'

const DestinationsPage = () => {
  const destinations = [
    {
      title: 'Kargil',
      description: 'The ancient gateway connecting Ladakh with the rest of the world. A land of dramatic contrast, from lush valleys to stark mountain passes.',
      image: '/dest-kargil.jpg',
      features: ['Historic Sites', 'Suru Valley', 'Aryan Valley'],
      details: 'Kargil is more than just a transit point. It is a place of historical significance and breathtaking natural beauty. From the legendary battlefields of Drass to the hidden villages of the Aryan valley, it offers a deep dive into the resilient spirit of the Himalayas.'
    },
    {
      title: 'Leh & Ladakh',
      description: 'The high-altitude heart of the region, where ancient Buddhist culture meets futuristic landscapes.',
      image: '/dest-leh.jpg',
      features: ['Nubra Valley', 'Pangong Lake', 'Ancient Monasteries'],
      details: 'Leh is the pulse of Ladakh. Surrounded by peaks, it serves as the perfect base for exploring the high-altitude wonders of the region. Visit the moon-like landscapes of Lamayuru, the crystal waters of Pangong Lake, and the vast sand dunes of Nubra.'
    },
    {
      title: 'Zanskar Valley',
      description: 'The hidden frontier. A remote wilderness where time seems to have stood still for centuries.',
      image: '/dest-zanskar.jpg',
      features: ['Phugtal Monastery', 'Padum Valley', 'Shinku La Pass'],
      details: 'Zanskar is for the true explorer. Remote, rugged, and deeply spiritual, it is home to some of the most isolated monasteries in the world. The trek to Phugtal, built into a cliffside cave, is a journey of a lifetime.'
    },
    {
      title: 'Nubra Valley',
      description: 'The valley of flowers. A unique landscape of cold deserts, bactrian camels, and lush orchards.',
      image: '/dest-nubra.jpg',
      features: ['Hunder Dunes', 'Diskit Monastery', 'Panamik Hot Springs'],
      details: 'Nubra offers a surprising diversity of landscapes. Once a key stop on the Silk Road, it now welcomes travelers with its famous double-humped camels, dramatic vistas, and fertile valleys hidden between towering ridges.'
    }
  ];

  return (
    <div className="destinations-page">
      <header className="page-header">
        <div className="container reveal">
          <span className="eyebrow">The Trans-Himalayas</span>
          <h1>Our Destinations</h1>
          <p className="subtitle">Discover the raw, unfiltered beauty of the High Himalayas.</p>
        </div>
      </header>

      <section className="destinations-list">
        <div className="container">
          {destinations.map((dest, index) => (
            <div key={index} className="dest-item reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="dest-item-image">
                <img src={dest.image} alt={dest.title} />
              </div>
              <div className="dest-item-content">
                <div className="dest-header">
                  <h3>{dest.title}</h3>
                  <div className="dest-features">
                    {dest.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                </div>
                <p className="dest-desc">{dest.description}</p>
                <div className="dest-details-box glass-panel">
                  <p>{dest.details}</p>
                </div>
                <div className="dest-action">
                  <button className="btn btn-primary">Inquire About {dest.title}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .destinations-page {
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
          max-width: 600px;
          margin-inline: auto;
        }

        .destinations-list {
          padding-block: var(--s-24);
        }

        .dest-item {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--s-16);
          background: var(--bg-alt);
          border-radius: var(--radius-outer);
          overflow: hidden;
          margin-bottom: var(--s-24);
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .dest-item:nth-child(even) {
          direction: rtl;
        }

        .dest-item:nth-child(even) > * {
          direction: ltr;
        }

        .dest-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-strong);
        }

        .dest-item-image {
          height: 500px;
          overflow: hidden;
        }

        .dest-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .dest-item:hover .dest-item-image img {
          transform: scale(1.08);
        }

        .dest-item-content {
          padding: var(--s-12);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dest-header {
          margin-bottom: var(--s-8);
        }

        .dest-header h3 {
          font-size: var(--h2);
          margin-bottom: var(--s-4);
        }

        .dest-features {
          display: flex;
          gap: var(--s-2);
          flex-wrap: wrap;
        }

        .feature-tag {
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--bg-app);
          color: var(--accent);
          padding: 0.4rem 1rem;
          border-radius: 99px;
          border: 1px solid var(--glass-border);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dest-desc {
          font-size: 1.1rem;
          color: var(--text-main);
          margin-bottom: var(--s-8);
          line-height: 1.7;
          font-family: var(--font-serif);
        }

        .dest-details-box {
          padding: var(--s-6);
          margin-bottom: var(--s-10);
          border-radius: var(--radius-inner);
        }

        .dest-details-box p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .dest-action {
          margin-top: auto;
        }

        @media (max-width: 968px) {
          .dest-item {
            grid-template-columns: 1fr;
          }
          .dest-item:nth-child(even) {
            direction: ltr;
          }
          .dest-item-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default DestinationsPage;

