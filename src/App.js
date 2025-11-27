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
      descripcion:
        'Aplicación para administrar una liga de fútbol con frontend en React, backend en Node.js y base de datos MySQL.',
      link: 'https://github.com/patricio355/Liga-de-futbol.git',
      imagen: '/futbol.jpg',
    },
    {
      titulo: 'PelisRat',
      descripcion:
        'Buscador de películas con detalles y tráilers; fue mi primera integración con APIs usando Angular y Postman.',
      link: 'https://github.com/patricio355/hola.git',
      imagen: '/pelis.jpg',
    },
    {
      titulo: 'Mobirise',
      descripcion: 'Sitio estático creado como práctica para explorar las posibilidades de Mobirise.',
      link: 'https://github.com/patricio355/Mobirise2024.git',
      imagen: '/mobirise.jpg',
    },
    {
      titulo: 'Reserva de mesas',
      descripcion:
        'Administrador de reservas para un restaurante: frontend en Angular, backend con Node.js y base de datos MongoDB.',
      link: 'https://github.com/patricio355/Reserva-de-mesas.git',
      imagen: '/mesas.jpg',
    },
    {
      titulo: 'Mercado Liebre DH',
      descripcion:
        'Landing page inspirada en Mercado Libre realizada en HTML y CSS como parte de un curso de desarrollo web.',
      link: 'https://github.com/patricio355/mercadoLiebreDH.git',
      imagen: '/ml.jpg',
    },
    {
      titulo: 'Tienda de Ropa',
      descripcion:
        'Aplicación para la gestión de una tienda de ropa construida con EJS, CSS y JavaScript; mi primera experiencia con formularios.',
      link: 'https://github.com/patricio355/grupo_7_TheChill.git',
      imagen: '/tienda.jpg',
    },
    {
      titulo: 'Dashboard de Tienda de ropa',
      descripcion:
        'Dashboard en React que me permitió profundizar en el ecosistema y las ventajas del framework.',
      link: 'https://github.com/patricio355/React-Thechill.git',
      imagen: '/dashboard.jpg',
    },
    {
      titulo: 'Ticketera',
      descripcion: 'Administrador de tickets para estadios, desarrollado en Angular.',
      link: 'https://github.com/patricio355/Ticketera.git',
      imagen: '/ticketera.jpg',
    },
    {
      titulo: 'Candidatos',
      descripcion:
        'ABM de postulantes a presidente que hice en equipo; fue mi primer proyecto colaborativo.',
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
        <section id="proyectos">
          <h2 className="proyectos-titulo">Mis Proyectos</h2>
          <div className="card-container">
            {proyectos.map((proyecto, index) => (
              <Proyecto
                key={index}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                link={proyecto.link}
                imagen={proyecto.imagen}
              />
            ))}
          </div>
        </section>
        <section id="sobre-mi">
          <SobreMi />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </div>
    </div>
  );
}

export default App;
