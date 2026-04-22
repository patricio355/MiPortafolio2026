import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#perfil" className="brand-mark">APQ</a>
      <ul className="nav-links">
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="nav-right">
        <a href="https://drive.google.com/file/d/1Iu7kOBSrd6Z9cQ1uq4j0y9TRYQ2qeiHI/view?usp=drive_link" className="btn-cv" target="_blank" rel="noopener noreferrer">Ver CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
