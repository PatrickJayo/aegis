import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted />
      <h1>
        <img src={'images/aegis.svg'} />
        AEGIS
      </h1>
      <p>Powerful, fast, and easy to learn</p>
    </div>
  );
}

export default HeroSection;
