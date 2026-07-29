import hero from "./hero.jpeg";

export default function Hero () {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Planted Locally, <br />
            <span className="hero-subtitle">Spreading Globally</span>
          </h1>
          <p className="hero-description">
            Dr. Abiola Fashina (esq). · author, minister, and advocate for churches &amp; ministers using social media to expand their reach.
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