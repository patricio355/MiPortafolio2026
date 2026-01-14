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
          <h1 className="nombre">ALEJANDRO PATRICIO QUIROGA</h1>
          <h4>Analista Programador Universitario</h4>
          <p className="descripcion">
            Analista Programador Universitario egresado de la Facultad de Ingeniería de Jujuy. 
            Poseo una fuerte especialización en el desarrollo Backend utilizando Java y Spring Boot. 
            Me destaco por mi capacidad para analizar, diseñar y desarrollar software escalable aplicando 
            metodologías ágiles como Scrum y garantizando la seguridad mediante estándares como JWT y Spring Security.
          </p>
        </div>
      </div>

      <div className="habilidades">
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades técnicas</h1>
          </div>
          <div className='hab-t'>
            <h5> • Lenguajes de Programación:</h5>
            Java, JavaScript, C++.
            <h5>• Manejo de base de datos:</h5>
            MySQL (SQL), PostgreSQL, MongoDB.
            <h5> • Desarrollo Web:</h5>
            HTML, CSS, Tailwind CSS.
            <h5>• Frameworks y Librerías:</h5>
            Spring Boot, Spring Security, Spring Data JPA, React.js, Express.js.
            <h5>• DevOps e Infraestructura:</h5>
            Docker, Railway, Vercel.
            <h5>• Control de versiones:</h5>
            GitHub.
          </div>
        </div>

        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades blandas</h1>
          </div>
          <div className="hab-t">
            <h5>• Trabajo en equipo:</h5>
            Experiencia en entornos colaborativos bajo metodología Scrum.

            <h5>• Resolución de problemas:</h5>
            Fuerte enfoque lógico para diseñar soluciones eficientes y funcionales.

            <h5>• Adaptabilidad:</h5>
            Capacidad de respuesta ante cambios en los requerimientos del proyecto.

            <h5>• Gestión del tiempo:</h5>
            Planificación efectiva mediante Sprints y revisiones de código.

            <h5>• Empatía:</h5>
            Orientación hacia la experiencia del usuario final y buena relación con pares.

            <h5>• Comunicación efectiva:</h5>
            Claridad en la transmisión de conceptos técnicos y documentación.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;