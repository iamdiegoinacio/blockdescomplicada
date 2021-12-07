import './Progress.css';
import Header from '../../components/Header/Header';
import { useState, useEffect} from 'react';

const Progress = () => {
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
        <div className="progress-container">
            <Header />
            <div className="progress-content">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Progresso" />
                <h1>Progresso</h1>
                <h2>você concluiu</h2>
                <div className="progress-percent">
                    <h3>{user.progress}%</h3>
                    <h4>dos módulos</h4>
                </div>
            </div>
        </div>
    )
}
export default Progress;