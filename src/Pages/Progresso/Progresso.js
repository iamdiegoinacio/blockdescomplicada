import './Progresso.css';
import Topo from '../../components/Topo/Topo';
const Progresso = () => {
    return (
        <div className="container-progresso">
            <Topo />
            <div className="progresso-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Progresso" />
                <h1>Progresso</h1>
                <h2>você concluiu</h2>
                <div className="porcentagem-progresso">
                    <h3>25%</h3>
                    <h4>dos módulos</h4>
                </div>
            </div>
        </div>
    )
}
export default Progresso;