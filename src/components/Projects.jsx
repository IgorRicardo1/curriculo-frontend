import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Cpu, Eye, Smartphone, Layout, Database, Sparkles, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

const MockupWindow = ({ children, aspectRatio = "16/10", label = "Project Preview" }) => (
    <div style={{ 
        overflow: 'hidden', 
        borderRadius: '12px', 
        background: '#1a1a1a',
        border: '1px solid var(--border-color)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        width: '100%'
    }}>
        <div style={{ 
            height: '25px', 
            background: 'rgba(255,255,255,0.05)', 
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px'
        }}>
            <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></div>
            </div>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', opacity: 0.5, fontFamily: 'monospace' }}>{label}</span>
        </div>
        <div style={{ overflow: 'hidden', aspectRatio }}>
            {children}
        </div>
    </div>
);


function Projects({ lista }) {
    const formatLink = (link) => {
        if (!link) return "#";
        return link.startsWith('http') ? link : `https://${link}`;
    };

    const [imagemAmpliada, setImagemAmpliada] = useState(null);

    if (!lista || lista.length === 0) return null;

    return (
        <section id="projects" style={{ marginTop: '120px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <h2 className="font-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', letterSpacing: '-3px', textTransform: 'uppercase' }}>
                    <span className="text-gradient">Selected Works</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto' }}>
                    Explorando as fronteiras entre engenharia robusta e design intuitivo.
                </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
                {lista.map((projeto, index) => (
                    <div key={projeto.id} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {/* Narrative Grid */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '40px',
                            marginTop: '20px'
                        }}>
                            {/* Intro & Goal */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.03)', position: 'absolute', zIndex: -1 }}>0{index + 1}</span>
                                    <h3 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{projeto.titulo}</h3>
                                </div>
                                <div className="tags-container" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
                                    {projeto.tags && projeto.tags.split(',').map((tag, i) => (
                                        <span key={i} style={{ 
                                            fontSize: '0.65rem', 
                                            padding: '4px 12px', 
                                            background: 'rgba(0, 229, 255, 0.05)', 
                                            border: '1px solid rgba(0, 229, 255, 0.2)',
                                            color: 'var(--accent-neon)',
                                            borderRadius: '100px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase'
                                        }}>
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                                    {projeto.descricao}
                                </p>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {projeto.link_repo && (
                                        <a href={formatLink(projeto.link_repo)} target="_blank" rel="noopener noreferrer" className="glow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                                            <SiGithub size={20} /> Repository
                                        </a>
                                    )}
                                    {projeto.link_demo && (
                                        <a href={formatLink(projeto.link_demo)} target="_blank" rel="noopener noreferrer" className="glow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-neon)', fontWeight: '700', fontSize: '0.9rem' }}>
                                            <Eye size={20} /> Live Experience
                                        </a>
                                    )}
                                </div>
                            </motion.div>

                            {/* Technical Deep Dive */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
                            >
                                <div className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-neon)', marginBottom: '10px' }}>
                                        <Code2 size={18} />
                                        <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>O Desafio</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {projeto.desafio || "Desenvolvimento de uma solução técnica complexa focada em performance e usabilidade."}
                                    </p>
                                </div>
                                <div className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-neon)', marginBottom: '10px' }}>
                                        <Cpu size={18} />
                                        <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>A Engenharia</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {projeto.engenharia || "Uso de padrões de projeto modernos para garantir escalabilidade e manutenção eficiente."}
                                    </p>
                                </div>
                                <div className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-neon)', marginBottom: '10px' }}>
                                        <Sparkles size={18} />
                                        <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>Diferencial</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {projeto.diferencial || "Entrega de uma experiência de usuário excepcional com foco em detalhes e fluidez."}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Project Hero Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                        >
                            <MockupWindow label={`${projeto.titulo} // Main View`}>
                                <img 
                                    src={projeto.imagem_url} 
                                    alt={projeto.titulo} 
                                    onClick={() => setImagemAmpliada(projeto.imagem_url)}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#0a0a0a', cursor: 'zoom-in' }}
                                />
                            </MockupWindow>
                        </motion.div>

                        {/* Gallery */}
                        {projeto.galeria_urls && projeto.galeria_urls.filter(url => url !== projeto.imagem_url).length > 0 && (
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                                gap: '20px',
                                marginTop: '20px'
                            }}>
                                {projeto.galeria_urls.filter(url => url !== projeto.imagem_url).map((url, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <MockupWindow aspectRatio="16/9" label={`View 0${i+1}`}>
                                            <img 
                                                src={url} 
                                                alt={`Gallery ${i}`} 
                                                onClick={() => setImagemAmpliada(url)}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#0a0a0a', cursor: 'zoom-in' }} 
                                            />
                                        </MockupWindow>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                    </div>
                ))}
            </div>


            <AnimatePresence>
                {imagemAmpliada && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setImagemAmpliada(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 9999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '40px',
                            cursor: 'zoom-out'
                        }}
                    >
                        <button 
                            onClick={(e) => { e.stopPropagation(); setImagemAmpliada(null); }}
                            style={{
                                position: 'absolute',
                                top: '20px', right: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                cursor: 'pointer',
                                padding: '10px'
                            }}
                        >
                            <X size={32} />
                        </button>
                        <motion.img 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={imagemAmpliada} 
                            alt="Ampliada" 
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar na própria imagem
                        />
                    </motion.div>
                )}
            </AnimatePresence>


        </section>
    );
}

export default Projects;
