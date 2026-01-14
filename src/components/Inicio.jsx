import React from 'react';
import './Inicio.css';
const Inicio = () => {


  return (
    <div className="inicio">
      <div className="perfil">
        <div className="foto-container">
          <img src="/foto.jpg" alt="Tu nombre" className="foto" />
        </div>
        <div className="info">
          <h1 className="nombre">ALEJANDRO PATRICIO QUIROGA</h1>
          <h4>Estudiante avanzado Analista Programador universitario</h4>
          <p className="descripcion">
  Me apasiona la programación, con un mayor enfoque en el desarrollo frontend, aunque también cuento con habilidades para crear backends. Busco superarme cada día en el desarrollo de aplicaciones utilizando diversas tecnologías. Me destaco por mi capacidad de trabajo en equipo, mi adaptabilidad a distintos paradigmas y mi enfoque lógico para diseñar soluciones eficientes y funcionales.
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
            MySQL, PosgrestSQL, MongoDB.
            <h5> • Desarrollo Web:</h5>
            HTML, CSS, Tailwind CSS.
            <h5>• Frameworks:</h5>
            React.js (con Vite), AngularJS, Express (Node.js).
            <h5>• DevOps y CI/CD </h5>
            Docker.
            <h5>• Control de versiones</h5>
            GitHub.
          </div>

        </div>
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades blandas</h1>
          </div>
          <div className="hab-t">

            <h5>• Trabajo en equipo:</h5>
            Buena colaboración con compañeros.

            <h5>• Resolución de problemas:</h5>
            Busco soluciones eficientes y creativas.

            <h5>• Adaptabilidad:</h5>
            Según las necesidades del proyecto.

            <h5>• Gestión del tiempo:</h5>
            En entornos de desarrollo Ágil.

            <h5>• Empatía:</h5>
            Tanto con compañeros como con usuarios.

            <h5>• Comunicación efectiva:</h5>
            Buena comunicación en conceptos tecnicos
          </div>
        </div>

      </div>
    </div>
  );
};

export default Inicio;
