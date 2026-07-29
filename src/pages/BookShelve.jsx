import booksData from "../assets/booksData.js";

import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';

export default function BookShelf () {
  return (
    <main className='app'>
      <Navbar />
      <section id="books" className="books-section m">
        <h2 className="section-title">📚 Book Shelf</h2>
        {/* <div className="container">
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
        </div> */}
        <h1>Under Construction</h1>
      </section>
      <Footer />
    </main>
  );
};