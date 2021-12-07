import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import './RecoveryPassword.css';

const PasswordRecovery = () => {
    const [ email, setEmail ] = useState();

    const { resetPassword } = useContext(AuthContext);
    const history = useHistory();

    async function handleResetPassword(e){
        e.preventDefault();
        const response = await resetPassword(email);
        setEmail('');
        redirectUser(response);
    }

    function redirectUser(response){
        response ? history.push('/recuperarsenhasucesso') : history.push('/recuperarsenha');
    }

    return(
        <div className="recovery-password-container">
            <img src="/img/tela-de-recuperacao-de-senha.jpg" alt="Imagem da tela de cadastro" />
            <h1>Recuperar Senha</h1>
            <span>Digite o seu e-mail para recuperar a sua senha</span>
            <form onSubmit={handleResetPassword}>
                <label>E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu e-mail"/>

                <div className="recovery-button-content">
                    <button className="pattern-button-1" type="submit">Recuperar</button>
                </div>
            </form>
            <Link to="/login">Já possui uma conta? Toque aqui e faça login.</Link>
        </div>
    )
}
export default PasswordRecovery;