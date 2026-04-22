import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import './App.css';
import SobreMi from './components/SobreMi';
import Proyecto from './components/Proyecto';
import Contacto from './components/Contacto';

function App() {
  const proyectos = [
    {
      titulo: 'Liga de Futbol',
      descripcion: 'Aplicación para la administración de torneos deportivos con Java, Spring Boot y MySQL. El frontend fue desarrollado con React y Tailwind CSS.',
      link: 'https://github.com/patricio355/Liga-Juje-a.git',
      imagen: '/futbol.png',
    },
    {
      titulo: 'PelisRat',
      descripcion: 'Aplicación para consultar detalles de películas y tráilers. Fue mi primera integración con APIs usando Angular y Postman.',
      link: 'https://github.com/patricio355/hola.git',
      imagen: '/pelis.jpg',
    },
    {
      titulo: 'Mobirise',
      descripcion: 'Sitio realizado como práctica para explorar Mobirise y fortalecer el desarrollo de páginas estáticas.',
      link: 'https://github.com/patricio355/Mobirise2024.git',
      imagen: '/mobirise.jpg',
    },
    {
      titulo: 'Reserva de mesas',
      descripcion: 'Aplicación centrada en la gestión de reservas para restaurantes, con frontend en Angular y backend en Node.js con MongoDB.',
      link: 'https://github.com/patricio355/Reserva-de-mesas.git',
      imagen: '/mesas.jpg',
    },
    {
      titulo: 'Mercado Liebre DH',
      descripcion: 'Proyecto académico de desarrollo web: primeras prácticas con HTML y CSS, emulando una experiencia de e-commerce.',
      link: 'https://github.com/patricio355/mercadoLiebreDH.git',
      imagen: '/ml.jpg',
    },
    {
      titulo: 'Tienda de Ropa',
      descripcion: 'Aplicación para la administración de una tienda de ropa usando EJS, CSS y JavaScript. Mi primer proyecto fuerte con formularios.',
      link: 'https://github.com/patricio355/grupo_7_TheChill.git',
      imagen: '/tienda.jpg',
    },
    {
      titulo: 'Dashboard de Tienda de ropa',
      descripcion: 'Mi primer dashboard en React, clave para profundizar en el ecosistema y las ventajas de una UI basada en componentes.',
      link: 'https://github.com/patricio355/React-Thechill.git',
      imagen: '/dashboard.jpg',
    },
    {
      titulo: 'Ticketera',
      descripcion: 'Aplicación para la gestión de compra de entradas para estadios. Fue mi primera experiencia completa usando Angular.',
      link: 'https://github.com/patricio355/Ticketera.git',
      imagen: '/ticketera.jpg',
    },
    {
      titulo: 'Candidatos',
      descripcion: 'Aplicación para administrar postulantes en un proceso electoral. Allí aprendí a construir un ABM en trabajo colaborativo.',
      link: 'https://github.com/CarlosCommit/TpEvaluativo',
      imagen: '/candidatos.jpg',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <section id="perfil">
          <Inicio />
        </section>
        <section id="proyectos" className="section-block">
          <h2 className="proyectos-titulo">Mis Proyectos</h2>
          <p className="section-copy">Una selección de trabajos donde combiné backend, frontend y despliegues reales.</p>
          <div className="card-container">
            {proyectos.map((proyecto, index) => (
              <Proyecto
                key={index}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                link={proyecto.link}
                imagen={proyecto.imagen}
                delay={index}
              />
            ))}
          </div>
        </section>
        <section id="sobre-mi" className="section-block">
          <SobreMi />
        </section>
        <section id="contacto" className="section-block">
          <Contacto />
        </section>
      </div>
    </div>
  );
}

export default App;
