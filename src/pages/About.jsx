import React from 'react';
import { 
  FaChurch, FaGlobeAfrica, FaHashtag, FaPrayingHands, 
  FaAward, FaUsers, FaBookOpen, FaMicrophoneAlt, 
  FaInstagram, FaYoutube, FaTwitter, FaFacebook, 
  FaLinkedin, FaTiktok, FaEnvelope, FaPhoneAlt, 
  FaMapPin, FaPaperPlane, FaGlobe 
} from 'react-icons/fa';
import author_picture from '../assets/images/author_picture.jpeg';

import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';


export default function About () {
  const achievements = [
    { icon: <FaAward />, text: "Best Christian Author 2024 (Africa)" },
    { icon: <FaUsers />, text: "Trained 1,200+ ministers in 14 countries" },
    { icon: <FaBookOpen />, text: "Bestselling author of 4 books on ministry & media" },
    { icon: <FaMicrophoneAlt />, text: "Keynote speaker at global church conferences" }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaYoutube />, label: "YouTube" },
    { icon: <FaTwitter />, label: "X" },
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaLinkedin />, label: "LinkedIn" },
    { icon: <FaTiktok />, label: "TikTok" }
  ];

  return (
    <div className='app'>
      <Navbar />
      <section id="about" className="about-section m">
        <div className="container">
          <h2 className="section-title">About Dr. Abiola Fashina (esq).</h2>
          <div className="about-container">
            <div className="about-content">
              <h3 className="about-name">Abiola Fashina (esq).</h3>
              <p className="about-role">Minister · Author · Digital Mission Advocate</p>
              <p className="about-text">
                Dr Abiola Fashina is a trained lawyer, TV/ Social media Coach, a transformational conference speaker and a book publishing and marketing expert and trainer with several online courses and directories.

                Dr Abiola Fashina is the founder and CEO of several for profit companies and the Atlanta Georgia USA based non profit organization - Myfaithtvnetwork International Inc - and is also on the board of several companies and non profit organizations worldwide.

She has authored several books that inspire, motivate and equip believers worldwide.

Dr Abiola Fashina has dual residencies in both Nigeria and USA from where she travels to speak at international conferences giving hope and strengthening the faith of believers.
Dr. Abiola Fashina (esq). is an Evangelist, author, and speaker who believes that “ministers can be planted locally but spread globally.” She equips churches and leaders to use social media as a tool for kingdom advancement, without losing the heart of local community.
              </p>
              <p className="about-text">
                With over a decade of ministry experience, she has trained hundreds of pastors across Africa, Europe, and the Americas on digital presence, content creation, and authentic online engagement.
              </p>
              <ul className="achievements-list">
                {achievements.map((item, idx) => (
                  <li key={idx} className="achievement-item">
                    <span className="achievement-icon">{item.icon}</span> {item.text}
                  </li>
                ))}
              </ul>
              <div className="social-links">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href="#" className="social-link">
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>
              <p className="about-quote">
                <FaGlobe className="quote-icon" /> “Visibility is not vanity — it’s stewardship.”
              </p>
            </div>
            <div className="about-image-wrapper">
              <img 
                src={author_picture} 
                alt="Dr. Abiola Fashina (esq). - author" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};