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
    <div className="sobre-mi-wrapper">
      <h2 className="sobre-mi-titulo">Sobre mí</h2>
      <section className="sobre-mi">

        <div className="sobre-mi-cuadro">

 <p>
  Soy <strong>Analista Programador Universitario</strong> graduado en la Facultad de Ingeniería de Jujuy. Me especializo en desarrollo <strong>backend con Java y Spring Boot</strong>, diseñando arquitecturas seguras y escalables.
</p>
<p>
  Cuento con experiencia en proyectos de alto impacto, como una plataforma provincial de gestión deportiva que administra datos de más de 7.000 equipos. Trabajo bajo metodologías ágiles (<strong>Scrum</strong>) con foco en calidad de código y entregas eficientes.
</p>
<p>
  Mi stack principal incluye <strong>Spring Security, Spring Data JPA y MySQL</strong>, complementado con interfaces dinámicas en <strong>React y Tailwind CSS</strong>. Abordo desafíos complejos desde el modelado de datos hasta el despliegue en la nube.
</p>
<p>
  Me enfoco en mejora continua y estándares de industria para crear soluciones tecnológicas robustas, mantenibles y con impacto real en el negocio.
</p>

        
          
        </div>
        <div className="tecnol">
          <h3>Tecnologías</h3>
          <div className="tecnol-icons">
            {/* Lenguajes de Programación */}
            <TechCard IconComponent={FaJava} color="#2d8ec7" />
            <TechCard IconComponent={SiCplusplus} color="#4f87d5" />
            <TechCard IconComponent={FaJs} color="#f6d14f" />

            {/* Base de datos y React */}
            <TechCard IconComponent={FaReact} color="#59caec" />
            <TechCard IconComponent={SiMysql} color="#5f91bc" />
            <TechCard IconComponent={SiPostgresql} color="#7ea0c7" />
            <TechCard IconComponent={SiMongodb} color="#65b47d" />

            {/* Desarrollo Web */}
            <TechCard IconComponent={FaHtml5} color="#e08b4f" />
            <TechCard IconComponent={FaCss3Alt} color="#66aee4" />

            {/* Frameworks */}
           
            <TechCard IconComponent={FaAngular} color="#d96b82" />
            <TechCard IconComponent={SiExpress} color="#8bc499" />

            {/* Bibliotecas */}
            <TechCard IconComponent={FaBootstrap} color="#9c8bc6" />
            <TechCard IconComponent={SiTailwindcss} color="#66cadf" />


            <TechCard IconComponent={FaNodeJs} color="#69b86a" />
            <TechCard IconComponent={FaDocker} color="#68b8ef" />
            <TechCard IconComponent={SiPrometheus} color="#e28566" />
            <TechCard IconComponent={SiGrafana} color="#f0aa63" />
            <TechCard IconComponent={FaGitAlt} color="#ef856e" />
            <TechCard IconComponent={FaGithub} color="#d4deef" />
            <TechCard IconComponent={FaLinux} color="#ffd86b" />
            <TechCard IconComponent={FaWindows} color="#6bb0e0" />
            <TechCard IconComponent={SiOpenai} color="#99a5d9" />
            <TechCard IconComponent={SiPostman} color="#f09a72" />
            <TechCard IconComponent={SiSpring} color="#a4cf81" />
            <TechCard IconComponent={SiEclipseide} color="#8c85c2" />

          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;
