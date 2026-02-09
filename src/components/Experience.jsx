import React from 'react';

function Experience({ lista }) {
  if (!lista || lista.length === 0) return null;

  return (
    <section className="experience-section">
      <h2>Experiência Profissional</h2>
      
      <div className="timeline">
        {lista.map((item, index) => (
          <div key={item.id || index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.cargo}</h3>
                <span className="company">{item.empresa}</span>
              </div>
              <span className="period">{item.periodo}</span>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;