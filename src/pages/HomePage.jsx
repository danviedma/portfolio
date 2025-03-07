import React from "react";
import "../assets/css/HomePage.css";
import Typewriter from "../components/Typewriter"; // Importamos el componente
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="home-container-all" id="home">
    <Navbar />
    <div className="home-container">
    
      <div className="hero-content">
        <h1>I am Alejandro Egaña</h1>
        {/* Aquí agregamos el efecto de escritura */}
        <Typewriter />
      </div>
    </div>
    </div>
  );
};

export default HomePage;

