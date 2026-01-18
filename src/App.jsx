import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Navigation />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
