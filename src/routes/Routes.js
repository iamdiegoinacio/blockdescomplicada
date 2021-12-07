import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';
import Welcome from '../pages/Welcome/Welcome';
import Home from '../pages/Home/Home';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import RecoveryPassword from '../pages/RecoveryPassword/RecoveryPassword';
import RecoveryPasswordSuccess from '../pages/RecoveryPasswordSuccess/RecoveryPasswordSuccess';

import Profile from '../pages/Profile/Profile';
import Progress from '../pages/Progress/Progress';
import Questoes from '../pages/Questoes/Questoes';
import Pergunta from '../pages/Pergunta/Pergunta';
import Modules from '../pages/Modules/Modules';
import ModuleSelected from '../pages/ModuleSelected/ModuleSelected';
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
            <RouteWrapper exact path="/recuperarsenhasucesso" component={RecoveryPasswordSuccess} />

            <RouteWrapper exact path="/home" component={Home} isPrivate />
            <RouteWrapper exact path="/perfil" component={Profile} isPrivate />
            <RouteWrapper exact path="/progresso" component={Progress} isPrivate />
            <RouteWrapper exact path="/questoes" component={Questoes} isPrivate />
            <RouteWrapper exact path="/pergunta" component={Pergunta} isPrivate />
            <RouteWrapper exact path="/modulos" component={Modules} isPrivate />
            <RouteWrapper exact path="/modulos/:moduloselecionado" component={ModuleSelected} isPrivate />
            <RouteWrapper exact path="/alterarsenha" component={AlterarSenha} isPrivate />
        </Switch>
    )
}