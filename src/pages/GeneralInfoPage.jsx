import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { generalInfoData } from '../data/generalInfoData'

const GeneralInfoPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('acclimatization');

  const scrollToSubSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const { acclimatization, permits, seasons, packing, etiquette, logistics, faqs } = generalInfoData;

  return (
    <div className="general-info-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container reveal">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <span>General Info</span>
          </div>
          <span className="eyebrow">Traveler's Field Guide</span>
          <h1>Ladakh General Information</h1>
          <p className="subtitle">
            Essential high-altitude knowledge, acclimatization protocols, permit guidance,
            and cultural wisdom to prepare you for the Trans-Himalayas.
          </p>
        </div>
      </header>

      {/* Sub-Navigation Bar */}
      <div className="sub-nav-wrapper">
        <div className="container">
          <nav className="sub-nav-scroll" aria-label="General info navigation">
            <button
              className={`sub-nav-btn ${activeTab === 'acclimatization' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('acclimatization')}
            >
              <span>🏔️</span> Acclimatization
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'permits' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('permits')}
            >
              <span>📄</span> Permits
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'seasons' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('seasons')}
            >
              <span>🌤️</span> Seasons
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'packing' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('packing')}
            >
              <span>🎒</span> Gear & Packing
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'etiquette' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('etiquette')}
            >
              <span>🙏</span> Culture & Ethics
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'logistics' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('logistics')}
            >
              <span>🧭</span> Logistics & SIM
            </button>
            <button
              className={`sub-nav-btn ${activeTab === 'faqs' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('faqs')}
            >
              <span>❓</span> FAQs
            </button>
          </nav>
        </div>
      </div>

      <div className="container info-sections-wrapper">
        {/* Section 1: Acclimatization */}
        <section id="acclimatization" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Safety First</span>
            <h2>{acclimatization.icon} {acclimatization.title}</h2>
            <p className="section-lead">{acclimatization.subtitle}</p>
          </div>

          <div className="info-card highlight-card">
            <p className="intro-text">{acclimatization.introduction}</p>
          </div>

          <div className="rules-grid">
            {acclimatization.keyRules.map((rule, idx) => (
              <div key={idx} className="rule-card">
                <div className="rule-icon">{rule.icon}</div>
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </div>
            ))}
          </div>

          <div className="medical-box">
            <h4>Medical Precautions & Protocols</h4>
            <div className="medical-item">
              <strong>Diamox (Acetazolamide):</strong> {acclimatization.medicalAdvice.preventativeMedication}
            </div>
            <div className="medical-item">
              <strong>Medical Infrastructure:</strong> {acclimatization.medicalAdvice.medicalFacilities}
            </div>
            <div className="medical-item emergency">
              <strong>Dokpa Safety Commitment:</strong> {acclimatization.medicalAdvice.emergencyProtocol}
            </div>
          </div>
        </section>

        {/* Section 2: Permits */}
        <section id="permits" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Regulations</span>
            <h2>{permits.icon} {permits.title}</h2>
            <p className="section-lead">{permits.subtitle}</p>
          </div>

          <p className="intro-text">{permits.introduction}</p>

          <div className="table-responsive">
            <table className="permits-table">
              <thead>
                <tr>
                  <th>Destination Area</th>
                  <th>Key Locations</th>
                  <th>Required Clearance</th>
                </tr>
              </thead>
              <tbody>
                {permits.regionsRequiringPermits.map((item, idx) => (
                  <tr key={idx}>
                    <td className="bold-cell">{item.area}</td>
                    <td>{item.highlights}</td>
                    <td><span className="badge-tag">{item.permitType}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="checklist-box">
            <h4>Permit Application Requirements</h4>
            <ul className="check-list">
              {permits.requirements.map((req, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Seasons & Climate */}
        <section id="seasons" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">When to Travel</span>
            <h2>{seasons.icon} {seasons.title}</h2>
            <p className="section-lead">{seasons.subtitle}</p>
          </div>

          <div className="seasons-grid">
            {seasons.seasonsList.map((season, idx) => (
              <div key={idx} className="season-card">
                <div className="season-header">
                  <h3>{season.name}</h3>
                  <span className="season-tag">{season.tag}</span>
                </div>
                <div className="season-temp">
                  <span className="temp-icon">🌡️</span>
                  <span>{season.temperature}</span>
                </div>
                <p className="season-desc">{season.description}</p>
                <div className="season-footer">
                  <strong>Best for:</strong> {season.recommendedFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Gear & Packing */}
        <section id="packing" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Mountain Preparedness</span>
            <h2>{packing.icon} {packing.title}</h2>
            <p className="section-lead">{packing.subtitle}</p>
          </div>

          <div className="info-card highlight-card">
            <p className="intro-text">{packing.principles}</p>
          </div>

          <div className="packing-grid">
            {packing.checklist.map((group, idx) => (
              <div key={idx} className="packing-card">
                <h3>{group.category}</h3>
                <ul className="packing-list">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="bullet">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Cultural Etiquette */}
        <section id="etiquette" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Responsible Travel</span>
            <h2>{etiquette.icon} {etiquette.title}</h2>
            <p className="section-lead">{etiquette.subtitle}</p>
          </div>

          <div className="etiquette-grid">
            {etiquette.values.map((val, idx) => (
              <div key={idx} className="etiquette-card">
                <div className="etiquette-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Logistics & Connectivity */}
        <section id="logistics" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Practical Advice</span>
            <h2>{logistics.icon} {logistics.title}</h2>
            <p className="section-lead">{logistics.subtitle}</p>
          </div>

          <div className="logistics-grid">
            {logistics.points.map((pt, idx) => (
              <div key={idx} className="logistics-card">
                <h3>{pt.title}</h3>
                <p>{pt.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section id="faqs" className="info-section reveal">
          <div className="section-title-wrap">
            <span className="section-badge">Got Questions?</span>
            <h2>❓ Frequently Asked Questions</h2>
            <p className="section-lead">Answers to common inquiries about journeying with Dokpa</p>
          </div>

          <div className="faqs-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="info-cta-box reveal">
          <div className="cta-content">
            <span className="cta-eyebrow">Guidance Over Risk</span>
            <h3>Have specific questions about your expedition?</h3>
            <p>Our certified local expedition leaders are here to assist with tailored itineraries and medical safety queries.</p>
          </div>
          <div className="cta-action">
            <a href="/#contact" className="btn btn-primary">Speak With An Expedition Leader</a>
          </div>
        </div>
      </div>

      <style>{`
        .general-info-page {
          background: var(--bg-app);
          min-height: 100vh;
          padding-bottom: clamp(4rem, 8vw, 8rem);
        }

        .page-header {
          padding-top: clamp(6rem, 10vw, 8.5rem);
          padding-bottom: clamp(3.5rem, 6vw, 5rem);
          background: #151A1D;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.18) 0%, transparent 75%);
          pointer-events: none;
        }

        .page-header .container {
          position: relative;
          z-index: 10;
        }

        .breadcrumb {
          margin-bottom: 1rem;
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .breadcrumb a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: var(--transition);
        }

        .breadcrumb a:hover {
          color: var(--color-gold);
        }

        .page-header .eyebrow {
          color: var(--color-gold);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 700;
          display: block;
          margin-bottom: 0.75rem;
        }

        .page-header h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-family: var(--font-serif);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          color: #FFFFFF;
        }

        .page-header .subtitle {
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          color: rgba(255, 255, 255, 0.85);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Sub-Navigation Bar */
        .sub-nav-wrapper {
          position: sticky;
          top: 68px;
          z-index: 150;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-bottom: 1px solid var(--border-card);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: var(--transition);
        }

        .sub-nav-scroll {
          display: flex;
          gap: 0.65rem;
          overflow-x: auto;
          padding: 0.85rem 0;
          scrollbar-width: none;
        }

        .sub-nav-scroll::-webkit-scrollbar {
          display: none;
        }

        .sub-nav-btn {
          white-space: nowrap;
          padding: 0.65rem 1.25rem;
          border-radius: 99px;
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          color: var(--text-main);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .sub-nav-btn:hover {
          background: var(--bg-card-subtle);
          border-color: var(--color-gold);
          color: var(--color-gold);
          transform: translateY(-1px);
        }

        .sub-nav-btn.active {
          background: var(--color-charcoal);
          color: var(--color-gold);
          border-color: var(--color-gold);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        [data-theme='dark'] .sub-nav-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          color: var(--text-main);
        }

        [data-theme='dark'] .sub-nav-btn:hover {
          background: #232B32;
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        [data-theme='dark'] .sub-nav-btn.active {
          background: var(--color-gold);
          color: #1A1F23;
          border-color: var(--color-gold);
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.35);
        }

        /* Sections */
        .info-sections-wrapper {
          padding-top: clamp(1.5rem, 3vw, 2.5rem);
        }

        .info-section {
          padding: clamp(3.5rem, 6vw, 5.5rem) 0;
          border-bottom: 1px solid var(--border-card);
          scroll-margin-top: 130px;
        }

        .info-section:last-of-type {
          border-bottom: none;
        }

        .section-title-wrap {
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
        }

        .section-badge {
          display: inline-block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-weight: 700;
          color: var(--color-gold);
          margin-bottom: 0.5rem;
          background: rgba(212, 175, 55, 0.12);
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .section-title-wrap h2 {
          font-size: clamp(1.85rem, 3.5vw, 2.5rem);
          font-family: var(--font-serif);
          color: var(--text-main);
          margin-bottom: 0.65rem;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .section-lead {
          font-size: clamp(1.05rem, 1.4vw, 1.18rem);
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 820px;
        }

        .intro-text {
          font-size: 1.08rem;
          line-height: 1.8;
          color: var(--text-body);
          margin-bottom: clamp(1.75rem, 3vw, 2.5rem);
          max-width: 900px;
        }

        .highlight-card {
          background: var(--bg-card);
          padding: clamp(1.75rem, 3vw, 2.5rem);
          border-radius: 16px;
          border: 1px solid var(--border-card);
          border-left: 5px solid var(--color-gold);
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
          box-shadow: var(--shadow-card);
        }

        .highlight-card .intro-text {
          margin-bottom: 0;
        }

        .rules-grid, .etiquette-grid, .logistics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: clamp(1.5rem, 2.5vw, 2.25rem);
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .rule-card, .etiquette-card, .logistics-card {
          background: var(--bg-card);
          padding: clamp(1.75rem, 2.5vw, 2.25rem);
          border-radius: 16px;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .rule-card:hover, .etiquette-card:hover, .logistics-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-gold);
        }

        .rule-icon, .etiquette-icon {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .rule-card h3, .etiquette-card h3, .logistics-card h3 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 0.65rem;
          color: var(--text-main);
          line-height: 1.3;
        }

        .rule-card p, .etiquette-card p, .logistics-card p {
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--text-muted);
        }

        .medical-box {
          background: linear-gradient(135deg, #1C2227 0%, #121619 100%);
          color: white;
          padding: clamp(2rem, 3.5vw, 3rem);
          border-radius: 18px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
        }

        .medical-box h4 {
          color: var(--color-gold);
          font-family: var(--font-serif);
          font-size: clamp(1.35rem, 2vw, 1.6rem);
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .medical-item {
          margin-bottom: 1.25rem;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
        }

        .medical-item strong {
          color: #FFFFFF;
          font-weight: 700;
          display: inline-block;
          margin-right: 0.35rem;
        }

        .medical-item.emergency {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: #F3D989;
          font-weight: 500;
        }

        .medical-item.emergency strong {
          color: var(--color-gold);
        }

        /* Table */
        .table-responsive {
          overflow-x: auto;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border-card);
        }

        .permits-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-card);
        }

        .permits-table th {
          background: #171C20;
          color: var(--color-gold);
          padding: 1.2rem 1.6rem;
          text-align: left;
          font-family: var(--font-serif);
          font-size: 1.05rem;
          letter-spacing: 0.03em;
          border-bottom: 2px solid rgba(212, 175, 55, 0.3);
        }

        .permits-table td {
          padding: 1.15rem 1.6rem;
          border-bottom: 1px solid var(--border-card);
          font-size: 0.98rem;
          color: var(--text-main);
          line-height: 1.5;
        }

        .permits-table tr:last-child td {
          border-bottom: none;
        }

        .permits-table tr:hover td {
          background: rgba(212, 175, 55, 0.03);
        }

        .bold-cell {
          font-weight: 700;
          color: var(--text-main);
        }

        .badge-tag {
          display: inline-block;
          background: rgba(107, 142, 111, 0.15);
          color: #2D4D32;
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 700;
          border: 1px solid rgba(107, 142, 111, 0.25);
        }

        [data-theme='dark'] .badge-tag {
          background: rgba(212, 175, 55, 0.15);
          color: var(--color-gold);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .checklist-box {
          background: var(--bg-card);
          padding: clamp(1.75rem, 3vw, 2.5rem);
          border-radius: 16px;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
        }

        .checklist-box h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
          color: var(--text-main);
        }

        .check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .check-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.6;
        }

        .check-icon {
          color: var(--color-gold);
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        /* Seasons Grid */
        .seasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: clamp(1.5rem, 2.5vw, 2.25rem);
        }

        .season-card {
          background: var(--bg-card);
          padding: clamp(1.75rem, 2.5vw, 2.25rem);
          border-radius: 16px;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: var(--transition);
        }

        .season-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-5px);
          box-shadow: var(--shadow-card-hover);
        }

        .season-header h3 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--text-main);
        }

        .season-tag {
          font-size: 0.82rem;
          color: var(--color-gold);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .season-temp {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .season-desc {
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--text-body);
          flex-grow: 1;
        }

        .season-footer {
          border-top: 1px solid var(--border-card);
          padding-top: 1rem;
          font-size: 0.92rem;
          color: var(--text-main);
        }

        /* Packing Grid */
        .packing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: clamp(1.5rem, 2.5vw, 2.25rem);
        }

        .packing-card {
          background: var(--bg-card);
          padding: clamp(1.75rem, 2.5vw, 2.25rem);
          border-radius: 16px;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
        }

        .packing-card:hover {
          border-color: var(--color-gold);
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
        }

        .packing-card h3 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
          color: var(--text-main);
          border-bottom: 2px solid var(--color-gold);
          padding-bottom: 0.65rem;
        }

        .packing-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .packing-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.96rem;
          color: var(--text-body);
          line-height: 1.6;
        }

        .bullet {
          color: var(--color-gold);
          font-size: 0.75rem;
          margin-top: 4px;
        }

        /* FAQs */
        .faqs-accordion {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          border-radius: 14px;
          padding: clamp(1.25rem, 2vw, 1.75rem) clamp(1.5rem, 2.5vw, 2rem);
          cursor: pointer;
          transition: var(--transition);
        }

        .faq-item:hover {
          border-color: var(--color-gold);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        }

        .faq-item.open {
          border-color: var(--color-gold);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.12);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-main);
          margin: 0;
          line-height: 1.4;
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          color: var(--color-gold);
          font-weight: bold;
          margin-left: 1rem;
          flex-shrink: 0;
        }

        .faq-answer {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-card);
          color: var(--text-body);
          line-height: 1.75;
          font-size: 1rem;
        }

        /* CTA Box */
        .info-cta-box {
          margin-top: clamp(3.5rem, 6vw, 5.5rem);
          background: linear-gradient(135deg, #1C2227 0%, #121619 100%);
          color: white;
          padding: clamp(2.5rem, 5vw, 4rem);
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .cta-eyebrow {
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.82rem;
          font-weight: 700;
          display: block;
          margin-bottom: 0.65rem;
        }

        .cta-content h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .cta-content p {
          color: rgba(255, 255, 255, 0.85);
          max-width: 600px;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        @media (max-width: 968px) {
          .info-cta-box {
            flex-direction: column;
            text-align: center;
            padding: clamp(2rem, 4vw, 2.5rem);
          }
          .cta-content p {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default GeneralInfoPage;
