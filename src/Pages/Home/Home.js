import './Home.css';
import Topo from '../../components/Topo/Topo';

import { FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen } from "react-icons/fa";
import BotaoHome from '../../components/BotaoHome/BotaoHome';
const Home = () => {
    return (
        <div className="container-home">
            <Topo />
            <div className="home-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página home" />
                <h1>Home</h1>
                <BotaoHome Setup={{Icone: <FaUserAlt />, texto: "Perfil", tipo: 1}} />
                <BotaoHome Setup={{Icone: <FaRegQuestionCircle />, texto: "Questões", tipo: 2}} />
                <BotaoHome Setup={{Icone: <FaGg />, texto: "Módulos", tipo: 1}} />
                <BotaoHome Setup={{Icone: <FaCodepen/>, texto: "Progresso", tipo: 2}} />
            </div>
        </div>
    )
}
export default Home;