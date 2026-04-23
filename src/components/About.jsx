import React from "react";
import { motion } from "framer-motion";

function About({ bio, className }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`bento-card ${className}`}
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <h3 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-neon)' }}>
                Sobre Mim
            </h3>
            <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                flexGrow: 1
            }}>
                {bio}
            </p>
            
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                LOCALIZAÇÃO: <span style={{ color: 'var(--text-secondary)' }}>BRASIL</span>
            </div>
        </motion.div>
    );
}

export default About;
