import React from 'react';
import './Proyecto.css';
function Proyecto({ titulo, descripcion, link, imagen, delay }) {
  return (
    <article className="card" style={{ animationDelay: `${delay * 70}ms` }}>
      <h3 className="proyecto-titulo">{titulo}</h3>
      {imagen && <img src={imagen} alt={titulo} className="proyecto-imagen" />}
      <p className="proyecto-descripcion">{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
    </article>
  );
}

export default Proyecto;
