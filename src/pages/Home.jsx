import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Destinations from '../components/Destinations'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Destinations />
            <Services />
            <Testimonials />
        </>
    );
}

export default Home;
