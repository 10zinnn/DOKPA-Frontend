import React from 'react'

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Dokpa Expeditions</h2>

                <div className="about-grid">
                    <div className="about-content">
                        <div className="about-text">
                            <h3>Inspired by Nomadic Spirit</h3>
                            <p>
                                Dokpa Expeditions is named after the nomadic herders of the high Himalayas,
                                reflecting our deep connection to Ladakh's landscape and culture. We are rooted
                                in responsibility, community, and profound respect for nature.
                            </p>
                            <p>
                                Based in Ladakh, we offer thoughtfully guided journeys that connect travelers
                                with the authentic essence of the Himalayas—its landscapes, culture, and the
                                people who call these mountains home.
                            </p>
                        </div>

                        <div className="values-grid">
                            <div className="value-card glass-card">
                                <div className="value-icon">🏔️</div>
                                <h4>Guidance Over Risk</h4>
                                <p>Safety and experience are our foundations</p>
                            </div>
                            <div className="value-card glass-card">
                                <div className="value-icon">🌱</div>
                                <h4>Sustainability</h4>
                                <p>Protecting nature for future generations</p>
                            </div>
                            <div className="value-card glass-card">
                                <div className="value-icon">🤝</div>
                                <h4>Community Focus</h4>
                                <p>Supporting local communities and culture</p>
                            </div>
                            <div className="value-card glass-card">
                                <div className="value-icon">✨</div>
                                <h4>Authentic Connection</h4>
                                <p>Meaningful travel over mass tourism</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-wrapper glass-card">
                            <img src="/about-image.jpg" alt="Ladakh Mountains" />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .about-text h3 {
          color: var(--color-golden-hour);
          margin-bottom: var(--space-4);
        }

        .about-text p {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
          margin-top: var(--space-8);
        }

        .value-card {
          text-align: center;
          padding: var(--space-6);
        }

        .value-icon {
          font-size: var(--text-4xl);
          margin-bottom: var(--space-3);
        }

        .value-card h4 {
          font-size: var(--text-lg);
          margin-bottom: var(--space-2);
          color: var(--color-glacier-blue);
        }

        .value-card p {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .about-image {
          position: relative;
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: var(--radius-xl);
          aspect-ratio: 4/5;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr 1fr;
          }

          .about-image {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
