import React from 'react';
import '../assets/css/ResumePage.css';

const ResumePages = () => {
  return (
    <div className="resumepages-container" id="resume">
        
        <h1>Resume</h1>
        <div className="section-container">
        <section className="resumepages-left">
            <h2>Sumary</h2>
            <p className='sumary'>Desarrollador con experiencia en HTML, CSS, JavaScript, React y Firebase, especializado en la creación de aplicaciones web modernas y funcionales. Con habilidades en Next.js, Node.js, Express y Firebase Functions, he desarrollado proyectos que integran bases de datos en tiempo real, almacenamiento en la nube y generación dinámica de contenido a partir de archivos Markdown.
            Además, tengo conocimientos en Android Studio con Kotlin (Jetpack Compose), lo que me permite desarrollar aplicaciones móviles. Actualmente, continúo ampliando mis habilidades en desarrollo full-stack y explorando nuevas tecnologías.
            Me destaco por mi capacidad de aprendizaje autodidacta, resolución de problemas y organización de proyectos. Busco oportunidades para seguir creciendo como desarrollador y contribuir con soluciones eficientes e innovadoras.
            </p>
            <h2>Education</h2>
            <h3>2024-2025</h3>
            <p>Desarrollador Front End, BootCamp Desafío Latam, Chile</p>
            <h3>2023-2024</h3>
            <p>Desarrollador Full Stack, BootCamp Academia Numen, Argentina</p>
            <h3>2006-2008</h3>
            <p>Analista de Sistemas, CFT Simón Bolivar, Chile</p>

        </section>
        <section className="resumepages-right">
            <h2>Latest Experiences</h2>
            <h3>2024-2025</h3>
            <p>Desarrollador Freelance</p> 
            <p>Desarrollo de aplicaciones web y móviles para clientes independientes. Creación de sitios web y aplicaciones móviles a medida, con tecnologías como React, Next.js, Node.js, Express, Firebase y Android Studio con Kotlin.</p>
            <h3>2016-2020</h3>
            <p>Analista Contact Center - Falabella</p>
            <p>Encargado de la continuidad operacional de la telefonía y de los distintos sistemas en el Contact Center de Falabella </p>
            <h3>2013-2016</h3>
            <p>Analista ERP Maximise - Constructora Puga Mujica S.A.</p>
            <p>Encargado de Soporte y continuidad operacional del ERP Maximise en la empresa, además de la capacitación y soporte a los usuarios.</p>
            <h3>2010-2011</h3>
            <p>Analista de Sistemas - Software Presto - RECSA Chile</p>
            <p>Encargado de la Mantención del Software Presto. Aplicación Desarrollada en Java, Framework GWT</p>
        </section>
        </div>
        
      
    </div>

  );
}

export default ResumePages;