import React, { useEffect } from 'react'
import Footer from '../components/Footer'

const DestinationsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const destinations = [
        {
            title: 'Kargil',
            description: 'Discover the gateway to Ladakh, rich in history, brave stories, and stunning valleys.',
            image: '/dest-kargil.jpg',
            features: ['Historic Sites', 'Suru Valley', 'Aryan Valley'],
            details: 'Kargil is the second largest town in Ladakh and is situated on the banks of the Suru River. It is a land of brave hearts and stunning natural beauty. From the lush green Suru Valley to the ancient rock carvings, Kargil offers a unique blend of culture and adventure.'
        },
        {
            title: 'Leh & Ladakh',
            description: 'Experience the heart of the high-altitude desert, ancient monasteries, and azure lakes.',
            image: '/dest-leh.jpg',
            features: ['Nubra Valley', 'Pangong Lake', 'Ancient Monasteries'],
            details: 'Leh, the capital of Ladakh, is a dream destination for adventurers. Known for its high-altitude passes, crystal clear lakes, and centuries-old Tibetan Buddhist monasteries, it offers an experience that is both spiritually enriching and physically exhilarating.'
        },
        {
            title: 'Zanskar Valley',
            description: 'Explore one of the most remote and beautiful valleys in the Himalayas.',
            image: '/dest-zanskar.jpg', // Assuming this might exist or be added
            features: ['Phugtal Monastery', 'Padum', 'Trekking'],
            details: 'The Zanskar Valley is a semi-arid canyon nestled in the Zanskar Range. It is known for its dramatic landscapes, ancient monasteries like Phugtal (built into a cave), and legendary treks. It remains isolated for much of the winter, preserving its unique culture.'
        },
        {
            title: 'Nubra Valley',
            description: 'Visit the valley of flowers and experience the high-altitude sand dunes.',
            image: '/dest-nubra.jpg',
            features: ['Hunder Dunes', 'Diskit Monastery', 'Bactrian Camels'],
            details: 'Located north of Leh, Nubra Valley is accessible via the Khardung La pass. It is famous for its double-humped Bactrian camels, the massive Diskit Monastery, and the stunning contrast between lush greenery and high-altitude sand dunes.'
        }
    ];

    return (
        <div className="destinations-page">
            <header className="page-header">
                <div className="container">
                    <h1>Our Destinations</h1>
                    <p>Explore the hidden gems of the Trans-Himalayas</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="destinations-list">
                        {destinations.map((dest, index) => (
                            <div key={index} className="destination-item">
                                <div className="dest-image-side">
                                    <img src={dest.image} alt={dest.title} />
                                </div>
                                <div className="dest-info-side">
                                    <h2>{dest.title}</h2>
                                    <div className="dest-tags-row">
                                        {dest.features.map((feature, i) => (
                                            <span key={i} className="dest-tag">{feature}</span>
                                        ))}
                                    </div>
                                    <p className="dest-full-desc">{dest.details}</p>
                                    <button className="cta-button secondary">Inquire About This Trip</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        .destinations-page {
          padding-top: 80px; /* Space for navigation */
        }

        .page-header {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          padding: var(--space-20) 0;
          color: white;
          text-align: center;
        }

        .page-header h1 {
          font-size: var(--text-5xl);
          margin-bottom: var(--space-4);
          font-weight: 800;
        }

        .page-header p {
          font-size: var(--text-xl);
          opacity: 0.9;
        }

        .destinations-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-20);
          margin-top: var(--space-12);
        }

        .destination-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          padding: var(--space-8);
          transition: transform var(--transition-base);
        }

        .destination-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .dest-image-side img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: var(--radius-xl);
        }

        .dest-info-side h2 {
          font-size: var(--text-4xl);
          margin-bottom: var(--space-4);
          color: var(--text-primary);
        }

        .dest-tags-row {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
        }

        .dest-tag {
          background: var(--primary-color);
          color: white;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .dest-full-desc {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: var(--space-8);
        }

        @media (max-width: 992px) {
          .destination-item {
            grid-template-columns: 1fr;
          }
          .dest-image-side img {
            height: 300px;
          }
          .page-header h1 {
            font-size: var(--text-3xl);
          }
        }
      `}</style>
        </div>
    );
};

export default DestinationsPage;
