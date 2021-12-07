import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';
import Welcome from '../pages/Welcome/Welcome';
import Home from '../pages/Home/Home';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import RecoveryPassword from '../pages/RecoveryPassword/RecoveryPassword';
import RecuperarSenhaSucesso from '../pages/RecuperarSenhaSucesso/RecuperarSenhaSucesso';

import Perfil from '../pages/Perfil/Perfil';
import Progresso from '../pages/Progresso/Progresso';
import Questoes from '../pages/Questoes/Questoes';
import Pergunta from '../pages/Pergunta/Pergunta';
import Modulos from '../pages/Modulos/Modulos';
import ModuloSelecionado from '../pages/ModuloSelecionado/ModuloSelecionado';
import AlterarSenha from '../pages/AlterarSenha/AlterarSenha';

export default function Routes() {
    const isFirstAccess = localStorage.getItem('firstAccess');
    
    if(isFirstAccess===null){
        return(
            <Switch>
                <RouteWrapper exact path="/" component={Welcome} />
            </Switch>
        )
    }
    return (
        <Switch>
            <RouteWrapper exact path="/" component={Login} />
            <RouteWrapper exact path="/login" component={Login} />
            <RouteWrapper exact path="/cadastro" component={Register} />
            <RouteWrapper exact path="/recuperarsenha" component={RecoveryPassword} />
            <RouteWrapper exact path="/recuperarsenhasucesso" component={RecuperarSenhaSucesso} />

            <RouteWrapper exact path="/home" component={Home} isPrivate />
            <RouteWrapper exact path="/perfil" component={Perfil} isPrivate />
            <RouteWrapper exact path="/progresso" component={Progresso} isPrivate />
            <RouteWrapper exact path="/questoes" component={Questoes} isPrivate />
            <RouteWrapper exact path="/pergunta" component={Pergunta} isPrivate />
            <RouteWrapper exact path="/modulos" component={Modulos} isPrivate />
            <RouteWrapper exact path="/modulos/:moduloselecionado" component={ModuloSelecionado} isPrivate />
            <RouteWrapper exact path="/alterarsenha" component={AlterarSenha} isPrivate />
        </Switch>
    )
}