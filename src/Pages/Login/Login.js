import './Login.css';
const Login =  () => {
    return(
        <div className="container-login">
            <img src="/img/tela-de-login.jpg" alt="Imagem da tela de login" />
            <h1>Login</h1>
            <form>
                <label>Login</label>
                <input placeholder="Digite o seu e-mail"/>

                <label>Senha</label>
                <input placeholder="Digite a sua senha"/>

                <div className="botao-login">
                    <button className="botao-padrao-1" type="submit">fazer login</button>
                </div>
            </form>
            <a href="https://www.google.com.br">Não possui uma conta? Clique aqui e cadastre-se</a>
            <a href="https://www.google.com.br">Esqueceu a sua senha? Clique aqui.</a>
        </div>
    );
}
export default Login;