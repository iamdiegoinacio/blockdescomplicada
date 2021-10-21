import './BotaoModuloEscolhido.css'
export default function BotaoModuloEscolhido({ titulo }) {
    return (
        <div className="conteudo-item">
            <h2>{titulo}</h2>
            <button><img src="/img/pdf.png" alt="Link do PDF"/>Toque aqui e baixe o conteúdo</button>
        </div>
    )
}