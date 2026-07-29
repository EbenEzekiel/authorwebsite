import React from 'react';
import {FaEnvelope, FaPhoneAlt, FaMapPin, FaPaperPlane } from 'react-icons/fa';

import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';

export default function Contacts () {
  return (
    <div className='app'>
      <Navbar />
      <section id="contact" className="contact-section m">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-heading">Reach out</h3>
              <p className="contact-detail"><FaEnvelope className="contact-icon" /> myfaithtvnetwork@gmail.com</p>
              <p className="contact-detail"><FaPhoneAlt className="contact-icon" /> +1 (678) 886-5117</p>
              <p className="contact-detail"><FaMapPin className="contact-icon" /> Atlanta, Georgia, USA · global reach</p>
              <p className="contact-message">“I'd love to hear from you — whether you're a minister, a church leader, or someone ready to take your message further.”</p>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <input type="text" placeholder="Your name" className="form-input" required />
                <input type="email" placeholder="Email address" className="form-input" required />
                <input type="text" placeholder="Church or ministry (optional)" className="form-input" />
                <textarea placeholder="Your message ..." rows="4" className="form-textarea"></textarea>
                <button type="submit" className="form-button">
                  Send message <FaPaperPlane className="button-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};