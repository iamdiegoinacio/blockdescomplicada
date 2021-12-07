import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Welcome.css';

const Welcome = () => {
    const { refreshPage } = useContext(AuthContext);

    function setupFirstAccess(){
        localStorage.setItem('firstAccess', false);
        refreshPage();
    }

    return(
        <div className="welcome-container">
            <img src="/img/logo.png" alt="Logo Blockchain Descomplicada" />
            <h1>Seja Bem Vindo!</h1>
            <p>Você pode começar a estudar agora mesmo, toque em começar.</p>
            <button className="pattern-button-1" onClick={() => setupFirstAccess()}>começar</button>
        </div>
    )
}
export default Welcome;