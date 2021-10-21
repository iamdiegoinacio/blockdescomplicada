import './Perfil.css';
import Topo from '../../components/Topo/Topo';
const Perfil = () => {
    return (
        <div className="container-perfil">
            <Topo />
            <div className="perfil-conteudo">
                <img src="/img/tela-perfil.jpg" alt="Imagem da página Perfil" />
                <h1>Perfil</h1>
                <form>
                    <label>Nome e sobrenome</label>
                    <input placeholder="" value="Diego Inácio" />

                    <label>Login</label>
                    <input placeholder="Digite o seu e-mail" value="diegoinacio@gmail.com" />
                </form>
                <a href="https://www.google.com.br">Deseja alterar a sua senha? Clique aqui.</a>
            </div>
        </div>
    )
}
export default Perfil;