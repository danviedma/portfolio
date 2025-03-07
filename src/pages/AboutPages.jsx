import React from 'react';
import '../assets/css/AboutPages.css';  
import profile from '../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutPages = () => {
  return (
    <div className='about-container-all' id='about'>
    <div className="about-container">
        <section className="about-left">    
                <h1><span className='about-word'>About</span> Me</h1>
                <p>Soy un desarrollador Full Stack con alrededor de un año de experiencia en programación. Desde 2023, he completado dos diplomados en desarrollo web, uno enfocado en Full Stack y otro en Frontend, lo que me ha permitido fortalecer mis habilidades en HTML, CSS, JavaScript, React y Node.js. Me apasiona construir aplicaciones funcionales y atractivas, siempre buscando mejorar mi código y aprender nuevas tecnologías. Mi enfoque de aprendizaje se basa en explorar documentación, resolver desafíos y ver videos para mejorar mis habilidades. Además de la programación, disfruto jugar ajedrez, lo que me ayuda a entrenar la lógica y la toma de decisiones estratégicas, cualidades que aplico también en el desarrollo de software.</p>
        </section>
        <section className="about-right">
            <img src={profile} alt="foto de perfil" />
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <span className='info'>Alejandro Egaña</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <span className='info'>+569 96332978</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    <span className='info'>Chile</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <span className='info'>
                        <a href="mailto:danviedma@gmail.com">danviedma@gmail.com</a>
                    </span>
                </li>
            </ul>
        </section> 
      
    </div>
    </div>
  );
}

export default AboutPages;