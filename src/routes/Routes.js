import { Switch, Route } from 'react-router-dom';
import BoasVindas from '../pages/BoasVindas/BoasVindas';
import Home from '../pages/Home/Home';
import AcessoDesktop from '../pages/AcessoDesktop/AcessoDesktop';

import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import RecuperarSenha from '../pages/RecuperarSenha/RecuperarSenha';
import RecuperarSenhaSucesso from '../pages/RecuperarSenhaSucesso/RecuperarSenhaSucesso';

import Perfil from '../pages/Perfil/Perfil';
import Progresso from '../pages/Progresso/Progresso';
import Questoes from '../pages/Questoes/Questoes';
import Pergunta from '../pages/Pergunta/Pergunta';
import Modulos from '../pages/Modulos/Modulos';
import ModuloSelecionado from '../pages/ModuloSelecionado/ModuloSelecionado';
import AlterarSenha from '../pages/AlterarSenha/AlterarSenha';


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/acessodesktop" component={AcessoDesktop} />
            <Route exact path="/boasvindas" component={BoasVindas} />

            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/recuperarsenha" component={RecuperarSenha} />
            <Route exact path="/recuperarsenhasucesso" component={RecuperarSenhaSucesso} />

            <Route exact path="/home" component={Home} />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/progresso" component={Progresso} />
            <Route exact path="/questoes" component={Questoes} />
            <Route exact path="/pergunta" component={Pergunta} />
            <Route exact path="/modulos" component={Modulos} />
            <Route exact path="/modulos/:moduloselecionado" component={ModuloSelecionado} />
            <Route exact path="/alterarsenha" component={AlterarSenha} />
        </Switch>
    )
}