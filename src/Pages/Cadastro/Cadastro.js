import './Cadastro.css'
const Cadastro = () => {
    return (
        <div className="container-cadastro">
            <img src="/img/tela-de-cadastro.jpg" alt="Imagem da tela de cadastro" />
            <h1>Cadastro</h1>
            <form>
                <label>Nome e sobrenome</label>
                <input placeholder="Digite o seu nome e sobrenome"/>

                <label>Login</label>
                <input placeholder="Digite o seu e-mail" />

                <label>Senha</label>
                <input placeholder="Digite a sua senha" />

                <label>Repita a sua senha</label>
                <input placeholder="Repita a sua senha" />

                <div className="botao-cadastro">
                    <button className="botao-padrao-1" type="submit">cadastrar</button>
                </div>
            </form>
            <a href="https://www.google.com.br">Já possui uma conta? Toque aqui e faça login.</a>
        </div>
    )
};
export default Cadastro;

