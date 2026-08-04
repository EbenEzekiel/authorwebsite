import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' , class:"link-blue",},
    { name: 'Book Shelf', href: '/books', class:"link-green" },
    { name: 'About', href: '/about', class:"link-yellow" },
    { name: 'Contact', href: '/contact', class:"link-red" }
  ];

  return (
     <header class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">Author Name<span class="dot">.</span></a>
      <nav className="nav-links">
      {
        navItems.map(item => (
          <Link key={item.name} to={item.href} className={item.class}> {item.name} </Link>
        ))
      }
      </nav>
      
      <a href="#latest-book" class="btn btn-red nav-cta">Get the Latest Book</a>
    </div>
  </header>
  );
};