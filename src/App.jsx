import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import DestinationsPage from './pages/DestinationsPage'
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
        <Router>
            <ScrollToTop />
            <RevealObserver />
            <div className="app">
                <Navigation theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<DestinationsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


