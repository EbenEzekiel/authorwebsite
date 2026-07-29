import React from 'react';
import Hero from '../assets/Hero';
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import HomeBody from '../assets/HomeBody';

export default function Home () {
    return (
        <div className='app'>
            <Navbar />
            <div className='m'>
                <Hero />
                <HomeBody />
            </div>
            <Footer />
        </div>
    )
}