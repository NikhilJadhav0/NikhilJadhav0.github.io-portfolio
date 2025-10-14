// src/components/Hero.jsx
import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          👋 Hi, I'm <span className="highlight">Nikhil Jadhav</span>
        </h1>
        <h2 className="hero-subtitle">
          Software Developer • MERN + ML Explorer • Java Full Stack Learner
        </h2>
        <p className="hero-text">
          I craft efficient, scalable applications with <strong>React</strong>,
          <strong> Node.js</strong>, and <strong>MongoDB</strong> while exploring
          the depth of <strong>Spring Framework</strong> and intelligent systems.
          Passionate about solving real-world problems through clean code and
          innovation.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            🚀 View Projects
          </a>
          <a href="#contact" className="hero-button secondary">
            💬 Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
