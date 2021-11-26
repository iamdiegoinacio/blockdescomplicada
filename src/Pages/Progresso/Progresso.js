import './Progresso.css';
import Topo from '../../components/Topo/Topo';
import { useState, useEffect} from 'react';

const Progresso = () => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        async function getDataUser(){
            const currentUser = await localStorage.getItem('CurrentUser');

            setUser(JSON.parse(currentUser));
            console.log(user);
        }

        getDataUser();
    }, [])
    
    return (
        <div className="container-progresso">
            <Topo />
            <div className="progresso-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Progresso" />
                <h1>Progresso</h1>
                <h2>você concluiu</h2>
                <div className="porcentagem-progresso">
                    <h3>{user.progress}%</h3>
                    <h4>dos módulos</h4>
                </div>
            </div>
        </div>
    )
}
export default Progresso;