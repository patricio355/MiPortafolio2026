import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="perfil">
        <div className="foto-container">
          <img src="/foto.jpg" alt="Alejandro Patricio Quiroga" className="foto" />
        </div>
        <div className="info">
          <span className="badge-rol">Backend Developer</span>
          <h1 className="nombre">Alejandro Patricio Quiroga</h1>
          <h4 className="subtitulo">Analista Programador Universitario</h4>
          <p className="descripcion">
            Profesional egresado de la Facultad de Ingeniería de Jujuy, especializado en desarrollo backend con Java y Spring Boot.
            Construyo soluciones escalables, seguras y mantenibles, aplicando metodologías ágiles como Scrum y estándares como JWT y Spring Security.
          </p>
        </div>
      </div>

      <div className="habilidades">
        <div className="carta-hab">
          <div className="titulo-hab">
            <h2>Habilidades técnicas</h2>
          </div>
          <div className="hab-t">
            <p><strong>Lenguajes:</strong> Java, JavaScript, C++.</p>
            <p><strong>Bases de datos:</strong> MySQL, PostgreSQL, MongoDB.</p>
            <p><strong>Desarrollo web:</strong> HTML, CSS, Tailwind CSS.</p>
            <p><strong>Frameworks y librerías:</strong> Spring Boot, Spring Security, Spring Data JPA, React, Express.</p>
            <p><strong>DevOps e infraestructura:</strong> Docker, Railway, Vercel.</p>
            <p><strong>Control de versiones:</strong> Git y GitHub.</p>
          </div>
        </div>

        <div className="carta-hab">
          <div className="titulo-hab">
            <h2>Habilidades blandas</h2>
          </div>
          <div className="hab-t">
            <p><strong>Trabajo en equipo:</strong> experiencia en entornos colaborativos bajo Scrum.</p>
            <p><strong>Resolución de problemas:</strong> enfoque lógico para soluciones eficientes y funcionales.</p>
            <p><strong>Adaptabilidad:</strong> respuesta rápida ante cambios de requerimientos.</p>
            <p><strong>Gestión del tiempo:</strong> planificación efectiva por sprints y revisiones de código.</p>
            <p><strong>Empatía:</strong> orientación a la experiencia del usuario final.</p>
            <p><strong>Comunicación:</strong> claridad para transmitir conceptos técnicos y documentar procesos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;