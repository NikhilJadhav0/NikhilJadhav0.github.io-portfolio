import React from 'react';
import { projects } from '../data/projectData.js';
import ProjectCard from './projectCard.jsx';
import '../styles/components.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;