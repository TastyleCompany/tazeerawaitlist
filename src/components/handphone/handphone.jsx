import React from 'react';
import { motion } from "framer-motion"; // Pastikan nama package-nya benar (biasanya framer-motion)
import './handphone.css';

function Handphone() {
  return (
    // Cukup ganti <div> jadi <motion.div>
    <motion.div 
  className="phone"
  initial={{ 
    translateY: 100, 
    opacity: 0, 
    rotate: 5,  // Kemiringan rotasi
    skewX: -10    // Kemiringan skew
  }}
  animate={{ 
    translateY: 0, 
    opacity: 1,
    rotate: 5,  // Tetap miring setelah animasi selesai
    skewX: -10 
  }}
  transition={{ duration: 1, ease: "easeOut" }}
>
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
    </motion.div>
  );
}

export default Handphone;