import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../data/blogData'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Safety & Altitude', 'Nomadic Culture', 'Gear Guide', 'Expeditions', 'Sustainability'];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogData.find(post => post.featured) || blogData[0];

  return (
    <div className="blog-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container reveal">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <span>Blog</span>
          </div>
          <span className="eyebrow">The Dokpa Trail Journal</span>
          <h1>Mountain Stories & Field Notes</h1>
          <p className="subtitle">
            Insights on high-altitude survival, nomadic philosophy, gear mastery,
            and untold stories from the Trans-Himalayan wilderness.
          </p>
        </div>
      </header>

      <div className="container blog-content-wrapper">
        {/* Search & Category Filter Controls */}
        <div className="blog-controls reveal">
          <div className="category-pills">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-wrap">
            <input
              type="text"
              placeholder="Search stories, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>

        {/* Featured Story Banner (Only shown when viewing all without search) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="featured-banner reveal">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" />
              <span className="featured-badge">Featured Story</span>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="meta-category">{featuredPost.category}</span>
                <span className="meta-dot">•</span>
                <span className="meta-read">{featuredPost.readTime}</span>
                <span className="meta-dot">•</span>
                <span className="meta-date">{featuredPost.date}</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="author-wrap">
                <span className="author-avatar">{featuredPost.author.avatar}</span>
                <div className="author-info">
                  <span className="author-name">{featuredPost.author.name}</span>
                  <span className="author-role">{featuredPost.author.role}</span>
                </div>
              </div>
              <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary read-btn">
                Read Full Story →
              </Link>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        <div className="stories-section">
          <div className="stories-header">
            <h3>
              {selectedCategory === 'All' ? 'Latest Dispatches' : `${selectedCategory} Stories`}
              <span className="stories-count">({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-posts-box">
              <p>No stories found matching your filter or query.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="stories-grid">
              {filteredPosts.map((post, idx) => (
                <article key={post.id} className="story-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <Link to={`/blog/${post.id}`} className="story-card-link">
                    <div className="story-card-image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span className="card-category-badge">{post.category}</span>
                    </div>
                    <div className="story-card-body">
                      <div className="card-meta">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4>{post.title}</h4>
                      <p className="card-excerpt">{post.excerpt}</p>
                      <div className="story-card-footer">
                        <div className="author-small">
                          <span>{post.author.avatar}</span>
                          <span>{post.author.name}</span>
                        </div>
                        <span className="read-more-link">Read Story →</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-card reveal">
          <div className="newsletter-text">
            <span className="eyebrow">The Himalayan Dispatch</span>
            <h3>Stay connected to the high passes</h3>
            <p>Receive seasonal expedition logs, mountain safety guides, and early announcements for future trekking departures.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Dokpa Dispatches!'); }}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <style>{`
        .blog-page {
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
          background: radial-gradient(circle at center, rgba(107, 142, 111, 0.22) 0%, transparent 75%);
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

        .blog-content-wrapper {
          padding-top: clamp(2rem, 4vw, 3.5rem);
        }

        /* Controls */
        .blog-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
          flex-wrap: wrap;
        }

        .category-pills {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .category-pill {
          padding: 0.65rem 1.35rem;
          border-radius: 99px;
          border: 1px solid var(--border-card);
          background: var(--bg-card);
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .category-pill:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          background: var(--bg-card-subtle);
          transform: translateY(-1px);
        }

        .category-pill.active {
          background: var(--color-charcoal);
          color: var(--color-gold);
          border-color: var(--color-gold);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        [data-theme='dark'] .category-pill {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          color: var(--text-main);
        }

        [data-theme='dark'] .category-pill:hover {
          background: #232B32;
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        [data-theme='dark'] .category-pill.active {
          background: var(--color-gold);
          color: #1A1F23;
          border-color: var(--color-gold);
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.35);
        }

        .search-bar-wrap {
          position: relative;
          min-width: 290px;
        }

        .blog-search-input {
          width: 100%;
          padding: 0.75rem 1.25rem;
          padding-right: 2.4rem;
          border-radius: 99px;
          border: 1px solid var(--border-card);
          background: var(--bg-card);
          color: var(--text-main);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .blog-search-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
        }

        .clear-search {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1rem;
        }

        .clear-search:hover {
          color: var(--text-main);
        }

        /* Featured Banner */
        .featured-banner {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          background: var(--bg-card);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-card);
          margin-bottom: clamp(3.5rem, 6vw, 5rem);
          box-shadow: var(--shadow-card-hover);
        }

        .featured-image {
          position: relative;
          min-height: 400px;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--color-gold);
          color: #1A1F23;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 0.45rem 0.9rem;
          border-radius: 99px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .featured-content {
          padding: clamp(2rem, 3.5vw, 3.25rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .meta-category {
          color: var(--color-gold);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.82rem;
        }

        .meta-dot {
          opacity: 0.5;
        }

        .featured-content h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 2.8vw, 2.35rem);
          color: var(--text-main);
          margin-bottom: 1rem;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .featured-excerpt {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-body);
          margin-bottom: 1.5rem;
        }

        .author-wrap {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .author-avatar {
          font-size: 2rem;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .author-role {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .read-btn {
          align-self: flex-start;
          padding: 0.85rem 1.85rem;
          font-size: 0.95rem;
        }

        /* Stories Grid */
        .stories-section {
          margin-bottom: clamp(3.5rem, 6vw, 5.5rem);
        }

        .stories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: clamp(1.75rem, 3vw, 2.75rem);
          border-bottom: 2px solid var(--border-card);
          padding-bottom: 1rem;
        }

        .stories-header h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          color: var(--text-main);
        }

        .stories-count {
          font-size: 1rem;
          color: var(--text-muted);
          margin-left: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 500;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: clamp(1.75rem, 2.5vw, 2.5rem);
        }

        .story-card {
          background: var(--bg-card);
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
        }

        .story-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-gold);
        }

        .story-card-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .story-card-image {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .story-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .story-card:hover .story-card-image img {
          transform: scale(1.06);
        }

        .card-category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(22, 27, 30, 0.88);
          backdrop-filter: blur(6px);
          color: var(--color-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .story-card-body {
          padding: clamp(1.5rem, 2vw, 2rem);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
        }

        .story-card-body h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          line-height: 1.35;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          transition: var(--transition);
        }

        .story-card:hover .story-card-body h4 {
          color: var(--color-gold);
        }

        .card-excerpt {
          font-size: 0.96rem;
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .story-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-card);
          font-size: 0.88rem;
        }

        .author-small {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .read-more-link {
          font-weight: 700;
          color: var(--color-gold);
          transition: transform 0.2s ease;
        }

        .story-card:hover .read-more-link {
          transform: translateX(4px);
        }

        .no-posts-box {
          text-align: center;
          padding: clamp(3rem, 6vw, 5rem);
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px dashed var(--border-card);
        }

        .no-posts-box p {
          margin-bottom: 1.25rem;
          color: var(--text-muted);
          font-size: 1.05rem;
        }

        /* Newsletter */
        .newsletter-card {
          background: linear-gradient(135deg, #1C2227 0%, #121619 100%);
          color: white;
          padding: clamp(2.5rem, 5vw, 4rem);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .newsletter-text .eyebrow {
          color: var(--color-gold);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.82rem;
          font-weight: 700;
          display: block;
          margin-bottom: 0.65rem;
        }

        .newsletter-text h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .newsletter-text p {
          color: rgba(255, 255, 255, 0.85);
          max-width: 500px;
          line-height: 1.65;
          font-size: 1.02rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          max-width: 460px;
        }

        .newsletter-form input {
          flex-grow: 1;
          padding: 0.9rem 1.4rem;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }

        .newsletter-form input:focus {
          border-color: var(--color-gold);
          background: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 968px) {
          .featured-banner {
            grid-template-columns: 1fr;
          }
          .newsletter-card {
            flex-direction: column;
            text-align: center;
            padding: clamp(2rem, 4vw, 2.5rem);
          }
          .newsletter-text p {
            margin: 0 auto;
          }
          .newsletter-form {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
