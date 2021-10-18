import { slide as Menu } from 'react-burger-menu';
import './MenuHamburguer.css';
import { FaHome, FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen } from "react-icons/fa";
export const MenuHamburguer = () => {
    return (
        <Menu width={ 250 }>
            <a id="home" className="menu-item" href="/"><FaHome style={{marginRight: '10px'}} />Home</a>
            <a id="about" className="menu-item" href="/about"><FaUserAlt style={{marginRight: '10px'}} />Perfil</a>
            <a id="contact" className="menu-item" href="/contact"><FaRegQuestionCircle style={{marginRight: '10px'}} />Questões</a>
            <a id="contact" className="menu-item" href="/contact"><FaGg style={{marginRight: '10px'}} />Módulos</a>
            <a id="contact" className="menu-item" href="/contact"><FaCodepen style={{marginRight: '10px'}} />Progresso</a>
        </Menu>
    )
}

export default MenuHamburguer;