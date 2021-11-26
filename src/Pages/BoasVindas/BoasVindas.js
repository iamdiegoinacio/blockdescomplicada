import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './BoasVindas.css';

const BoasVindas = () => {
    const { refreshPage } = useContext(AuthContext);

    function setupFirstAccess(){
        localStorage.setItem('firstAccess', false);
        refreshPage();
    }

    return(
        <div className="container-boas-vindas">
            <img src="/img/logo.png" alt="Logo Blockchain Descomplicada" />
            <h1>Seja Bem Vindo!</h1>
            <p>Você pode começar a estudar agora mesmo, toque em começar.</p>
            <button className="botao-padrao-1" onClick={() => setupFirstAccess()}>começar</button>
        </div>
    )
}
export default BoasVindas;