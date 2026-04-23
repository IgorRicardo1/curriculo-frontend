import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

function Education({ lista }) {
  const { t } = useLanguage();
  if (!lista || lista.length === 0) return null;

  return (
    <section className="education-section" style={{ marginTop: '80px' }}>
      <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '40px', color: 'var(--text-primary)' }}>
        {t('edu_title')}
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {lista.map((item, index) => (
          <motion.div 
            key={item.id || index} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bento-card"
            style={{ padding: '24px' }}
          >
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff' }}>{item.curso}</h3>
            <span style={{ color: 'var(--accent-neon)', fontWeight: '600', display: 'block', margin: '5px 0' }}>{item.instituicao}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.periodo}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
