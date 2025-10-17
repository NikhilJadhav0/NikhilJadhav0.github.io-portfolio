import React from 'react';
import '../styles/components.css';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-tech"><strong>Tech Stack:</strong> {tech.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;