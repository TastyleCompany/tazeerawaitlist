import './hero.css'

function Hero() {
  return (
    <>
      <div className="video-background" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source src="video/iklan.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-glow"></div>
      </div>
      
      <section className="hero">
        <div className="container hero-grid">
          <div className='hero-contain'>
            <div className="pill">Premium startup marketplace • Waitlist now open</div>
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
    </>
  )
}

export default Hero