import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../components/Header/Header';
import { FiUpload } from "react-icons/fi";
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const { handleSave } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [name, setName] = useState(user && user.name);
    const [surname, setSurname] = useState(user && user.surname);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [isVisibleButtonUpload, setIsVisibleButtonUpload] = useState('none');
    const [opacityOverlay, setOpacityOverlay] = useState(0);
    const [avatarImg, setAvatarImg] = useState(null);

    useEffect(() => {
        async function getDataUser() {
            const currentUser = await localStorage.getItem('CurrentUser');
            setUser(JSON.parse(currentUser));
        }

        getDataUser();
    }, []);

    useEffect(() => {
        async function getNameAndSurname() {
            if (user) {
                setName(user.name);
                setSurname(user.surname);
                setAvatarUrl(user.avatarUrl);
            }
        }

        getNameAndSurname();
    }, [user])

    function onMouseEnterOverlay() {
        setIsVisibleButtonUpload('block');
        setOpacityOverlay(0.5);
    }

    function onMouseOutOverlay() {
        setIsVisibleButtonUpload('none');
        setOpacityOverlay(0);
    }

    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setAvatarImg(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
            } else {
                alert('Just image jpeg or png');
                setAvatarImg(null);
                return null;
            }
        }
    }

    return (
        <div className="profile-container">
            <Header />
            <div className="profile-content">
                {user && 
                    <form className="profile-form" onSubmit={(e) => handleSave(name, surname, avatarImg, user, e)}>
                        <label className="label-avatar " onMouseEnter={() => onMouseEnterOverlay()}>
                            <img src={avatarUrl == null ? '/img/avatar.png' : avatarUrl} alt="Foto avatar" />
                            <div className="overlay-profile" style={{ opacity: opacityOverlay }}
                                onMouseEnter={() => onMouseEnterOverlay()}
                                onMouseOut={() => onMouseOutOverlay()}
                            ></div>
                            <span style={{ display: isVisibleButtonUpload }}
                                onMouseEnter={() => onMouseEnterOverlay()}
                            ><FiUpload color="#fff" size={35} /></span>
                            <input type="file" accept="image/*" onChange={handleFile} />
                        </label>

                        <div className="profile-form-item">
                            <label>Nome</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="profile-form-item">
                            <label>Sobrenome</label>
                            <input value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </div>

                        <div className="profile-form-item">
                            <label>E-mail</label>
                            <input value={user.email} disabled />
                        </div>

                        <button className="pattern-button-1" type="submit">Salvar perfil</button>
                    </form>
                }

                <Link to="/alterarsenha" >Deseja alterar a sua senha? Toque aqui.</Link>
            </div>
        </div>
    )
}
export default Profile;

