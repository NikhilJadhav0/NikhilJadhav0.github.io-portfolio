
import React from 'react';
import '../App.css';

const projects = [
  {
    title: 'Java Code & Projects',
    description: 'A modular backend system using JDBC, Hibernate, and SQL for managing student records.',
    tech: ['Java', 'Hibernate', 'SQL'],
    link: 'https://github.com/NikhilJadhav0/Optimization_Techniques',
  },
  {
    title: 'Test Hub',
    description: 'test hub is an web app that allows users to practice and improve their aptitude skills through various quizzes.',
    tech: ['MERN Stack', 'JavaScript', 'CSS'],
    link: 'https://github.com/im-prathamesh-dev/ZealTestHub.git'
  },
  {
    title: 'Booking Engine',
    description: 'booking engine that automates hotel room bookings and generates reports for management.',
    tech: ['Next.js', 'Tailwind CSS', 'PHP', 'MySQL'],
    link: 'https://github.com/NikhilJadhav0/Booking_Engine.git'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card glass" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;