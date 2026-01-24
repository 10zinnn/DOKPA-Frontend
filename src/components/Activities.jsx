import React, { useRef, useState, useEffect } from 'react'

const Activities = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const activities = [
    {
      title: 'Rock Climbing',
      icon: '🧗',
      description: 'Scale dramatic cliff faces and granite walls with expert guidance.',
      difficulty: 'Intermediate to Advanced',
      season: 'Apr - Oct',
      image: '/rock-climbing.jpg'
    },
    {
      title: 'Ice Climbing',
      icon: '🧊',
      description: 'Conquer frozen waterfalls and glacial formations in winter wonderland.',
      difficulty: 'Advanced',
      season: 'Dec - Feb',
      image: '/ice-climbing.jpg'
    },
    {
      title: 'Motor Biking',
      icon: '🏍️',
      description: 'Ride through the highest motorable passes on legendary Himalayan routes.',
      difficulty: 'All Levels',
      season: 'May - Sep',
      image: '/motor-biking.jpg'
    },
    {
      title: 'River Rafting',
      icon: '🚣',
      description: 'Navigate thrilling rapids through pristine mountain river valleys.',
      difficulty: 'Beginner to Advanced',
      season: 'Jun - Aug',
      image: '/river-rafting.jpg'
    },
    {
      title: 'Trekking',
      icon: '🥾',
      description: 'Journey through ancient trails, remote villages, and breathtaking landscapes.',
      difficulty: 'All Levels',
      season: 'May - Oct',
      image: '/trekking.jpg'
    },
    {
      title: 'Expeditions',
      icon: '⛰️',
      description: 'Multi-day adventures to summit peaks and explore uncharted territories.',
      difficulty: 'Advanced',
      season: 'Jun - Sep',
      image: '/peak-climbing.jpg'
    },
    {
      title: 'Cultural Tours',
      icon: '🏛️',
      description: 'Immerse in Buddhist monasteries, local traditions, and Ladakhi heritage.',
      difficulty: 'Easy',
      season: 'Year Round',
      image: '/cultural-tours.jpg'
    }
  ];

  // Create infinite loop by tripling the array
  const infiniteActivities = [...activities, ...activities, ...activities];
  const totalSlides = activities.length;

  // Scroll to specific index
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 380 + 32; // card width + gap
    const targetScroll = index * cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Handle scroll navigation
  const scroll = (direction) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const newIndex = direction === 'left' 
      ? currentIndex - 1 
      : currentIndex + 1;
    
    scrollToIndex(totalSlides + newIndex);
    setCurrentIndex(newIndex);
    
    setTimeout(() => setIsScrolling(false), 600);
  };

  // Handle dot click
  const goToSlide = (index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    scrollToIndex(totalSlides + index);
    setCurrentIndex(index);
    
    setTimeout(() => setIsScrolling(false), 600);
  };

  // Handle infinite scroll loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 380 + 32;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      
      // Calculate which slide we're on (0-6)
      const slideIndex = index % totalSlides;
      setCurrentIndex(slideIndex);

      // Reset position for infinite scroll
      if (index <= 0) {
        // Scrolled too far left, jump to end of middle section
        container.scrollLeft = totalSlides * cardWidth;
      } else if (index >= totalSlides * 2) {
        // Scrolled too far right, jump to start of middle section
        container.scrollLeft = totalSlides * cardWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    
    // Initialize at middle section
    container.scrollLeft = totalSlides * (380 + 32);

    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title-alt">Adventure Activities</h2>
          <p className="section-intro">
            From adrenaline-pumping adventures to soul-enriching cultural experiences,
            discover the full spectrum of Himalayan exploration.
          </p>
        </div>

        <div className="activities-scroll-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
          <button 
            className="scroll-btn scroll-btn-left" 
            onClick={() => scroll('left')}
            aria-label="Previous activity"
          >
            ‹
          </button>
          
          <div className="activities-scroll-container" ref={scrollRef}>
            {infiniteActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                  <div className="activity-icon">{activity.icon}</div>
                </div>
                <div className="activity-content">
                  <h3>{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-meta">
                    <div className="meta-item">
                      <span className="meta-label">Difficulty</span>
                      <span className="meta-value">{activity.difficulty}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Season</span>
                      <span className="meta-value">{activity.season}</span>
                    </div>
                  </div>
                  <a href="#contact" className="activity-link">
                    Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="scroll-btn scroll-btn-right" 
            onClick={() => scroll('right')}
            aria-label="Next activity"
          >
            ›
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="dot-indicators reveal" style={{ transitionDelay: '0.3s' }}>
          {activities.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to activity ${index + 1}`}
            />
          ))}
        </div>

        <div className="scroll-hint reveal" style={{ transitionDelay: '0.4s' }}>
          <span>← Swipe or scroll to explore →</span>
        </div>
      </div>
      <style>{`
        .activities-section {
          background: var(--bg-app);
          overflow: hidden;
        }

        .activities-scroll-wrapper {
          position: relative;
          margin-top: var(--s-12);
        }

        .activities-scroll-container {
          display: flex;
          gap: var(--s-8);
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: var(--s-4) var(--s-2);
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .activities-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .activity-card {
          flex: 0 0 380px;
          background: var(--bg-alt);
          border-radius: var(--radius-outer);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          transition: var(--transition);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
        }

        .activity-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }

        .activity-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .activity-card:hover .activity-image img {
          transform: scale(1.1);
        }

        .activity-icon {
          position: absolute;
          top: var(--s-4);
          right: var(--s-4);
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: var(--shadow-soft);
        }

        [data-theme='dark'] .activity-icon {
          background: rgba(26, 31, 35, 0.95);
        }

        .activity-content {
          padding: var(--s-8);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .activity-content h3 {
          font-size: 1.75rem;
          margin-bottom: var(--s-3);
          font-family: var(--font-serif);
          color: var(--text-main);
        }

        .activity-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--s-6);
          flex: 1;
        }

        .activity-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--s-4);
          margin-bottom: var(--s-8);
          padding: var(--s-4);
          background: var(--bg-app);
          border-radius: var(--radius-inner);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: var(--s-1);
        }

        .meta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .meta-value {
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .activity-link {
          display: inline-flex;
          align-items: center;
          gap: var(--s-2);
          color: var(--accent);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .activity-link:hover {
          gap: var(--s-4);
          color: var(--accent-hover);
        }

        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          z-index: var(--z-dropdown);
          box-shadow: var(--shadow-strong);
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .scroll-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-50%) scale(1.1);
        }

        .scroll-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .scroll-btn-left {
          left: -25px;
        }

        .scroll-btn-right {
          right: -25px;
        }

        /* Dot Indicators */
        .dot-indicators {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--s-3);
          margin-top: var(--s-8);
          padding: var(--s-4);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-muted);
          opacity: 0.3;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          opacity: 0.6;
          transform: scale(1.2);
        }

        .dot.active {
          background: var(--accent);
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        .scroll-hint {
          text-align: center;
          margin-top: var(--s-4);
          color: var(--text-muted);
          font-size: 0.9rem;
          font-style: italic;
        }

        @media (max-width: 1200px) {
          .scroll-btn {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .activity-card {
            flex: 0 0 320px;
          }

          .activity-image {
            height: 200px;
          }

          .activity-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .scroll-hint {
            font-size: 0.8rem;
          }

          .dot {
            width: 8px;
            height: 8px;
          }

          .dot.active {
            width: 24px;
          }
        }

        /* Smooth scroll snap on mobile */
        @media (max-width: 968px) {
          .activities-scroll-container {
            scroll-snap-type: x mandatory;
            gap: var(--s-4);
          }

          .activity-card {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Activities;
