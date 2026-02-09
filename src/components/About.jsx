import React from 'react';

function About({ bio }) {
  return (
    <section className="about-section" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#e2e2e2', marginBottom: '20px' }}>Sobre Mim</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
        <p>{bio || "Desenvolvedor apaixonado por tecnologia."}</p>
      </div>
    </section>
  );
}

export default About;