import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import './Topo.css'
const Topo = () => {
    return (
        <div className="topo-container">
            <MenuHamburguer />
            <div className="foto-de-perfil">
                <img src="/img/perfil.jpg" alt="Foto de perfil" />
            </div>
        </div>
    )
}
export default Topo;