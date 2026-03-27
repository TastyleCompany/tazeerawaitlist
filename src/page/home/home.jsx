import { useState } from "react"; // Tambahkan ini
import "./home.css";
import { motion } from "framer-motion";

const BenefitSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] // Ini menyamakan feel Framer Motion dengan CSS cubic-bezier kamu
      },
    },
  };

  const benefits = [
    { icon: "📚", 
      title: "Exclusive Content for Waitlist Members", 
      desc: "As a waitlist member, you'll have access to exclusive content such as styling tips, behind-the-scenes insights, and more!", 
      button: "Access Now" },
    { icon: "🎉", title: "Bonus Points for Early Referrals", 
      desc: "Invite friends early and earn bonus points!", 
      button: "Invite Now" },
    { icon: "👗", title: "Personalized Style Recommendations", 
      desc: "Get early access to personalized style recommendations...", 
      button: "Learn More" },
    { icon: "🛡️", title: "VIP Customer Support", 
      desc: "Founding members get priority access to our dedicated customer support team.", 
      button: "Contact Support" },
    { icon: "⚡", title: "Early platform access", 
      desc: "Be among the first to experience our platform when it launches.", 
      button: "Get Early Access" },
    { icon: "✦", title: "Exclusive perks", 
      desc: "Receive private launch discounts and special merchandise...", 
      button: "View Perks" },
    { icon: "◎", title: "Community membership", 
      desc: "Join a network of like-minded individuals...", 
      button: "Join Community" },
    { icon: " % ", title: "Early discounts", 
      desc: "Unlock launch pricing...",
      button: "Unlock Discounts" },
  ];

  return (
    <motion.div
      className="benefits-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {benefits.map((benefit, index) => (
        <motion.div 
          key={index} 
          className="benefit" 
          variants={itemVariants}
        >
          <div className="icon">{benefit.icon}</div>
          <h3>{benefit.title}</h3>
          <p className="benefit-description">{benefit.desc}</p>
          {benefit.button && (
            <a href="#" className="btn btn-secondary">{benefit.button}</a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

const FoundingBenefits = () => {
  // Variabel animasi untuk kemunculan perlahan (fade up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  return (
    <motion.div 
      className="founding-benefits"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="founding1" variants={fadeInUp}>
        <div className="benefit">
          <div className="icon">👑</div>
          <h3>Exclusive Content and Early Access</h3>
          <p>As a waitlist member, you'll get exclusive access to behind-the-scenes content, early product previews, and the opportunity to shape the future of TAZEERA with your feedback.</p>
          <a href="#" className="btn btn-secondary">Access Exclusive Content</a>
        </div>
      </motion.div>
      <motion.div className="founding2" variants={fadeInUp}>
        <div className="benefit">
          <div className="icon">🎁</div>
          <h3>Bonus Points and Referral Rewards</h3>
          <p>Invite friends to join the waitlist and earn bonus points that can be redeemed for early access, exclusive merchandise, and special experiences.</p>
          <a href="#" className="btn btn-secondary">Invite Friends</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const perks = [
    {
      title: "Founding Badge",
      description: "Tampilkan status eksklusif Anda di profil permanen sebagai pionir komunitas.",
      icon: "💎"
    },
    {
      title: "Direct Influence",
      description: "Akses ke channel voting eksklusif untuk menentukan fitur produk selanjutnya.",
      icon: "🗳️"
    },
    {
      title: "Zero Fees",
      description: "Nikmati potongan biaya transaksi selama 6 bulan pertama setelah rilis publik.",
      icon: "✨"
    }
  ];

  return (
    <section className="features-container">
      <div className="features-grid">
        {perks.map((perk, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">{perk.icon}</div>
            <h3 className="feature-title">{perk.title}</h3>
            <p className="feature-description">{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// PRODUCT CARD
const products = [
  {
    id: 1,
    tag: 'New Arrival',
    title: 'Architectural Tech Kit',
    desc: 'Functional aesthetic for modern creators.',
    price: 'Rp 1.250.000',
    img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000'
  },
  {
    id: 2,
    tag: 'Signature',
    title: 'Ethereal Glass Vase',
    desc: 'Hand-blown clarity for your space.',
    price: 'Rp 890.000',
    img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1000'
  }
];

// Varian untuk animasi container (parent)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar kartu saat muncul
    },
  },
};

// Varian untuk item individual (child)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
};

const ProductSection = () => {
  return (
    <section className="product-section">
      <motion.div 
        className="product-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((item) => (
          <motion.div 
            key={item.id} 
            className="tazeera-card"
            variants={itemVariants}
            whileHover={{ y: -10 }} // Menggantikan hover CSS manual agar lebih sinkron
          >
            <div className="card-media">
              <motion.img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              />
              <div className="card-badge">{item.tag}</div>
              
              <motion.div 
                className="card-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button 
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            </div>
            
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p className="card-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const StyleFeedPhone = () => {
  // Variabel animasi untuk container (agar anak-anaknya muncul bergantian)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda antar elemen muncul
      },
    },
  };

  // Variabel animasi untuk elemen anak (muncul dari bawah ke atas)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div 
      className="phone"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="screen">
        {/* Header Animation */}
        <motion.div 
          className="topline"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>TAZEERA</span>
          <span>Style Feed</span>
        </motion.div>

        {/* Searchbar Animation */}
        <motion.div 
          className="searchbar"
          initial={{ width: "80%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Search style, categories, creators...
        </motion.div>

        {/* Grid Animation dengan Stagger */}
        <motion.div 
          className="mini-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {["Fashion", "Gadgets", "Home", "Automotive"].map((cat) => (
            <motion.div 
              key={cat} 
              className="mini-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Efek saat disentuh/hover
              whileTap={{ scale: 0.95 }}
            >
              <strong>{cat}</strong>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart Card & Bars Animation */}
        <motion.div 
          className="chart-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <strong>The Future of Marketplace</strong>
          <div className="bars">
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: "100%" }} // Pastikan CSS .bars span punya height dasar
                transition={{ 
                  delay: 0.8 + (i * 0.05), 
                  duration: 0.5,
                  repeat: Infinity, 
                  repeatType: "reverse" // Biar barnya naik turun lucu
                }}
              ></motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah halaman reload
    
    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setMessage(result.message);
        setEmail(''); // Kosongkan input setelah berhasil
      } else {
        setMessage(result.message || "Terjadi kesalahan");
      }
    } catch (error) {
      setMessage("Gagal terhubung ke server.");
    }
  };

  // ... bagian return kamu di bawah
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
  {/* Gunakan className, bukan class */}
        <StyleFeedPhone />
      </section>

      {/* MISSION STORYTELLING */}
      <section id="mission">
        <div className="container story-grid">
          <div className="section-head">
            <div className="eyebrow">Mission Storytelling</div>
            <h2>We believe <span className="story-subText">style exists in everything</span>.</h2>
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

<section>
  <div className="container benefitsAndFeatures-section">
    <div class="section-head">
          <div class="eyebrow">Founding Member Benefits</div>
          <h2>Join early. Get more than access.</h2>
          <p>The first wave of users shapes community quality, product direction, and the culture of the marketplace.</p>
        </div>
    <FoundingBenefits />
    <BenefitSection />
        <div className="featuresSection-head">
          <div class="eyebrow">Features</div>
          <h2>Join early. Get more than access.</h2>
          <p>The first wave of users shapes community quality, product direction, and the culture of the marketplace.</p>
        </div>
    <FeaturesSection />
        <div className="featuresSection-head">
          <div class="eyebrow">Features</div>
          <h2>Join early. Get more than access.</h2>
          <p>The first wave of users shapes community quality, product direction, and the culture of the marketplace.</p>
        </div>
    <ProductSection />
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

{/* FORM WAITLIST */}
          <form className="email-form" id="waitlistForm" onSubmit={handleSubmit}>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state saat mengetik
            />
            <button type="submit" className="btn">Get Early Access</button>
          </form>

          {/* Tampilkan pesan sukses atau error di bawahnya */}
          {message && <div className="message-notif">{message}</div>}

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