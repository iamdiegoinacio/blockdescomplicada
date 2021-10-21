import './Modulos.css';
import Topo from '../../components/Topo/Topo';
import BotaoModulos from '../../components/BotaoModulos/BotaoModulos';
const Modulos = () => {
    return(
        <div className="modulos-container">
            <Topo />
            <div className="modulos-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Perfil" />
                <h1>Módulos</h1>
                <BotaoModulos modulo={'Módulo 1'} tipo={1} />
                <BotaoModulos modulo={'Módulo 2'} tipo={2} />
                <BotaoModulos modulo={'Módulo 3'} tipo={3} />
                <BotaoModulos modulo={'Módulo 4'} tipo={4} />
            </div>
        </div>
    )
};
export default Modulos;