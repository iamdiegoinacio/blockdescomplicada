import './RecuperarSenha.css';
const RecuperarSenha = () => {
    return(
        <div className="container-recuperar-senha">
            <img src="/img/tela-de-recuperacao-de-senha.jpg" alt="Imagem da tela de cadastro" />
            <h1>Recuperar Senha</h1>
            <span>Digite o seu e-mail para recuperar a sua senha</span>
            <form>
                <label>E-mail</label>
                <input placeholder="Digite o seu e-mail"/>

                <div className="botao-recuperacao">
                    <button className="botao-padrao-1" type="submit">Recuperar</button>
                </div>
            </form>
            <a href="https://www.google.com.br">Já possui uma conta? Toque aqui e faça login.</a>
        </div>
    )
}
export default RecuperarSenha;