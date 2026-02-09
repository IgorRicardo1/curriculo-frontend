import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Login() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setCarregando(true);

        try {
            const resposta = await fetch(`${apiUrl}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            });

            const dados = await resposta.json();

            if (resposta.ok && dados.auth) {
                localStorage.setItem('token', dados.token);
                localStorage.setItem('userEmail', dados.usuario?.email);

                alert("Login realizado!");
                navigate('/admin');

            } else {
                setErro(dados.error || dados.message || 'Falha no Login');
            }

        } catch (error) {
            setErro('Erro ao conectar com o servidor. Verifique se o backend esta rodando.');
        }

        finally {
            setCarregando(false);
        }

    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Acesso Restrito</h1>
                <p>Área administrativa do POrtfólio</p>

                {erro && <div style={{ color: '#ff4444', marginBottom: '15px', fontWeight: 'bold' }}>{erro}</div>}


                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha: </label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-login" disabled={carregando}>
                        {carregando ? "Carregando..." : "Entrar no Sistema"}
                    </button>
                </form>
                <a href="/" className="back-link"> Voltar ao Site</a>
            </div>
        </div>
    )
}
export default Login;