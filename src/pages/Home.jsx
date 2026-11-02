import React from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import About from '../components/About'
import FeaturedTrips from '../components/FeaturedTrips'
import Activities from '../components/Activities'
import Destinations from '../components/Destinations'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <About />
            <FeaturedTrips />
            <Activities />
            <Destinations />
            <Testimonials />
            <ContactForm />
        </>
    );
}

export default Home;
