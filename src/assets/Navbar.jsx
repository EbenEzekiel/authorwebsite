import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Book Shelf', href: '/books' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          Dr. Abiola Fashina (esq). <span className="logo-divider">·</span> <span className="logo-sub">Planted & Global</span>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          {navItems.map(item => (
            <Link key={item.name} to={item.href} className="nav-link">
              {item.name}
            </Link>
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