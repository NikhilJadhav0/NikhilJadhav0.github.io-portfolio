import React from 'react';
import { skills } from '../data/skillsData';
import '../styles/components.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;