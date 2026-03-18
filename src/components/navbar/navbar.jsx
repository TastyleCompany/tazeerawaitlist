import "./navbar.css"
import { useState } from 'react';

function Navbar() {

  return (
    <nav>
        <div class="logo"><span className="brand-mark"></span>TAZEERA</div>
        <ul class="nav-links">
            <li>Shop</li>
            <li>Limited</li>
            <li>Brand</li>
            <li>Bundles</li>
            <li>Loyalty</li>
        </ul>
        <div class="nav-icons">
            Account | Search | Cart (0)
        </div>
    </nav>
  );
}

export default Navbar

