import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import './Topo.css'
import { Link } from 'react-router-dom';
import { useEffect, useState} from "react";

const Topo = () => {
    const [userAvatar, setUserAvatar] = useState(null);

    useEffect(() => {
        async function getDataUser() {
            const currentUser = localStorage.getItem('CurrentUser');

            let user = JSON.parse(currentUser);
            setUserAvatar(user.avatarUrl);
        }

        getDataUser();
    }, [])

    return (
        <div className="topo-container">
            <MenuHamburguer />
            <div className="foto-de-perfil">
                <Link to="/perfil"><img src={userAvatar === null ? '/img/avatar.png' : userAvatar} alt="Foto de perfil" /></Link>
            </div>
        </div>
    )
}
export default Topo;