// src/components/TechCard.jsx
import React from 'react';

export default function TechCard({ tech, IconComponent, color  }) {
  return (
    <div className="tech-card" title={tech || 'Tecnología'}>
      <IconComponent size={60} color={color} />
      {tech ? <span>{tech}</span> : null}
    </div>
  );
}
