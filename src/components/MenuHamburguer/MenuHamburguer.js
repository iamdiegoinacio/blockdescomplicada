import { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuHamburguer.css';
import { FaHome, FaUserAlt, FaRegQuestionCircle, FaGg, FaCodepen, FaChevronLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const MenuHamburguer = () => {

    const { logOut } = useContext(AuthContext);

    function handleLogout(){
        logOut();
    }

    return (
        <Menu width={ 250 }>
            <Link to="/home" className="menu-item"><FaHome style={{marginRight: '10px'}} />Home</Link>
            <Link to="/perfil" className="menu-item"><FaUserAlt style={{marginRight: '10px'}} />Perfil</Link>
            <Link to="/modulos" className="menu-item"><FaGg style={{marginRight: '10px'}} />Módulos</Link>
            <Link to="/progresso" className="menu-item"><FaCodepen style={{marginRight: '10px'}} />Progresso</Link>
            <span onClick={() => handleLogout()} className="menu-item" alt="Deslogar"><FaChevronLeft style={{marginRight: '10px'}} />Deslogar</span>
        </Menu>
    )
}

export default MenuHamburguer;