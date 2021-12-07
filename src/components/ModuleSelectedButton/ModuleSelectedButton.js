import './ModuleSelectedButton.css'
export default function ModuleSelectedButton({ title }) {
    return (
        <div className="module-selected-item">
            <h2>{title}</h2>
            <button><img src="/img/pdf.png" alt="Link do PDF"/>Toque aqui e baixe o conteúdo</button>
        </div>
    )
}