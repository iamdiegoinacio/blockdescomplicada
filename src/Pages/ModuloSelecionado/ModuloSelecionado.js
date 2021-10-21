import './ModuloSelecionado.css';
import Topo from '../../components/Topo/Topo';
import BotaoModuloEscolhido from '../../components/BotaoModuloEscolhido/BotaoModuloEscolhido';
const ModuloSelecionado = () => {
    return (
        <div className="modulo-selecionado-container">
            <Topo />
            <div className="modulo-selecionado-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Perfil" />
                <h1>Módulo 1</h1>
                <div className="conteudo-download">
                    <BotaoModuloEscolhido titulo={'O que é uma rede descentralizada?'} />
                    <BotaoModuloEscolhido titulo={'O que é uma Blockchain?'} />
                    <BotaoModuloEscolhido titulo={'No que a Blockchain está presente?'} />
                </div>
                <span>Leu todo o conteúdo?</span>
                <span>Toque no botão a baixo para concluir o módulo.</span>
                <button className="botao-padrao-1">Concluir</button>
            </div>
        </div>
    )
};
export default ModuloSelecionado;