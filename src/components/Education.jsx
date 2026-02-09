import React from 'react';

function Education({ lista }) {
  if (!lista || lista.length === 0) return null;

  return (
    <section className="education-section">
      <h2>Formação Acadêmica</h2>
      
      <div className="education-grid">
        {lista.map((item, index) => (
          <div key={item.id || index} className="education-card">
            <h3>{item.curso}</h3>
            <span className="institution">{item.instituicao}</span>
            <span className="period">{item.periodo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;