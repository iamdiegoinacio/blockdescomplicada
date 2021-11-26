import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import './Topo.css'
import { Link } from 'react-router-dom';

const Topo = () => {
    return (
        <div className="topo-container">
            <MenuHamburguer />
            <div className="foto-de-perfil">
                <Link to="/perfil"><img src="/img/perfil.jpg" alt="Foto de perfil" /></Link>
            </div>
        </div>
    )
}
export default Topo;