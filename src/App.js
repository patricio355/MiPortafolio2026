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
      descripcion: 'Creé una app que ayuda a la administración de una liga de futbol usando React,NodeJs y la base de datos con MySql.',
      link: 'https://github.com/patricio355/Liga-de-futbol.git',
      imagen: '/futbol.jpg',
    },
    {
      titulo: 'PelisRat',
      descripcion: 'Esta es una app que sirve para ver detalles de peliculas y trailers, fue mi primera interacción con APIS, use Angular y me ayude de PostMan,',
      link: 'https://github.com/patricio355/hola.git',
      imagen: '/pelis.jpg',
    },
    {
      titulo: 'Mobirise',
      descripcion: 'Este sitio lo realicé como práctica para conocer Mobirise, una buena experiencia creando páginas estáticas con la herramienta,',
      link: 'https://github.com/patricio355/Mobirise2024.git',
      imagen: '/mobirise.jpg',
    },
    {
      titulo: 'Reserva de mesas',
      descripcion: 'App que se centra en la administración de reservas en un restaurante, para su creación elegí: frontend (Angular), backend (Nodejs)  con BD Mongo.',
      link: 'https://github.com/patricio355/Reserva-de-mesas.git',
      imagen: '/mesas.jpg',
    },
    {
      titulo: 'Mercado Liebre DH',
      descripcion: 'Página realizada para un curso de Desarrollo Web, mis primeras prácticas usando HTML,CSS emulando ML.',
      link: 'https://github.com/patricio355/mercadoLiebreDH.git',
      imagen: '/ml.jpg',
    },
    {
      titulo: 'Tienda de Ropa',
      descripcion: 'App para administración de tienda de ropa, usando EJS,CSS,JAVASCRIPT. Mi primera interacción con formularios',
      link: 'https://github.com/patricio355/grupo_7_TheChill.git',
      imagen: '/tienda.jpg',
    },
    {
      titulo: 'Dashboard de Tienda de ropa',
      descripcion: 'Mi primer Dashboard usando React , me ayudó a conocer mas a fondo el mundo de React y todas sus ventajas',
      link: 'https://github.com/patricio355/React-Thechill.git',
      imagen: '/dashboard.jpg',
    },
    {
      titulo: 'Ticketera',
      descripcion: 'App para administración de compra de tickets para estadios, mi primera experiencia usando Angular',
      link: 'https://github.com/patricio355/Ticketera.git',
      imagen: '/ticketera.jpg',
    },
    {
      titulo: 'Candidatos',
      descripcion: 'App para administración de postulantes a presidente, aprendí como crear un ABM en mi primer proyecto trabajando en grupo',
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
          <div className='card-container'>
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
        <section id='sobre-mi'>
          <SobreMi />
        </section>
        <section id='contacto'>
          <Contacto />
        </section>
      </div>
    </div>
  );
}

export default App;
