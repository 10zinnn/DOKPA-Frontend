import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Australia',
      quote: "The trek with Dokpa was transformative. Our guides were knowledgeable, patient, and truly passionate. Every detail was thoughtfully planned.",
      journey: 'Markha Valley'
    },
    {
      name: 'Emma & James Wood',
      location: 'United Kingdom',
      quote: "We wanted meaningful travel, not just tourism. Dokpa delivered exactly that. The cultural immersion and connections we made were priceless.",
      journey: 'Cultural Journey'
    },
    {
      name: 'Rajesh Kumar',
      location: 'India',
      quote: "Safety, authenticity, and respect for local culture. The cycling expedition was the adventure of a lifetime. Highly recommend Dokpa.",
      journey: 'Cycling Ladakh'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Traveler Stories</span>
          <h2 className="section-title-alt">The Voice of Adventure</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="quote-icon">“</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div className="author-meta">
                  <span className="author-name">{t.name}</span>
                  <span className="author-location">{t.location}</span>
                </div>
                <div className="journey-badge">{t.journey}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials-section {
          background: var(--bg-app);
          position: relative;
          overflow: hidden;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--s-8);
        }

        .testimonial-card {
          background: var(--bg-alt);
          padding: var(--s-12);
          border-radius: var(--radius-outer);
          position: relative;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          background: var(--bg-app);
          box-shadow: var(--shadow-strong);
        }

        .quote-icon {
          font-family: var(--font-serif);
          font-size: 5rem;
          line-height: 1;
          color: var(--accent);
          opacity: 0.2;
          position: absolute;
          top: var(--s-4);
          left: var(--s-8);
        }

        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-style: italic;
          line-height: 1.7;
          margin-bottom: var(--s-12);
          position: relative;
          z-index: 1;
          color: var(--text-main);
        }

        .testimonial-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: var(--s-4);
          flex-wrap: wrap;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 700;
          font-size: 1rem;
        }

        .author-location {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .journey-badge {
          margin-left: auto;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          background: rgba(107, 142, 111, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .journey-badge {
            margin-left: 0;
            width: 100%;
            text-align: center;
            margin-top: var(--s-4);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;


