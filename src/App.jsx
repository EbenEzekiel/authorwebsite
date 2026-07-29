// App.js
import React, { useState } from 'react';
import './App.css';
import hero from "./assets/hero.jpeg";
import author_picture from "./assets/author_picture.jpeg";
import { 
  FaChurch, FaGlobeAfrica, FaHashtag, FaPrayingHands, 
  FaAward, FaUsers, FaBookOpen, FaMicrophoneAlt, 
  FaInstagram, FaYoutube, FaTwitter, FaFacebook, 
  FaLinkedin, FaTiktok, FaEnvelope, FaPhoneAlt, 
  FaMapPin, FaPaperPlane, FaGlobe 
} from 'react-icons/fa';

// ------------------------------------------------------------------
// DATA: Book object (iterated over in BookShelf)
// ------------------------------------------------------------------
const booksData = [
  {
    id: 1,
    title: "The Digital Pulpit",
    year: "2024",
    category: "Ministry & Media",
    description: "How to preach beyond walls and reach nations through social platforms.",
    icon: <FaChurch className="book-icon" />
  },
  {
    id: 2,
    title: "Planted, Not Buried",
    year: "2023",
    category: "Church Growth",
    description: "Local roots, global fruits — a blueprint for the connected church.",
    icon: <FaGlobeAfrica className="book-icon" />
  },
  {
    id: 3,
    title: "#KingdomInfluence",
    year: "2025",
    category: "Social Strategy",
    description: "Practical social media tactics for ministers and Christian leaders.",
    icon: <FaHashtag className="book-icon" />
  },
  {
    id: 4,
    title: "Pray & Post",
    year: "2022",
    category: "Devotional",
    description: "Daily prayers for digital missionaries and online ministry.",
    icon: <FaPrayingHands className="book-icon" />
  }
];

// ------------------------------------------------------------------
// COMPONENTS
// ------------------------------------------------------------------

// Navigation
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Book Shelf', href: '#books' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          Dr. Chiamaka <span className="logo-divider">·</span> <span className="logo-sub">Planted & Global</span>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          {navItems.map(item => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div className="mobile-nav">
          {navItems.map(item => (
            <a key={item.name} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Planted Locally, <br />
            <span className="hero-subtitle">Spreading Globally</span>
          </h1>
          <p className="hero-description">
            Dr. Chiamaka · author, minister, and advocate for churches &amp; ministers using social media to expand their reach.
          </p>
          <div className="hero-tagline">
            “Visibility is not vanity — it’s stewardship.”
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src= {hero} 
            alt="Book cover: The Digital Pulpit" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

// Book Shelf
const BookShelf = () => {
  return (
    <section id="books" className="books-section">
      <div className="container">
        <h2 className="section-title">📚 Book Shelf</h2>
        <p className="section-subtitle">
          Practical, spirit-led resources for ministers and churches ready to embrace digital mission.
        </p>
        <div className="book-grid">
          {booksData.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-icon-wrapper">{book.icon}</div>
              <h3 className="book-title">{book.title}</h3>
              <div className="book-meta">{book.year} · {book.category}</div>
              <p className="book-description">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
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
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Dr. Chiamaka</h2>
        <div className="about-container">
          <div className="about-content">
            <h3 className="about-name">Chiamaka O. Ebere, D.Min.</h3>
            <p className="about-role">Minister · Author · Digital Mission Advocate</p>
            <p className="about-text">
              Dr. Chiamaka is a pastor, author, and speaker who believes that “ministers can be planted locally but spread globally.” She equips churches and leaders to use social media as a tool for kingdom advancement, without losing the heart of local community.
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
              alt="Dr. Chiamaka - author" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Reach out</h3>
            <p className="contact-detail"><FaEnvelope className="contact-icon" /> chiamaka@globalministry.org</p>
            <p className="contact-detail"><FaPhoneAlt className="contact-icon" /> +234 800 123 4567</p>
            <p className="contact-detail"><FaMapPin className="contact-icon" /> Lagos, Nigeria · global reach</p>
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
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-quote">“Planted locally, spreading globally — for such a time as this.”</div>
        <small className="footer-text">© 2026 Dr. Chiamaka · All rights reserved · Built with faith &amp; purpose</small>
      </div>
    </footer>
  );
};

// ------------------------------------------------------------------
// MAIN APP
// ------------------------------------------------------------------
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BookShelf />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;