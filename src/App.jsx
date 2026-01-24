import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import DestinationsPage from './pages/DestinationsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ActivityDetailPage from './pages/ActivityDetailPage'
import Footer from './components/Footer'

// Scroll To Top component to handle route changes
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// Component to handle reveal animations
function RevealObserver() {
    const location = useLocation();

    useEffect(() => {
        // Small delay to ensure DOM is ready after route change
        const timer = setTimeout(() => {
            const revealElements = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => observer.observe(el));
            
            return () => observer.disconnect();
        }, 50);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return null;
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'var(--bg-app)',
                    color: 'var(--text-main)'
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Oops!</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
                        Something went wrong. We're working on getting this fixed as soon as possible.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '99px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                        }}
                    >
                        Return Home
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

// 404 Not Found Component
function NotFound() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: 'var(--h1)', marginBottom: 'var(--s-4)' }}>404</h1>
            <p style={{ fontSize: 'var(--body)', marginBottom: 'var(--s-8)', color: 'var(--text-muted)' }}>
                The path you're looking for doesn't exist in these mountains.
            </p>
            <a href="/" className="btn btn-primary">Return to Base Camp</a>
        </div>
    );
}

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ErrorBoundary>
            <Router>
                <ScrollToTop />
                <RevealObserver />
                <a href="#main-content" className="skip-to-content">
                    Skip to main content
                </a>
                <div className="app">
                    <Navigation theme={theme} toggleTheme={toggleTheme} />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/destinations" element={<DestinationsPage />} />
                            <Route path="/activities" element={<ActivitiesPage />} />
                            <Route path="/activities/:activityId" element={<ActivityDetailPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;


