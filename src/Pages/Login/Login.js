import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import './Login.css';
const Login = () => {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const { signIn } = useContext(AuthContext);

    function handleLogin(e){
        e.preventDefault();
        signIn(email, password);
    }

    return (
        <div className="login-container">
            <img src="/img/tela-de-login.jpg" alt="Imagem da tela de login" />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>E-mail</label>
                <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Senha</label>
                <input type="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <div className="login-button">
                    <button className="pattern-button-1" type="submit">
                        fazer login
                    </button>
                </div>
            </form>
            <Link to="/cadastro">
                Não possui uma conta? Clique aqui e cadastre-se
            </Link>
            <Link to="/recuperarsenha">
                Esqueceu a sua senha? Clique aqui.
            </Link>

        </div>
    );
}
export default Login;