import './AlterarSenha.css';
import Topo from '../../components/Topo/Topo';
const AlterarSenha = () => {
    return (
        <div className="container-alterar">
            <Topo />
            <div className="alterar-conteudo">
                <img src="/img/tela-de-recuperacao-de-senha.jpg" alt="Imagem da página Perfil" />
                <h1>Alterar Senha</h1>
                <form>
                    <label>Digite a sua senha atual</label>
                    <input placeholder="Digite a senha atual" />

                    <label>Digite a nova senha</label>
                    <input placeholder="Digite a nova senha" />

                    <label>Repita a nova senha</label>
                    <input placeholder="Repita a nova senha" />

                    <div className="botao-alterar">
                        <button className="botao-padrao-1" type="submit">Recuperar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AlterarSenha;