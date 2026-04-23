import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Experience from "./components/Experience"
import Education from "./components/Education"
import ContactForm from "./components/ContactForm"
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si"
import { useLanguage } from "./context/LanguageContext"

function Portifolio() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(false);
    const { t, getLocalized } = useLanguage();

    const buscarDados = async () => {
        setErro(false);
        try {
            const resposta = await fetch(`${apiUrl}/perfil`);
            if (!resposta.ok) throw new Error("Falha na conexão");
            const resultado = await resposta.json();
            setDados(resultado);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            setErro(true);
        }
    }

    useEffect(() => {
        buscarDados();
    }, []);

    if (erro) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', background: 'var(--bg-color)', color: '#fff' }}>
                <p className="font-heading" style={{ fontSize: '1.5rem' }}>ERRO AO CARREGAR OS DADOS.</p>
                <button 
                    onClick={buscarDados}
                    style={{ 
                        padding: '12px 24px', 
                        background: 'transparent', 
                        border: '1px solid var(--accent-neon)', 
                        color: 'var(--accent-neon)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        borderRadius: '50px'
                    }}
                >
                    TENTAR NOVAMENTE
                </button>
            </div>
        );
    }

    if (!dados) return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-color)' }}>
            <div className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent-neon)', letterSpacing: '5px', textTransform: 'uppercase' }}>
                Carregando Sistema...
            </div>
        </div>
    );

    const formatLink = (link) => {
        if (!link) return "#";
        return link.startsWith('http') ? link : `https://${link}`;
    };

    const githubUsername = dados.github_url ? dados.github_url.split('/').filter(Boolean).pop() : null;
    const githubFoto = githubUsername ? `https://github.com/${githubUsername}.png` : dados.foto_url;

    return (
        <main>
            <NavBar />
            

            <div id="hero" className="bento-container" style={{ marginTop: '100px' }}>
                <Hero
                    nome={dados.nome}
                    titulo={getLocalized(dados, 'titulo')}
                    resumo_curto={getLocalized(dados, 'resumo_curto')}
                    linkedin={dados.linkedin_url}
                    github={dados.github_url}
                    foto={githubFoto}
                    className="col-span-2 row-span-2"
                />
                
                <About bio={getLocalized(dados, 'bio')} localizacao={dados.localizacao} className="row-span-2" />
                
                <TechStack className="col-span-2" />
                

                <div className="bento-card col-span-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px' }}>
                    <h3 className="font-heading" style={{ fontSize: '1.2rem' }}>{t('contact_title')}</h3>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href={formatLink(dados.linkedin_url)} target="_blank" rel="noreferrer" className="glow" style={{ fontWeight: '600', color: 'var(--accent-neon)' }}>LinkedIn</a>
                        <a href={formatLink(dados.github_url)} target="_blank" rel="noreferrer" className="glow" style={{ fontWeight: '600', color: 'var(--accent-neon)' }}>GitHub</a>
                        {dados.whatsapp && (
                            <a href={`https://wa.me/${dados.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="glow" style={{ fontWeight: '600', color: 'var(--accent-neon)' }}>WhatsApp</a>
                        )}
                        {dados.email_contato && (
                            <a href={`mailto:${dados.email_contato}`} className="glow" style={{ fontWeight: '600', color: 'var(--accent-neon)' }}>Email</a>
                        )}
                    </div>
                </div>

                <div className="bento-card col-span-1" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 10px #00ff00' }}></div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{t('hero_available')}</span>
                </div>

                <div id="contact">
                    <ContactForm />
                </div>
            </div>


            <div id="projects" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
                <Projects lista={dados.projetos} />
            </div>

            <div id="experience" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
                <Experience lista={dados.experiencias} />
                <Education lista={dados.formacao} />
            </div>

            <footer style={{ textAlign: 'center', padding: '60px 40px', color: 'var(--text-secondary)', fontSize: '0.85rem', borderTop: '1px solid var(--border-color)', marginTop: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '25px' }}>
                    <a href={formatLink(dados.linkedin_url)} target="_blank" rel="noreferrer" className="glow" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }} title="LinkedIn">
                        <SiLinkedin />
                    </a>
                    <a href={formatLink(dados.github_url)} target="_blank" rel="noreferrer" className="glow" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }} title="GitHub">
                        <SiGithub />
                    </a>
                    {dados.whatsapp && (
                        <a href={`https://wa.me/${dados.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="glow" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }} title="WhatsApp">
                            <SiWhatsapp />
                        </a>
                    )}
                </div>
                <p>&copy; {new Date().getFullYear()} {dados.nome}. {t('footer_copy')}</p>
            </footer>
        </main>
    )
}

export default Portifolio;
