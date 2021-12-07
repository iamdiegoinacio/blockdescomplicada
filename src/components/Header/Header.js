import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import './Header.css'
import { Link } from 'react-router-dom';
import { useEffect, useState} from "react";

const Header = () => {
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
        <div className="header-container">
            <MenuHamburguer />
            <div className="profile-photo">
                <Link to="/perfil">
                    <img src={userAvatar === null ? '/img/avatar.png' : userAvatar} alt="Foto de perfil" />
                </Link>
            </div>
        </div>
    )
}
export default Header;