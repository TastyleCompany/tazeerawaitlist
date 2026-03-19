import "./home.css"
import { motion } from "framer-motion"

function Home() {
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

      {/* MISSION STORYTELLING */}
      <section id="mission">
        <div className="container story-grid">
          <div className="section-head">
            <div className="eyebrow">Mission Storytelling</div>
            <h2>We believe <span className="gold-text">style exists in everything</span>.</h2>
            <p>TAZEERA is not just another product marketplace. It is a style-first ecosystem built around identity, taste, and discovery.</p>
          </div>

          <motion.div
              initial={{ x: 100, opacity: 0, rotate: 0, skewX: 0 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0, skewX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut" 
              }}
            >
            <div className="panel mission">
              <strong>We believe style exists in everything.</strong><br />
              From the clothes people wear,<br />
              to the spaces they live in,<br />
              to the technology they use.<br /><br />
              But today's marketplaces only focus on products.<br /><br />
              <strong>TAZEERA focuses on style.</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WAIT LIST LEADERBOARD & SOCIAL PROOF */}
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Keadaan awal (tersembunyi)
      whileInView={{ opacity: 1, y: 0 }} // Animasi saat di-scroll/masuk layar
      transition={{ duration: 0.5 }}
    >
      <div className="waitlist-container">
        <div className="waitlist-box" id="waitlist">
          <div className="leaderboard">
            <h3>Leaderboard</h3>
            <p>Top referrers will get exclusive prizes and rewards!</p>
            <ul>
              <li>1. John Doe - 150 Referrals</li>
              <li>2. Jane Smith - 135 Referrals</li>
              <li>3. Emily Johnson - 120 Referrals</li>
            </ul>
          </div>
          <div className="social-proof">
            <div className="exclusive-access-badge">
              <h3>Exclusive Early Access</h3>
              <p>Be one of the first 1000 users to join and get an exclusive badge and benefits!</p>
            </div>
            <div>
              2,000+ people already joined the waitlist
              <small>Momentum is building around the future of style commerce.</small>
            </div>
            <div>
              <strong className="gold-text">First 1000 users</strong>
              <small>Become TAZEERA Founding Members</small>
            </div>
          </div>
          <div className="referral-system">
            <h3>Invite Friends, Move Up the Waitlist</h3>
            <p>Share your unique referral link and unlock faster access to TAZEERA! The more friends you invite, the higher your priority in the waitlist.</p>
            <a href="https://example.com/referral-link" className="btn btn-secondary">Copy Referral Link</a>
          </div>
          <form className="email-form" id="waitlistForm">
            <input type="email" id="email" placeholder="Enter your email" required />
            <button type="submit" className="btn">Get Early Access</button>
          </form>
          <div className="form-meta">
            <span>Early platform access</span>
            <span>Exclusive perks</span>
            <span>Community membership</span>
            <span>Early discounts</span>
          </div>
          <div className="founding-note">
            Join now to secure early position on the waitlist and unlock Founding Member status before the first 1000 spots fill up.
          </div>
          <div className="success" id="successMessage">
            You're in. Your email has been added to the TAZEERA waitlist. Next step: invite friends and move up the queue.
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Home