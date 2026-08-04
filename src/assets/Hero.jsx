import hero from "./images/he_left_me_with_the_kids.jpeg";
import './Hero.css';

export default function Hero () {
  return (
    // <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      
      {/* <!-- Left Content Column --> */}
      <div class="hero-content">
        <div class="badge-tag">
          <span class="badge-dot"></span> New Release Available Now
        </div>
        <h1 class="hero-title">
          Stories <span class="highlight-blue">of the</span> Kingdom to  
          <span class="highlight-red"> inspire</span> the Believer.
        </h1>
        <p class="hero-description">
          Hi! I am Dr. Abiola Fashina (esq.). Welcome to my digital space. 
          I write about practical topics cutting accross faith, love, hope and 
          every other sphere of the Christian life, to equip the Church, Ministers 
          and every believer.  
           
        </p>
        
        <div class="hero-actions">
          <a href="#buy" class="btn btn-yellow">Buy "He Left Me With the Kids"</a>
          <a href="#sample" class="btn btn-outline-green">Read Free Chapter</a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number stat-blue">5+</span>
            <span class="stat-label">Bestsellers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number stat-green">12</span>
            <span class="stat-label">Awards Won</span>
          </div>
          <div class="stat-item">
            <span class="stat-number stat-red">500k+</span>
            <span class="stat-label">Copies Sold</span>
          </div>
        </div>
      </div>

      {/* <!-- Right Media Column (Book Showcase) --> */}
      {/* <div class="hero-media">
        <div class="hero-card">
          <div class="book-cover">
            <div class="book-spine"></div>
            <div class="book-content">
              <span class="book-tag">NATIONAL BESTSELLER</span>
              <h2 class="book-title">THE ECHOING SKY</h2>
              <p class="book-author">A Novel by Author Name</p>
            </div>
          </div>
          <!-- Decorative Color Accents -->
          <div class="accent-blob blob-yellow"></div>
          <div class="accent-blob blob-blue"></div>
        </div>
      </div> */}

      <div class="hero-media">
        <img src={hero}  />
      </div>

    </div>
  </section>
  );
};