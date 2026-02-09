import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Experience from "./components/Experience"
import Education from "./components/Education"

function Portifolio() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [dados, setDados] = useState(null)

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const resposta = await fetch(`${apiUrl}/perfil`)
                const resultado = await resposta.json()
                setDados(resultado);
            } catch (error) {
                console.error("Erro ao buscar:", error)
            }
        }
        buscarDados()
    }, []);

    if (!dados) return <div className="loading">CARREGANDO SISTEMA...</div>;

    return (
        <main>
            <NavBar />
            <div id="hero">
                <Hero
                    nome={dados.nome}
                    titulo={dados.titulo}
                    linkedin={dados.linkedin_url}
                    github={dados.github_url}
                />
            </div>
            
            <div id="about">
                <About bio={dados.bio} />
            </div>

            <TechStack />

            <div id="projects">
                <Projects lista={dados.projetos} />
            </div>

            <div id="experience">
                <Experience lista={dados.experiencias} />
                <Education lista={dados.formacao} />
            </div>

            <footer style={{ textAlign: 'center', padding: '40px', color: '#666', fontSize: '0.8rem', borderTop: '1px solid #222', marginTop: '40px' }}>
                <p>&copy; {new Date().getFullYear()} {dados.nome}. Todos os direitos reservados.</p>
            </footer>
        </main>
    )
}

export default Portifolio;