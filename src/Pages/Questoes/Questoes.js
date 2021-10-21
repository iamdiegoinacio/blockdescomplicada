import './Questoes.css';
import Topo from '../../components/Topo/Topo';
import BotaoQuestoes from '../../components/BotaoQuestoes/BotaoQuestoes';
const Questoes = () => {
    return (
        <div className="container-questoes">
            <Topo />
            <div className="questoes-conteudo">
                <img src="/img/tela-questoes.jpg" alt="Imagem da página Questoes" />
                <h1>Questoes</h1>
                <h2>Escolha a dificuldade das questões</h2>
                <BotaoQuestoes texto={'Fácil'}/>
                <BotaoQuestoes texto={'Mediana'}/>
                <BotaoQuestoes texto={'Díficil'}/>
            </div>
        </div>
    )
}
export default Questoes;