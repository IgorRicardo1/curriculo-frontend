import React from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiGit, SiPython, SiDjango, SiFlask } from "react-icons/si";
import { motion } from "framer-motion";

function TechStack({ className }) {
  const techs = [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Flask", icon: <SiFlask />, color: "#B0B0B0" },
  ];

  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`bento-card ${className}`}
    >
      <h3 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Minhas Tecnologias</h3>
      
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', 
          gap: '20px',
          justifyItems: 'center'
      }}>
        {techs.map((tech, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.2, rotate: 5 }}
            style={{ 
                fontSize: '2rem', 
                color: tech.color, 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
            }}
            title={tech.name}
          >
            {tech.icon}
            <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase' }}>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechStack;
