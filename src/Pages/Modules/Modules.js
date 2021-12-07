import './Modules.css';
import Header from '../../components/Header/Header';
import ModuleButton from '../../components/ModuleButton/ModuleButton';
import { Link } from 'react-router-dom';

const Modules = () => {
    return (
        <div className="modules-container">
            <Header />
            <div className="modules-content">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página home" />
                <h1>Módulos</h1>
                <Link to="/modulos/modulo1"><ModuleButton setup={{text: "Módulo 1", type: 1}} /></Link>
                <Link to="/modulos/modulo2"><ModuleButton setup={{text: "Módulo 2", type: 2}} /></Link>
                <Link to="/modulos/modulo3"><ModuleButton setup={{text: "Módulo 3", type: 3}} /></Link>
                <Link to="/modulos/modulo4"><ModuleButton setup={{text: "Módulo 4", type: 4}} /></Link>
            </div>
        </div>
    )
}
export default Modules;

