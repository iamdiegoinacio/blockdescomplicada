import './Pergunta.css';
import Topo from '../../components/Topo/Topo';
import Questao from '../../components/Questao/Questao';
const Pergunta = () => {
    return (
        <div className="container-pergunta">
            <Topo />
            <div className="pergunta-conteudo">
                <img src="/img/tela-questoes.jpg" alt="Imagem da página Perguntas" />
                <Questao 
                    pergunta={'1- O que é Blockchain?'}
                />
            </div>
        </div>
    )
}
export default Pergunta;