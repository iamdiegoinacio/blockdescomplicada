import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

/*
    RouteWraper recebe um componente, uma variávei isPrivate indicando se é uma rota privada ou não, e o ...rest que são os restantes
    atributos do componente Route 
*/
export default function RouteWrapper({component : Component, isPrivate, ...rest}){
    const { currentUser, signed} = useContext(AuthContext);

    console.log("CURRENT USER => ",currentUser);

    if(!signed && isPrivate){
        return <Redirect to="/login" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/home" />
    }

    return(
        <Route {...rest} render={props => (<Component {...props}/>)} />
    )
}