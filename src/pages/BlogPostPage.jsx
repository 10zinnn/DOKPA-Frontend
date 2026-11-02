import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getBlogPostById, getRecentBlogPosts } from '../data/blogData'

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = getBlogPostById(postId);
  const relatedPosts = getRecentBlogPosts(postId, 3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      {/* Article Hero */}
      <header className="article-hero">
        <div className="container reveal">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/blog">Blog</Link>
            <span> / </span>
            <span>{post.title}</span>
          </div>
          <div className="article-category-badge">{post.category}</div>
          <h1>{post.title}</h1>
          <div className="article-meta-bar">
            <div className="author-detail">
              <span className="author-avatar">{post.author.avatar}</span>
              <div>
                <span className="author-name">{post.author.name}</span>
                <span className="author-role">{post.author.role}</span>
              </div>
            </div>
            <div className="meta-dates">
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Header Image */}
      <div className="container article-image-wrap reveal">
        <img src={post.image} alt={post.title} />
      </div>

      {/* Article Body */}
      <div className="container article-layout">
        <main className="article-main">
          <div className="article-excerpt-lead">
            {post.excerpt}
          </div>

          <div className="article-body-content">
            {post.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return <p key={idx} className="body-paragraph">{block.text}</p>;
              }
              if (block.type === 'heading') {
                return <h2 key={idx} className="body-heading">{block.text}</h2>;
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="body-quote">
                    <p>"{block.text}"</p>
                  </blockquote>
                );
              }
              if (block.type === 'callout') {
                return (
                  <div key={idx} className="body-callout">
                    <h4>{block.title}</h4>
                    <ul>
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Key Takeaways */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="takeaways-box">
              <h3>Key Field Takeaways</h3>
              <ul className="takeaways-list">
                {post.takeaways.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="article-tags-wrap">
            <span className="tags-label">Tagged under:</span>
            <div className="tags-list">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag-pill">#{tag}</span>
              ))}
            </div>
          </div>

          {/* Post Footer CTA */}
          <div className="post-cta-card">
            <div className="post-cta-text">
              <h4>Ready to experience Ladakh firsthand?</h4>
              <p>Join Dokpa on carefully planned expeditions focused on authenticity, connection, and safety.</p>
            </div>
            <a href="/#contact" className="btn btn-primary">Plan Your Journey</a>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="sidebar-card author-bio-card">
            <div className="sidebar-author-head">
              <span className="author-avatar large">{post.author.avatar}</span>
              <div>
                <h5>{post.author.name}</h5>
                <span className="author-title">{post.author.role}</span>
              </div>
            </div>
            <p className="author-bio">
              Native to the high valleys of Ladakh, dedicated to high-altitude safety, local nomadic culture, and responsible mountaineering.
            </p>
          </div>

          <div className="sidebar-card">
            <h4>Dokpa Ethos</h4>
            <p className="ethos-text">
              Guidance over risk. Experience over speed. Connection over convenience.
            </p>
            <Link to="/#about" className="sidebar-link">Learn Our Story →</Link>
          </div>

          <div className="sidebar-card">
            <h4>Field Guides</h4>
            <ul className="sidebar-links-list">
              <li><Link to="/general-info#acclimatization">Altitude Protocols</Link></li>
              <li><Link to="/general-info#permits">Permits & Regulations</Link></li>
              <li><Link to="/general-info#packing">Layering & Gear Checklist</Link></li>
              <li><Link to="/general-info#faqs">Travel FAQs</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Stories */}
      {relatedPosts.length > 0 && (
        <section className="related-stories-section">
          <div className="container">
            <div className="related-header">
              <h3>More From The Trail Journal</h3>
              <Link to="/blog" className="view-all-link">View All Stories →</Link>
            </div>
            <div className="related-grid">
              {relatedPosts.map(rel => (
                <article key={rel.id} className="related-card">
                  <Link to={`/blog/${rel.id}`}>
                    <div className="related-img-wrap">
                      <img src={rel.image} alt={rel.title} loading="lazy" />
                      <span className="related-cat">{rel.category}</span>
                    </div>
                    <div className="related-body">
                      <span className="related-date">{rel.date}</span>
                      <h4>{rel.title}</h4>
                      <p>{rel.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-post-page {
          background: var(--bg-app);
          min-height: 100vh;
          padding-bottom: clamp(4rem, 8vw, 8rem);
        }

        .article-hero {
          padding-top: clamp(6rem, 10vw, 8.5rem);
          padding-bottom: clamp(3rem, 5vw, 4.5rem);
          background: #151A1D;
          color: white;
          text-align: center;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          position: relative;
        }

        .article-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(107, 142, 111, 0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .article-hero .container {
          position: relative;
          z-index: 1;
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

        .article-category-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.18);
          color: var(--color-gold);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          margin-bottom: 1rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .article-hero h1 {
          font-size: clamp(1.85rem, 4vw, 3rem);
          font-family: var(--font-serif);
          max-width: 920px;
          margin: 0 auto 1.5rem;
          line-height: 1.25;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }

        .article-meta-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.75);
        }

        .author-detail {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-align: left;
        }

        .author-avatar {
          font-size: 1.6rem;
        }

        .author-name {
          font-weight: 700;
          color: white;
          display: block;
          font-size: 0.95rem;
        }

        .author-role {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
          display: block;
        }

        .meta-dates {
          display: flex;
          gap: 0.65rem;
          align-items: center;
          color: rgba(255, 255, 255, 0.75);
        }

        /* Image Wrap */
        .article-image-wrap {
          margin-top: clamp(-2rem, -3vw, -3rem);
          margin-bottom: clamp(2.5rem, 4vw, 4rem);
          max-width: 1060px;
          padding: 0 1.5rem;
        }

        .article-image-wrap img {
          width: 100%;
          max-height: 540px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-card);
        }

        /* Article Layout */
        .article-layout {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: clamp(2.5rem, 4vw, 4.5rem);
          max-width: 1060px;
        }

        .article-main {
          display: flex;
          flex-direction: column;
        }

        .article-excerpt-lead {
          font-size: clamp(1.15rem, 1.8vw, 1.3rem);
          font-family: var(--font-serif);
          font-weight: 400;
          line-height: 1.75;
          color: var(--color-gold);
          border-left: 4px solid var(--color-gold);
          padding: clamp(1rem, 2vw, 1.75rem) clamp(1.25rem, 2.5vw, 2rem);
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
          background: rgba(212, 175, 55, 0.06);
          border-radius: 0 12px 12px 0;
        }

        [data-theme='dark'] .article-excerpt-lead {
          background: rgba(212, 175, 55, 0.08);
        }

        .article-body-content {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          font-size: clamp(1rem, 1.15vw, 1.08rem);
          line-height: 1.85;
          color: var(--text-body);
        }

        .body-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.55rem, 2.5vw, 1.9rem);
          color: var(--text-main);
          margin-top: 0.75rem;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .body-paragraph {
          color: var(--text-body);
        }

        .body-quote {
          background: var(--bg-card);
          border-left: 5px solid var(--color-gold);
          padding: clamp(1.5rem, 2.5vw, 2.25rem);
          border-radius: 0 16px 16px 0;
          font-style: italic;
          font-family: var(--font-serif);
          font-size: clamp(1.15rem, 1.8vw, 1.3rem);
          color: var(--text-main);
          margin: 0.5rem 0;
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border-card);
          border-left: 5px solid var(--color-gold);
        }

        .body-callout {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          padding: clamp(1.75rem, 2.5vw, 2.5rem);
          border-radius: 16px;
          margin: 0.5rem 0;
          box-shadow: var(--shadow-card);
        }

        .body-callout h4 {
          font-family: var(--font-serif);
          color: var(--color-gold);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .body-callout ul {
          list-style-type: disc;
          padding-left: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          color: var(--text-body);
          font-size: 0.98rem;
          line-height: 1.65;
        }

        /* Takeaways */
        .takeaways-box {
          margin-top: clamp(2rem, 3.5vw, 3rem);
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-radius: 18px;
          padding: clamp(2rem, 3vw, 2.75rem);
          box-shadow: var(--shadow-card);
          border-top: 4px solid var(--color-gold);
        }

        .takeaways-box h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .takeaways-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .takeaways-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.65;
        }

        .check-icon {
          color: var(--color-gold);
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.5;
          flex-shrink: 0;
        }

        /* Tags */
        .article-tags-wrap {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: clamp(2rem, 3.5vw, 3rem);
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-card);
          flex-wrap: wrap;
        }

        .tags-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .tags-list {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .tag-pill {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .tag-pill:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        /* CTA */
        .post-cta-card {
          margin-top: clamp(2.5rem, 4vw, 3.5rem);
          background: linear-gradient(135deg, #1C2227 0%, #121619 100%);
          color: white;
          padding: clamp(2rem, 3.5vw, 3rem);
          border-radius: 18px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.75rem;
        }

        .post-cta-text h4 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
          color: #FFFFFF;
        }

        .post-cta-text p {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.55;
        }

        /* Sidebar */
        .article-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sidebar-card {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          padding: clamp(1.5rem, 2vw, 2rem);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          transition: var(--transition);
        }

        .sidebar-card:hover {
          border-color: rgba(212, 175, 55, 0.3);
        }

        .sidebar-card h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-main);
          margin-bottom: 0.85rem;
          padding-bottom: 0.65rem;
          border-bottom: 2px solid var(--border-card);
        }

        .sidebar-author-head {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .author-avatar.large {
          font-size: 2.25rem;
        }

        .author-title {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: block;
        }

        .author-bio {
          font-size: 0.92rem;
          line-height: 1.7;
          color: var(--text-body);
        }

        .ethos-text {
          font-size: 0.96rem;
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 1rem;
          line-height: 1.65;
        }

        .sidebar-link {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-gold);
          text-decoration: none;
          transition: var(--transition);
        }

        .sidebar-link:hover {
          opacity: 0.8;
        }

        .sidebar-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .sidebar-links-list a {
          text-decoration: none;
          color: var(--text-body);
          font-size: 0.95rem;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0;
          border-bottom: 1px solid var(--border-card);
        }

        .sidebar-links-list a::before {
          content: '→';
          color: var(--color-gold);
          font-size: 0.85rem;
        }

        .sidebar-links-list a:hover {
          color: var(--color-gold);
          padding-left: 4px;
        }

        .sidebar-links-list li:last-child a {
          border-bottom: none;
        }

        /* Related Stories */
        .related-stories-section {
          margin-top: clamp(4rem, 7vw, 6rem);
          border-top: 2px solid var(--border-card);
          padding-top: clamp(3rem, 5vw, 4.5rem);
        }

        .related-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
        }

        .related-header h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          color: var(--text-main);
        }

        .view-all-link {
          color: var(--color-gold);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.92rem;
          transition: var(--transition);
        }

        .view-all-link:hover {
          opacity: 0.8;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: clamp(1.5rem, 2.5vw, 2.25rem);
        }

        .related-card {
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-card);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
        }

        .related-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-card-hover);
        }

        .related-card a {
          text-decoration: none;
          color: inherit;
        }

        .related-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .related-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .related-card:hover .related-img-wrap img {
          transform: scale(1.05);
        }

        .related-cat {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(22, 27, 30, 0.88);
          color: var(--color-gold);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .related-body {
          padding: clamp(1.25rem, 2vw, 1.75rem);
        }

        .related-date {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.4rem;
        }

        .related-body h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-main);
          margin-bottom: 0.65rem;
          line-height: 1.35;
          transition: var(--transition);
        }

        .related-card:hover .related-body h4 {
          color: var(--color-gold);
        }

        .related-body p {
          font-size: 0.9rem;
          color: var(--text-body);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 968px) {
          .article-layout {
            grid-template-columns: 1fr;
          }
          .post-cta-card {
            flex-direction: column;
            text-align: center;
          }
          .article-image-wrap {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
