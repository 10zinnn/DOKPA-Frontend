import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-eyebrow">Our Philosophy</span>
            <h2 className="section-title-alt">Rooted in the Nomadic Spirit</h2>
            <div className="about-text">
              <p>
                Dokpa Expeditions is named after the nomadic herders of the High Himalayas,
                capturing their resilience, wisdom, and deep connection to the earth.
                We don't just guide; we bridge the gap between traveler and mountain.
              </p>
              <p>
                Based in the heart of Ladakh, we focus on high-impact, low-footprint
                journeys that empower local communities while providing you with an
                unfiltered Himalayan experience.
              </p>
            </div>

            <div className="values-list">
              {[
                { title: 'Local Wisdom', icon: '🏔️', desc: 'Guided by those who call these peaks home.' },
                { title: 'Ethical Travel', icon: '🌱', desc: 'Sustainability is not a choice, it\'s our foundation.' },
                { title: 'True Safety', icon: '🛡️', desc: 'Expertise that prioritizes your journey above all.' }
              ].map((v, i) => (
                <div key={i} className="value-item">
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="image-frame">
              <img src="/about-image.jpg" alt="Ladakh Mountains - Dokpa Expeditions Guide" loading="lazy" />
              <div className="experience-badge gold">
                <span className="years">15+</span>
                <span className="label">Years of Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--s-24);
          align-items: center;
        }

        .section-eyebrow {
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: var(--s-2);
          display: block;
        }

        .section-title-alt {
          font-size: var(--h2);
          margin-bottom: var(--s-8);
        }

        .about-text p {
          font-size: var(--body);
          color: var(--text-muted);
          margin-bottom: var(--s-6);
        }

        .values-list {
          margin-top: var(--s-12);
          display: grid;
          gap: var(--s-6);
        }

        .value-item {
          display: flex;
          gap: var(--s-4);
          align-items: flex-start;
        }

        .value-icon {
          font-size: 1.5rem;
          padding: var(--s-2);
          background: var(--bg-alt);
          border-radius: var(--radius-inner);
        }

        .value-item h4 {
          margin-bottom: var(--s-1);
          font-size: 1.1rem;
        }

        .value-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin: 0;
        }

        .image-frame {
          position: relative;
          border-radius: var(--radius-outer);
          overflow: hidden;
          box-shadow: var(--shadow-strong);
        }

        .image-frame img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .image-frame:hover img {
          transform: scale(1.05);
        }

        .experience-badge {
          position: absolute;
          bottom: var(--s-8);
          right: var(--s-8);
          background: var(--accent);
          color: white;
          padding: var(--s-6);
          border-radius: var(--radius-inner);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-strong);
        }

        .experience-badge.gold {
          background: var(--color-charcoal);
          border: 1px solid var(--color-gold);
        }

        .experience-badge .years {
          font-size: 2rem;
          font-weight: 800;
          font-family: var(--font-serif);
          color: var(--color-gold);
        }

        .experience-badge .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: var(--s-12);
          }
          .about-visual {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;


