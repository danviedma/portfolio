import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { smoothScrollTo } from "../utils/scrollUtils"; // Importa la función de scroll
import logo from "../assets/img/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      smoothScrollTo(targetSection, 2000); // 2000ms = 2 segundos
    }
    setIsOpen(false); // Cierra el menú después de hacer clic
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      
      {/* Botón menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


