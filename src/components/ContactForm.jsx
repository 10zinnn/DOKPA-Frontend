import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'trekking',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'trekking',
        message: ''
      });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title-alt">Start Your Journey</h2>
          <p className="section-intro">
            Ready to explore the Himalayas? Share your vision and we'll craft the perfect expedition.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="info-card glass-panel">
              <div className="info-icon">📍</div>
              <h4>Visit Us</h4>
              <p>Main Bazaar, Leh<br />Ladakh 194101, India</p>
            </div>
            <div className="info-card glass-panel">
              <div className="info-icon">📞</div>
              <h4>Call Us</h4>
              <p>+91 9906XXXXXX<br />Mon-Sat: 9AM - 6PM IST</p>
            </div>
            <div className="info-card glass-panel">
              <div className="info-icon">✉️</div>
              <h4>Email Us</h4>
              <p>expeditions@dokpa.com<br />We respond within 24 hours</p>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} style={{ transitionDelay: '0.2s' }}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="interest">I'm Interested In</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="trekking">Luxury Treks</option>
                <option value="peak-climbing">Peak Climbing</option>
                <option value="technical-alpine">Technical Alpine</option>
                <option value="cultural">Cultural Immersion</option>
                <option value="custom">Custom Expedition</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Adventure *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Share your vision, dates, group size, experience level..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Inquiry'}
            </button>

            {status === 'success' && (
              <p className="success-message">
                Thank you! We'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
      <style>{`
        .contact-section {
          background: var(--bg-app);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--s-16);
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--s-6);
        }

        .info-card {
          padding: var(--s-8);
          border-radius: var(--radius-outer);
          transition: var(--transition);
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-strong);
        }

        .info-icon {
          font-size: 2rem;
          margin-bottom: var(--s-4);
        }

        .info-card h4 {
          font-size: 1.25rem;
          margin-bottom: var(--s-2);
          font-family: var(--font-serif);
        }

        .info-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .contact-form {
          background: var(--bg-alt);
          padding: var(--s-12);
          border-radius: var(--radius-outer);
          box-shadow: var(--shadow-soft);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--s-6);
        }

        .form-group {
          margin-bottom: var(--s-6);
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: var(--s-2);
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: var(--s-4);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-inner);
          background: var(--bg-app);
          color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: var(--focus-ring);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form .btn {
          width: 100%;
          margin-top: var(--s-4);
        }

        .contact-form .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          margin-top: var(--s-4);
          padding: var(--s-4);
          background: rgba(107, 142, 111, 0.1);
          color: var(--accent);
          border-radius: var(--radius-inner);
          text-align: center;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--s-12);
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
