import { useEffect, useState } from 'react';
import './BotaoModulos.css';

export default function BotaoModulos({setup}) {
    const [selectType, setSelectType] = useState(null);

    useEffect(() => {
        if (setup.type === 1) {
            setSelectType('var(--main-cor-primaria');
        } else if (setup.type === 2) {
            setSelectType('var(--main-cor-secundaria');
        } else if (setup.type === 3) {
            setSelectType('var(--main-cor-terciaria');
        } else if (setup.type === 4){
            setSelectType('var(--main-cor-quaternaria');
        }else{
            return false;
        }
    }, []);
 
    return (
        <button className="botao-modulos" style={{backgroundColor: selectType}}>{setup.text}</button>
    )
}