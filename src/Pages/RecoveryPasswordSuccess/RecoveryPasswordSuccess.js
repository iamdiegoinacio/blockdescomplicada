import './RecoveryPasswordSuccess.css';
const RecoveryPasswordSuccess = () => {
    return(
        <div className="recovery-password-success-container">
            <img src="/img/tela-de-recuperacao-de-senha.jpg" alt="Imagem da tela de cadastro" />
            <h1>Recuperar Senha</h1>
            <span>Link de recuperação enviado para o e-mail</span>
            <span>Verifique a caixa de entrada e spam</span>
        </div>
    ) 
}
export default RecoveryPasswordSuccess;