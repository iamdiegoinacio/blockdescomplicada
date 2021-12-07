import './Home.css';
import Header from '../../components/Header/Header';
import { FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen } from "react-icons/fa";
import HomeButton from '../../components/HomeButton/HomeButton';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página home" />
                <h1>Home</h1>
                <Link to="/perfil"><HomeButton Setup={{Icon: <FaUserAlt />, text: "Perfil", type: 1}} /></Link>
                <Link to="/questoes"><HomeButton Setup={{Icon: <FaRegQuestionCircle />, text: "Questões", type: 2}} /></Link>
                <Link to="/modulos"><HomeButton Setup={{Icon: <FaGg />, text: "Módulos", type: 1}} /></Link>
                <Link to="/progresso"><HomeButton Setup={{Icon: <FaCodepen/>, text: "Progresso", type: 2}} /></Link>
            </div>
        </div>
    )
}
export default Home;

