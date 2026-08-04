import booksData from "../assets/booksData.js";

import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';

import './BookShelve.css';

export default function BookShelf () {
  return (
    <main className='app'>
      <Navbar />
      <section id="books" className="books-section m">
        <h1 className="section-title">My Book 📚 Shelf</h1>
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
        {/* <h1>Under Construction</h1> */}
        <h3>CONSTRUCTION IN PROGRESS...</h3>
        {
          booksData.map(book => (
            <div key={book.id} className="books">
              <br/>
              <p id='title'><b>Title: </b>{book.title}</p>
              <p><b>Category: </b>{book.category}</p>
              <p><b>Publication Year: </b>{book.year}</p>
              <p><b>Book overview: </b></p>
              <img src={book.src} alt={`Image of ${book.title}`} />
              <p className='descriptions'>{book.description}</p>
              <hr className='divider'/>
            </div>
          ))
        }
      </section>
      <Footer />
    </main>
  );
};