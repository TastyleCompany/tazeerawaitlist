import "./navbar.css"
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container nav">
      <a href="#top" className="brand">
        <span className="brand-mark"></span>
        <span>TAZEERA</span>
      </a>

      {/* Tombol Hamburger untuk Mobile */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Tambahkan class 'active' jika isOpen true */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#mission" onClick={() => setIsOpen(false)}>Mission</a>
        <a href="#categories" onClick={() => setIsOpen(false)}>Categories</a>
        <a href="#future" onClick={() => setIsOpen(false)}>Features</a>
        <a href="#waitlist" className="btn btn-secondary" onClick={() => setIsOpen(false)}>
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}

export default Navbar