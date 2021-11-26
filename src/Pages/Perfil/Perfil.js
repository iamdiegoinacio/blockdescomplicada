import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css';
import Topo from '../../components/Topo/Topo';

const Perfil = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        async function getDataUser() {
            const currentUser = localStorage.getItem('CurrentUser');

            setUser(JSON.parse(currentUser));
        }

        getDataUser();
    }, [])

    return (
        <div className="container-perfil">
            <Topo />
            <div className="perfil-conteudo">
                <img src="/img/tela-perfil.jpg" alt="Imagem da página Perfil" />
                <h1>Perfil</h1>
                {user &&
                    <form>
                        <label>Nome</label>
                        <input value={user.name} />

                        <label>Sobrenome</label>
                        <input value={user.surname} />

                        <label>E-mail</label>
                        <input value={user.email} />
                    </form>
                }
                <Link to="/alterarsenha" >Deseja alterar a sua senha? Toque aqui.</Link>
            </div>
        </div>
    )
}
export default Perfil;

