import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li><a href="#perfil">Perfíl</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="nav-right">
        <a href="https://drive.google.com/file/d/1Iu7kOBSrd6Z9cQ1uq4j0y9TRYQ2qeiHI/view?usp=drive_link" className="btn-cv" download>C.V.</a>
      </div>
    </nav>
  );
};

export default Navbar;
