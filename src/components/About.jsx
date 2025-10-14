// src/components/About.jsx
import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">👨‍💻 About Me</h2>
        <p className="about-text">
          Hey there! I'm <span className="highlight">Nikhil Jadhav</span> — a
          passionate <strong>Software Developer</strong> who loves turning ideas
          into scalable web solutions. My core focus lies in{" "}
          <strong>MERN Stack</strong> development and exploring the synergy
          between <strong>Machine Learning</strong> and intelligent systems. I
          also have hands-on experience with <strong>Java Full Stack</strong>,
          diving deep into <strong>Spring Framework</strong> and backend
          architecture.
        </p>

        <p className="about-text">
          I enjoy building clean, efficient, and impactful applications that
          merge creativity with logic. Whether it’s crafting smooth UI in
          React, optimizing API performance in Node.js, or exploring automation
          with AI — I’m always driven by curiosity and a desire to keep learning
          something new every day.
        </p>

        <p className="about-text">
          Beyond code, I’m fascinated by product design, analytics, and
          real-world problem solving — the perfect mix of tech and imagination
          that keeps me motivated. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
