import { useEffect, useState } from 'react';
import './BotaoModulos.css';
export default function BotaoModulos({modulo, tipo}){
   
    const [tipoSelecionado, setTipoSelecionado] = useState(null);

    useEffect(() => {
        if(tipo===1){
            setTipoSelecionado('var(--main-cor-primaria');
        }else if(tipo===2){
            setTipoSelecionado('var(--main-cor-secundaria');
        }else if (tipo===3){
            setTipoSelecionado('var(--main-cor-terciaria');
        }else{
            setTipoSelecionado('var(--main-cor-quaternaria');
        }
    });
    return(<button className="botao-modulos" style={{background: tipoSelecionado}} onTouchStart={() => setTipoSelecionado('var(--main-cor-neutra')}>{modulo}</button>)
}