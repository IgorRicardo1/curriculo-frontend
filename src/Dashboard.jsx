import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [novoProjeto, setNovoProjeto] = useState({
        titulo: '',
        descricao: '',
        imagem_url: '',
        link_repo: '',
        tags: ''
    });
    const [projetos, setProjetos] = useState([]);
    const navigate = useNavigate();
    const deletarProjeto = async (id) => {
        const confirmou = window.confirm("Tem certeza que deseja apagar este projeto?");
        if (!confirmou) {
            return;
        }
        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/projetos/${id}`, {
                method: 'DELETE'
            });
            if (resposta.ok) {
                alert("Projeto deletado!");
                setProjetos(projetos.filter(item => item.id !== id));
            } else {
                alert("Erro ao deletar no servidor.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    const handleMudanca = (e) => {
        setNovoProjeto({ ...novoProjeto, [e.target.name]: e.target.value });
    };



    const salvarProjeto = async (e) => {
        e.preventDefault();
        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/projetos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProjeto)
            });

            if (resposta.ok) {
                const projetoCriado = await resposta.json();
                alert("Projeto salvo com sucesso!");
                setProjetos([...projetos, projetoCriado]);
                setNovoProjeto({
                    titulo: '', descricao: '', imagem_url: '', link_repo: '', tags: ''
                });
            } else {
                alert("Erro ao salvar o projeto.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    

    const fazerLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }

        else {
            const buscarDados = async () => {
                try {
                    const resposta = await fetch(`${import.meta.env.VITE_API_URL}/perfil`)
                    if (!resposta.ok) {
                        throw new Error(`Erro HTTP: status ${resposta.status}`);
                    }
                    const dados = await resposta.json();
                    setProjetos(dados.projetos)
                } catch (error) {
                    console.error("Erro ao buscar projetos", error);
                }
            };
            buscarDados();
        }

    }, [navigate]);

    return (
        <div style={{ padding: '20px', color: 'white' }}>
            <h1>Painel Admin ⚡︎</h1>
            <button onClick={fazerLogout}>Sair</button>
            <h2>Meus Projetos:</h2>
            <ul>
                {projetos.map(projeto => (
                    <li key={projeto.id}>
                        {projeto.titulo}
                        <button onClick={() => deletarProjeto(projeto.id)}>Apagar</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={salvarProjeto}>
                <input name="titulo"
                    value={novoProjeto.titulo}
                    placeholder="Titulo"
                    onChange={handleMudanca}
                />

                <input name="descricao"
                    placeholder="Descrição"
                    value={novoProjeto.descricao}
                    onChange={handleMudanca}
                />
                <input name="imagem_url"
                    placeholder="Endereço Imagem"
                    value={novoProjeto.imagem_url}
                    onChange={handleMudanca}
                />
                <input name="link_repo"
                    placeholder="Link do Repositório"
                    value={novoProjeto.link_repo}
                    onChange={handleMudanca}
                />
                <input name="tags"
                    placeholder="TAGS"
                    value={novoProjeto.tags}
                    onChange={handleMudanca}
                />
                <button type="submit">Salvar</button>
            </form>

        </div>
    );
}

export default Dashboard;