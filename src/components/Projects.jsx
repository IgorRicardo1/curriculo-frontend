import React from "react";

function Projects({ lista }) {
    if (!lista || lista.length === 0) return null;

    return (
        <section id="projetos" className="projects-section">
            <h2>Meus Projetos</h2>
            <div className="projects-grid">
                {lista.map(projeto => (
                    <div key={projeto.id} className="project-card">
                        
                        {/* Imagem */}
                        <div className="card-image">
                            <img src={projeto.imagem_url} alt={projeto.titulo} />
                        </div>

                        {/* Conteúdo */}
                        <div className="card-content">
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>

                            {/* Tags */}
                            <div className="tags-container">
                                {projeto.tags && projeto.tags.split(',').map((tag, index) => (
                                    <span key={index} className="tag-badge">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>

                            {/* Botões */}
                            <div className="card-links">
                                {projeto.link_repo && (
                                    <a href={projeto.link_repo} target="_blank" rel="noopener noreferrer" className="btn-repo">
                                        GitHub
                                    </a>
                                )}
                                
                                {projeto.link_demo && (
                                    <a href={projeto.link_demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                        Ver Demo
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;