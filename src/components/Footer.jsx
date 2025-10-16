// src/components/Footer.jsx
import React from 'react';

import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nikhil. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/NikhilJadhav0" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/nikhil-jadhav-213275240/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:nikhiljadhav2218@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;