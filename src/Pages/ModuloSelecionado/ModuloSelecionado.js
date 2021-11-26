import './ModuloSelecionado.css';
import Topo from '../../components/Topo/Topo';
import BotaoModuloEscolhido from '../../components/BotaoModuloEscolhido/BotaoModuloEscolhido';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ModuloSelecionado = () => {
    const { moduloselecionado } = useParams();
    const [selectModule, setSelectModule] = useState({});
    const [isModuleComplete, setIsModuleComplete] = useState(false);
    const [user, setUser] = useState({})

    const { completeModule } = useContext(AuthContext);

    //COLOCAR OS LINKS DOS PDF'S A BAIXO, VÃO FICAR NA PASTA /PUBLIC/DATA ...
    useEffect(() => {
        function loadSelectModule() {
            if (moduloselecionado === 'modulo1') {
                setSelectModule({
                    title: 'Módulo 1',
                    firstContentTitle: 'O que é uma rede descentralizada?',
                    secondContentTitle: 'O que é uma Blockchain?',
                    thirdContentTitle: 'Centralização vs Descentralização.',
                    firstContentUrl: '/data/teste.pdf',
                    secondContentUrl: '/data/teste.pdf',
                    thirdContentUrl: '/data/teste.pdf',
                    codModule: 1
                })

            } else if (moduloselecionado === 'modulo2') {
                setSelectModule({
                    title: 'Módulo 2',
                    firstContentTitle: 'O futuro utilizando Blockchain.',
                    secondContentTitle: 'Um sistema financeiro mais seguro.',
                    thirdContentTitle: 'Onde a Blockchain está presente?',
                    firstContentUrl: '/data/teste.pdf',
                    secondContentUrl: '/data/teste.pdf',
                    thirdContentUrl: '/data/teste.pdf',
                    codModule: 2
                })
            }
            else if (moduloselecionado === 'modulo3') {
                setSelectModule({
                    title: 'Módulo 3',
                    firstContentTitle: 'Como as criptomoedas funcionam.',
                    secondContentTitle: 'Como funcionam as transações.',
                    thirdContentTitle: 'Criando a primeira carteira descentralizada.',
                    firstContentUrl: '/data/teste.pdf',
                    secondContentUrl: '/data/teste.pdf',
                    thirdContentUrl: '/data/teste.pdf',
                    codModule: 3
                })
            }
            else if (moduloselecionado === 'modulo4') {
                setSelectModule({
                    title: 'Módulo 4',
                    firstContentTitle: 'Uma corretora descentralizada.',
                    secondContentTitle: 'Jogos descentralizados.',
                    thirdContentTitle: 'O que esperar do futuro?',
                    firstContentUrl: '/data/teste.pdf',
                    secondContentUrl: '/data/teste.pdf',
                    thirdContentUrl: '/data/teste.pdf',
                    codModule: 4
                })
            } else {
                setSelectModule(null);
            }
        }
        loadSelectModule();
    }, [])

    useEffect(() => {
        function isButtonDisabled() {
            const currentUser = localStorage.getItem('CurrentUser');
            setUser(JSON.parse(currentUser));

            if (selectModule.codModule === 1) {
                if (user.firstModule) {
                    setIsModuleComplete(true);
                }
            } else if (selectModule.codModule === 2) {
                if (user.secondModule) {
                    setIsModuleComplete(true);
                }
            } else if (selectModule.codModule === 3) {
                if (user.thirdModule) {
                    setIsModuleComplete(true);
                }
            } else if (selectModule.codModule === 4) {
                if (user.fourthModule) {
                    setIsModuleComplete(true);
                }
            } else {
                return false;
            }
        }
        isButtonDisabled();
    }, [selectModule]);

    return (
        <div className="modulo-selecionado-container">
            <Topo />
            <div className="modulo-selecionado-conteudo">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Perfil" />
                <h1>{selectModule.title}</h1>

                <div className="conteudo-download">
                    <a href={selectModule.firstContentUrl} download={`${selectModule.firstContentTitle}.pdf`}><BotaoModuloEscolhido titulo={selectModule.firstContentTitle} /> </a>
                    <a href={selectModule.secondContentUrl} download={`${selectModule.secondContentTitle}.pdf`}><BotaoModuloEscolhido titulo={selectModule.secondContentTitle} /> </a>
                    <a href={selectModule.thirdContentUrl} download={`${selectModule.thirdContentTitle}.pdf`}><BotaoModuloEscolhido titulo={selectModule.thirdContentTitle} /> </a>
                </div>
                <span>Leu todo o conteúdo?</span>
                <span>Toque no botão a baixo para concluir o módulo.</span>

                <button
                    className="botao-padrao-1"
                    onClick={() => completeModule(selectModule.codModule)}
                    disabled={isModuleComplete}
                    style={{
                        opacity: (isModuleComplete && '0.5'),
                        cursor: (isModuleComplete && 'not-allowed')
                    }}>
                    Concluir
                </button>

            </div>
        </div>
    )
};
export default ModuloSelecionado;