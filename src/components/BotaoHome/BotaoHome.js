import './BotaoHome.css';
export default function BotaoHome({Setup}){
    return (
        <button className={Setup.tipo === 1 ? "botao-home" : "botao-home-2"}>
            <div className="icone-botao-home">
                {Setup.Icone}
            </div>
            <div className="texto-botao-home">
                {Setup.texto}
            </div>
        </button>
    )
}