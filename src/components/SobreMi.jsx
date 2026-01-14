import React from 'react';

import './SobreMi.css';
import TechCard from '../components/TechCard';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaAngular } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { SiPrometheus, SiGrafana, SiOpenai } from 'react-icons/si';
import { FaGithub, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaWindows } from 'react-icons/fa';
import { SiPostman, SiSpring, SiEclipseide } from 'react-icons/si';
const SobreMi = () => {
  return (
    <div>
      <h2>Sobre mí</h2>
      <section className="sobre-mi">

        <div className="sobre-mi-cuadro">

 <p>
  Soy <strong>Analista Programador Universitario</strong> de la Facultad de Ingeniería de Jujuy. Mi especialización se centra en el desarrollo <strong>Backend utilizando Java y Spring Boot</strong>, con capacidad para diseñar arquitecturas escalables y seguras.
</p>
<p>
  Cuento con experiencia técnica liderando proyectos de gran alcance, como una plataforma provincial de gestión deportiva que administra datos de más de 7,000 equipos. He trabajado bajo metodologías ágiles (<strong>Scrum</strong>), garantizando la calidad del código y la eficiencia en la entrega.
</p>
<p>
  Mi stack principal incluye <strong>Spring Security, Spring Data JPA, MySQL</strong>, complementado con el desarrollo de interfaces dinámicas en <strong>React y Tailwind CSS</strong>. Poseo un fuerte criterio analítico para abordar desafíos complejos, desde el modelado de datos hasta el despliegue en la nube.
</p>
<p>
  Me enfoco en la mejora continua y en la implementación de estándares de industria, con el objetivo de aportar soluciones tecnológicas robustas que generen un impacto real en el negocio.
</p>

        
          
        </div>
        <div className="tecnol">
          <h1>Tecnologías</h1>
          <div className="tecnol-icons">
            {/* Lenguajes de Programación */}
            <TechCard IconComponent={FaJava} color="#007396" />
            <TechCard IconComponent={SiCplusplus} color="#00599C" />
            <TechCard IconComponent={FaJs} color="#F7DF1E" />

            {/* Base de datos y React */}
            <TechCard IconComponent={FaReact} color="#61DAFB" />
            <TechCard IconComponent={SiMysql} color="#4479A1" />
            <TechCard IconComponent={SiPostgresql} color="#336791" />
            <TechCard IconComponent={SiMongodb} color="#47A248" />

            {/* Desarrollo Web */}
            <TechCard IconComponent={FaHtml5} color="#E34F26" />
            <TechCard IconComponent={FaCss3Alt} color="#1572B6" />

            {/* Frameworks */}
           
            <TechCard IconComponent={FaAngular} color="#DD0031" />
            <TechCard IconComponent={SiExpress} color="#28A745" />

            {/* Bibliotecas */}
            <TechCard IconComponent={FaBootstrap} color="#7952B3" />
            <TechCard IconComponent={SiTailwindcss} color="#06B6D4" />


            <TechCard IconComponent={FaNodeJs} color="#339933" />
            <TechCard IconComponent={FaDocker} color="#2496ED" />
            <TechCard IconComponent={SiPrometheus} color="#E6522C" />
            <TechCard IconComponent={SiGrafana} color="#F46800" />
            <TechCard IconComponent={FaGitAlt} color="#F05032" />
            <TechCard IconComponent={FaGithub} color="#000000" />
            <TechCard IconComponent={FaLinux} color="#FCC624" />
            <TechCard IconComponent={FaWindows} color="#0078D6" />
            <TechCard IconComponent={SiOpenai} color="#412991" />
            <TechCard IconComponent={SiPostman} color="#FF6C37" />  {/* Postman */}
            <TechCard IconComponent={SiSpring} color="#6DB33F" />  {/* Spring */}
            <TechCard IconComponent={SiEclipseide} color="#2C2255" />  {/* STS / Modelio (Eclipse) */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;
