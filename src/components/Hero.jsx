import React from 'react';
import { useMemo } from 'react';


function Hero({ nome, titulo, linkedin, github }) {

  const saudacao = useMemo(() => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <span className="greeting">{saudacao}, meu nome é</span>
        <h1>{nome}</h1>
        <h2 className="highlight">{titulo}</h2>
        <p>Apaixonado por tecnologia, desenvolvimento pessoal e jogos eletrônicos</p>

        <div className="social-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://github.com/IgorRicardo1.png"
          alt="Foto de Perfil"
          onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/10337/10337609.png' }} // Fallback se não tiver foto no github
        />
        <div className="glow-effect"></div>
      </div>
    </section>
  );
}

export default Hero;