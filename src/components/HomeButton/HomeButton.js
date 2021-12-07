import './HomeButton.css';
export default function HomeButton({Setup}){
    return (
        <button className={Setup.type === 1 ? "home-button" : "home-button-2"}>
            <div className="button-home-icon">
                {Setup.Icon}
            </div>
            <div className="button-home-text">
                {Setup.text}
            </div>
        </button>
    )
}