// src/components/Contact.jsx
import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate, have questions, or just want to say hi — drop me a message!</p>
      
      <div className="contact-details">
        <p>Email: <a href="mailto:nikhiljadhav2218@gmail.com">nikhiljadhav2218@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/NikhilJadhav0" target="_blank" rel="noopener noreferrer">github.com/Nikhil</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nikhil-jadhav-213275240/" target="_blank" rel="noopener noreferrer">linkedin.com/Nikhil</a></p>
      </div>
    </section>
  );
};

export default Contact;