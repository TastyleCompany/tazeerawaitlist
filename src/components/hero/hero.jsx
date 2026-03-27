import './hero.css'

function Hero() {
  return (
      <>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">The Marketplace for Everything Style</div>
              <h1>Everything Has <span className="gold-text">Style</span></h1>
              <p className="subheadline">
                TAZEERA is building the next generation marketplace where style connects everything — fashion, home, gadgets, automotive, and lifestyle.
              </p>
              <div className="hero-actions">
                <a href="#waitlist" className="btn">Join the Waitlist</a>
                <a href="#mission" className="btn btn-secondary">Explore the Mission</a>
              </div>
            </div>
          </div>
  </section>
  {/* Gunakan className, bukan class */}
  <div className="phone">
    <div className="screen">
      <div className="topline">
        <span>TAZEERA</span>
        <span>Style Feed</span>
      </div>
      <div className="searchbar">Search style, categories, creators...</div>
      <div className="mini-grid">
        <div className="mini-card"><strong>Fashion</strong></div>
        <div className="mini-card"><strong>Gadgets</strong></div>
        <div className="mini-card"><strong>Home</strong></div>
        <div className="mini-card"><strong>Automotive</strong></div>
      </div>
      <div className="chart-card">
        <strong>The Future of Marketplace</strong>
        <div className="bars">
          <span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
      </>
  )
}

export default Hero