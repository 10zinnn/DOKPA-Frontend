import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Australia',
      text: 'The trek with Dokpa was transformative. Our guides were knowledgeable, patient, and truly passionate about sharing their love for Ladakh. Every detail was thoughtfully planned.',
      rating: 5,
      journey: 'Markha Valley Trek'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, India',
      text: 'Safety, authenticity, and respect for local culture - Dokpa embodies all of this. The cycling expedition through Khardung La was the adventure of a lifetime.',
      rating: 5,
      journey: 'High Altitude Cycling'
    },
    {
      name: 'Emma & James Wood',
      location: 'United Kingdom',
      text: 'We wanted meaningful travel, not just tourism. Dokpa delivered exactly that. The cultural immersion and connections we made were priceless.',
      rating: 5,
      journey: 'Cultural Journey'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Traveler Stories</h2>
        <p className="section-intro">
          Hear from adventurers who have experienced the magic of Ladakh with Dokpa Expeditions
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
                <div className="journey-tag">{testimonial.journey}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-cta">
          <p>Join hundreds of satisfied travelers who have discovered authentic Ladakh with us</p>
        </div>
      </div>
      <style jsx>{`
        .testimonials-section {
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(226, 127, 72, 0.02) 50%,
            transparent 100%
          );
        }

        .section-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--space-12);
          font-size: var(--text-lg);
          color: var(--color-summit-charcoal);
          opacity: 0.85;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        .testimonial-card {
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
        }

        .stars {
          font-size: var(--text-lg);
          margin-bottom: var(--space-4);
        }

        .testimonial-text {
          font-size: var(--text-lg);
          line-height: 1.7;
          color: var(--color-summit-charcoal);
          font-style: italic;
          flex-grow: 1;
          margin-bottom: var(--space-6);
          opacity: 0.9;
        }

        .testimonial-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-xl);
          font-weight: 700;
          color: white;
        }

        .author-name {
          font-weight: 600;
          color: var(--color-summit-charcoal);
          font-size: var(--text-base);
        }

        .author-location {
          font-size: var(--text-sm);
          color: var(--color-summit-charcoal);
          opacity: 0.6;
        }

        .journey-tag {
          background: rgba(107, 142, 111, 0.15);
          color: var(--color-sage-green-dark);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          font-weight: 500;
          border: 1px solid rgba(107, 142, 111, 0.3);
        }

        .testimonial-cta {
          text-align: center;
          padding: var(--space-8);
        }

        .testimonial-cta p {
          font-size: var(--text-lg);
          color: var(--color-summit-charcoal);
          opacity: 0.75;
          margin: 0;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
