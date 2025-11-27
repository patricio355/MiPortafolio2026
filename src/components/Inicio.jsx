import React from 'react';
import './Inicio.css';

const habilidadesTecnicas = [
  {
    titulo: 'Lenguajes de programación',
    items: ['Java', 'JavaScript', 'C++'],
  },
  {
    titulo: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    titulo: 'Desarrollo web',
    items: ['HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    titulo: 'Frameworks y librerías',
    items: ['React (con Vite)', 'Angular', 'Express (Node.js)'],
  },
  {
    titulo: 'DevOps y CI/CD',
    items: ['Docker'],
  },
  {
    titulo: 'Control de versiones',
    items: ['GitHub'],
  },
];

const habilidadesBlandas = [
  { titulo: 'Trabajo en equipo', detalle: 'Colaboración fluida con compañeros y stakeholders.' },
  { titulo: 'Resolución de problemas', detalle: 'Busco soluciones eficientes y creativas.' },
  { titulo: 'Adaptabilidad', detalle: 'Me ajusto a las necesidades del proyecto y del equipo.' },
  { titulo: 'Gestión del tiempo', detalle: 'Organización en entornos de desarrollo ágil.' },
  { titulo: 'Empatía', detalle: 'Escucho y considero las perspectivas del equipo y los usuarios.' },
  { titulo: 'Comunicación efectiva', detalle: 'Comunico conceptos técnicos con claridad.' },
];

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="perfil">
        <div className="foto-container">
          <img src="/foto.jpg" alt="Retrato de Alejandro Patricio Quiroga" className="foto" />
        </div>
        <div className="info">
          <h1 className="nombre">ALEJANDRO PATRICIO QUIROGA</h1>
          <h4>Estudiante avanzado de la Tecnicatura en Análisis y Programación</h4>
          <p className="descripcion">
            Me apasiona la programación con foco en el frontend, aunque también disfruto construir backends. Busco superarme
            cada día desarrollando aplicaciones completas con distintas tecnologías. Me destaco por el trabajo en equipo,
            la adaptabilidad a diferentes paradigmas y un enfoque lógico para diseñar soluciones eficientes y funcionales.
          </p>
        </div>
      </div>

      <div className="habilidades">
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades técnicas</h1>
          </div>
          <div className="hab-t">
            {habilidadesTecnicas.map((categoria) => (
              <div key={categoria.titulo} className="hab-section">
                <h5>• {categoria.titulo}:</h5>
                <ul className="hab-list">
                  {categoria.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades blandas</h1>
          </div>
          <div className="hab-t">
            {habilidadesBlandas.map((habilidad) => (
              <div key={habilidad.titulo} className="hab-section">
                <h5>• {habilidad.titulo}:</h5>
                <p className="hab-detalle">{habilidad.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
