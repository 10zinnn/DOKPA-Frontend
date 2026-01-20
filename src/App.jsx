import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import DestinationsPage from './pages/DestinationsPage'
import Footer from './components/Footer'

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
            <div className="app">
                <Navigation theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<DestinationsPage />} />
                </Routes>
                {/* Footer is inside page components for layout control, but could be here if globally consistent */}
            </div>
        </Router>
    );
}

export default App;

