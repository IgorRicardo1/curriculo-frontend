import React from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiGit, SiCss3, SiHtml5, SiPython } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function TechStack() {
  const techs = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "C#", icon: <TbBrandCSharp />, color: "#239120" }, 
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  ];

  return (
    <section className="tech-stack-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ 
        color: '#fff', 
        fontSize: '2rem', 
        marginBottom: '40px', 
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '900',
        textTransform: 'uppercase'
      }}>
        Minhas Tecnologias
      </h2>
      
      <div className="icons-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="icon-wrapper" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;