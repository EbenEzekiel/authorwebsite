// App.js
import React, { useState } from 'react';
import './App.css';
import hero from "./assets/hero.jpeg";
import { 
  FaChurch, FaGlobeAfrica, FaHashtag, FaPrayingHands, 
  FaAward, FaUsers, FaBookOpen, FaMicrophoneAlt, 
  FaInstagram, FaYoutube, FaTwitter, FaFacebook, 
  FaLinkedin, FaTiktok, FaEnvelope, FaPhoneAlt, 
  FaMapPin, FaPaperPlane, FaGlobe 
} from 'react-icons/fa';

import booksData from './assets/booksData.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import BookShelve from './pages/BookShelve';
import About from './pages/About';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// ------------------------------------------------------------------
// DATA: Book object (iterated over in BookShelf)
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// COMPONENTS
// ------------------------------------------------------------------

// Navigation


// Hero Section


// Book Shelf


// About Section


// Contact Section


// Footer


// ------------------------------------------------------------------
// MAIN APP
// ------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<BookShelve />} />
      </Routes>
    </BrowserRouter>
  )


  // return (
  //   <div className="app">
  //     <Navbar />
  //     <Hero />
  //     <BookShelf />
  //     <About />
  //     <Contact />
  //     <Footer />
  //   </div>
  // );
}

export default App;