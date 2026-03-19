import "./navbar.css"
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <nav className="navbar">
    {/* Bagian Logo */}
    <a href="#top" className="brand">
      <span className="brand-mark"></span>
      <span className="logo">TAZEERA</span>
    </a>

    {/* Overlay: Muncul saat menu terbuka */}
    {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}

    {/* Menu Navigasi */}
    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <li><a href="#mission" onClick={() => setIsOpen(false)}>Mission</a></li>
      <li><a href="#categories" onClick={() => setIsOpen(false)}>Categories</a></li>
      <li><a href="#future" onClick={() => setIsOpen(false)}>Features</a></li>
      <li className="mobile-only">
        <a href="#waitlist" className="btn btn-secondary" onClick={() => setIsOpen(false)}>
          Join Waitlist
        </a>
      </li>
    </ul>

    {/* Action Buttons (Desktop) */}
    <div className="nav-icons desktop-only">
      <a href="#waitlist" className="btn btn-secondary">Join Waitlist</a>
    </div>

    {/* Hamburger Icon */}
    <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  );
}

export default Navbar;