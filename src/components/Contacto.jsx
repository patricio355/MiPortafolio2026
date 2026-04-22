import React, { useState } from 'react';
import './Contacto.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    'service_peng2ss',     // ← reemplazá
    'template_46fpq8s',    // ← reemplazá
    e.target,
    'gjDp5R8f0U7PfN17q'      // ← reemplazá
  )
  .then((result) => {
      console.log('Mensaje enviado', result.text);
      alert('Mensaje enviado con éxito.');
      setNombre('');
      setMensaje('');
  }, (error) => {
      console.log('Error al enviar', error.text);
      alert('Hubo un error al enviar el mensaje.');
  });
};

  return (
    <div className='contacto-container'>
      <div className='contacto-titulo'>
        <h1>Contacto</h1>
        <p>Si tienes una propuesta o quieres conversar sobre un proyecto, estaré encantado de leerte.</p>
      </div>
      <div className="social-links">
                  <a href="https://github.com/patricio355" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/alejandro-patricio-quiroga-4b6892210/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://wa.me/+5493885081738" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                  </a>
                  <a href="https://instagram.com/patricioquiroga35" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                  </a>
                </div>
      
      <div className='contacto-cuerpo'>
        <form onSubmit={handleSubmit} className='contacto-form'>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mensaje'>Mensaje:</label>
            <textarea
              id='mensaje'
               name='mensaje'
              placeholder='Cuéntame sobre tu idea o necesidad'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
             
              rows='5'
              required
            />
          </div>
          <button type='submit' className='enviar-btn'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
