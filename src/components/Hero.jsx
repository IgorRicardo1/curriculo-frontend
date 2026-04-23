import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Hero({ nome, titulo, resumo_curto, linkedin, github, foto, className }) {
    const formatLink = (link) => {
        if (!link) return "#";
        return link.startsWith('http') ? link : `https://${link}`;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`bento-card hero-card ${className}`}
        >
            <div className="hero-content" style={{ flex: 1, zIndex: 1 }}>
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ 
                        color: 'var(--accent-neon)', 
                        fontFamily: 'monospace', 
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}
                >
                    Desenvolvedor Full-Stack
                </motion.span>
                
                <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1', margin: '15px 0' }}>
                    Olá, eu sou <br />
                    <span className="text-gradient" style={{ fontWeight: '800' }}>{nome}</span>
                </h1>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '400px', marginBottom: '30px', lineHeight: '1.5' }}>
                    {resumo_curto}
                </p>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href={formatLink(linkedin)} target="_blank" rel="noreferrer" className="glow" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                            <SiLinkedin />
                        </a>
                        <a href={formatLink(github)} target="_blank" rel="noreferrer" className="glow" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                            <SiGithub />
                        </a>
                    </div>
                    <div className="glow" style={{ padding: '2px 12px', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid var(--accent-neon)', borderRadius: '20px', fontSize: '0.75rem', color: 'var(--accent-neon)', fontWeight: '600' }}>
                        Software Engineering
                    </div>
                </div>
            </div>


            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                <div style={{ 
                    position: 'absolute', 
                    width: '180px', 
                    height: '180px', 
                    background: 'var(--accent-neon)', 
                    filter: 'blur(40px)', 
                    opacity: 0.2,
                    borderRadius: '50%'
                }}></div>
                <img 
                    src={foto} 
                    alt={nome} 
                    style={{ 
                        width: '200px', 
                        height: '200px', 
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                        border: '2px solid var(--border-color)',
                        position: 'relative',
                        filter: 'grayscale(10%)'
                    }} 
                />
            </div>


            <div style={{ 
                position: 'absolute', 
                right: '-20px', 
                bottom: '-20px', 
                fontSize: '10rem', 
                fontWeight: '900', 
                color: 'rgba(255, 255, 255, 0.015)', 
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none'
            }}>
                DEV
            </div>
        </motion.div>
    );
}

export default Hero;
