import React, { useState, useEffect } from "react";
import projects from "../assets/data/projects.json";
import "../assets/css/ProjectsPages.css";

const ProjectsPage = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projects);
  }, []);

  return (
    <div className="projects-page" id="projects">
      <div className="projects-container">
        <h1>Mis Proyectos</h1>
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
