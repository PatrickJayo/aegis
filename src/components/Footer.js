import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={'images/aegis.svg'} height={50} alt="aegis-logo" />
              Aegis
            </Link>
          </div>
          <small class="website-rights">Aegis © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link Github"
              to=""
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
