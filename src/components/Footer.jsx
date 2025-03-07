import React from "react";
import "../assets/css/Footer.css";
import { smoothScrollTo } from "../utils/scrollUtils"; // Importa la función de scroll
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      smoothScrollTo(targetSection, 2000); // 2000ms = 2 segundos
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Columna 1: Información */}
        <div className="footer-column">
          <h3>Sobre mí</h3>
          <p>Desarrollador web especializado en React, Firebase y tecnologías modernas.</p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>Sobre mí</a></li>
            <li><a href="#resume" onClick={(e) => handleScroll(e, "resume")}>Resumen</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Proyectos</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:tucorreo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alejandro Egaña. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
