import './Home.css';
import Topo from '../../components/Topo/Topo';
import { FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen } from "react-icons/fa";
import BotaoHome from '../../components/BotaoHome/BotaoHome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-home">
            <Topo />
            <div className="home-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página home" />
                <h1>Home</h1>
                <Link to="/perfil"><BotaoHome Setup={{Icone: <FaUserAlt />, texto: "Perfil", tipo: 1}} /></Link>
                <Link to="/questoes"><BotaoHome Setup={{Icone: <FaRegQuestionCircle />, texto: "Questões", tipo: 2}} /></Link>
                <Link to="/modulos"><BotaoHome Setup={{Icone: <FaGg />, texto: "Módulos", tipo: 1}} /></Link>
                <Link to="/progresso"><BotaoHome Setup={{Icone: <FaCodepen/>, texto: "Progresso", tipo: 2}} /></Link>
            </div>
        </div>
    )
}
export default Home;

