import './Modulos.css';
import Topo from '../../components/Topo/Topo';
import { FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen } from "react-icons/fa";
import BotaoModulos from '../../components/BotaoModulos/BotaoModulos';
import { Link } from 'react-router-dom';

const Modulos = () => {
    return (
        <div className="container-modulos">
            <Topo />
            <div className="modulos-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página home" />
                <h1>Módulos</h1>
                <Link to="/modulos/modulo1"><BotaoModulos setup={{text: "Módulo 1", type: 1}} /></Link>
                <Link to="/modulos/modulo2"><BotaoModulos setup={{text: "Módulo 2", type: 2}} /></Link>
                <Link to="/modulos/modulo3"><BotaoModulos setup={{text: "Módulo 3", type: 3}} /></Link>
                <Link to="/modulos/modulo4"><BotaoModulos setup={{text: "Módulo 4", type: 4}} /></Link>
            </div>
        </div>
    )
}
export default Modulos;

