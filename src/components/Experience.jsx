import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

function Experience({ lista }) {
  const { t } = useLanguage();
  if (!lista || lista.length === 0) return null;

  return (
    <section className="experience-section" style={{ marginTop: '80px' }}>
      <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '40px', color: 'var(--text-primary)' }}>
        {t('exp_title')}
      </h2>
      
      <div className="timeline" style={{ position: 'relative', borderLeft: '1px solid var(--border-color)', paddingLeft: '30px', marginLeft: '10px' }}>
        {lista.map((item, index) => (
          <motion.div 
            key={item.id || index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ marginBottom: '40px', position: 'relative' }}
          >
            {/* Dot Neon */}
            <div style={{ 
                position: 'absolute', 
                left: '-36px', 
                top: '5px', 
                width: '10px', 
                height: '10px', 
                background: 'var(--accent-neon)', 
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--accent-neon)'
            }}></div>

            <div className="timeline-header" style={{ marginBottom: '10px' }}>
              <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#fff' }}>{item.cargo}</h3>
              <span style={{ color: 'var(--accent-neon)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {item.empresa}
              </span>
            </div>
            
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '15px', fontFamily: 'monospace' }}>
                {item.periodo}
            </span>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                {item.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
