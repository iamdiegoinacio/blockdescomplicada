import './ModuleSelected.css';
import Header from '../../components/Header/Header';
import ModuleSelectedButton from '../../components/ModuleSelectedButton/ModuleSelectedButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ModuleSelected = () => {
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
                    firstContentUrl: '/data/oqueedescentralizacao.pdf',
                    secondContentUrl: '/data/oqueeblockchain.pdf',
                    thirdContentUrl: '/data/centralizacaovsdescentralizacao.pdf',
                    codModule: 1
                })

            } else if (moduloselecionado === 'modulo2') {
                setSelectModule({
                    title: 'Módulo 2',
                    firstContentTitle: 'O futuro utilizando Blockchain.',
                    secondContentTitle: 'Um sistema financeiro mais seguro.',
                    thirdContentTitle: 'A presença da blockchain na sociedade.',
                    firstContentUrl: '/data/ofuturoutilizandoblockchain.pdf',
                    secondContentUrl: '/data/umsistemafinanceiromaisseguro.pdf',
                    thirdContentUrl: '/data/apresencadablockchainnasociedade.pdf',
                    codModule: 2
                })
            }
            else if (moduloselecionado === 'modulo3') {
                setSelectModule({
                    title: 'Módulo 3',
                    firstContentTitle: 'Como as criptomoedas funcionam.',
                    secondContentTitle: 'Como funcionam as transações.',
                    thirdContentTitle: 'Criando a primeira carteira descentralizada.',
                    firstContentUrl: '/data/comoascriptomoedasfuncionam.pdf',
                    secondContentUrl: '/data/comofuncionamastransacoes.pdf',
                    thirdContentUrl: '/data/criandoaprimeiracarteiradescentralizada.pdf',
                    codModule: 3
                })
            }
            else if (moduloselecionado === 'modulo4') {
                setSelectModule({
                    title: 'Módulo 4',
                    firstContentTitle: 'Uma corretora descentralizada.',
                    secondContentTitle: 'Jogos descentralizados.',
                    thirdContentTitle: 'O que esperar do futuro?',
                    firstContentUrl: '/data/corretoradescentralizada.pdf',
                    secondContentUrl: '/data/jogosdescentralizados.pdf',
                    thirdContentUrl: '/data/oqueesperardofuturo.pdf',
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
        <div className="module-selected-container">
            <Header />
            <div className="module-selected-content">
                <img src="/img/tela-inicial.jpg" alt="Imagem da página Perfil" />
                <h1>{selectModule.title}</h1>

                <div className="download-content">
                    <a href={selectModule.firstContentUrl} download={`${selectModule.firstContentTitle}.pdf`}><ModuleSelectedButton title={selectModule.firstContentTitle} /> </a>
                    <a href={selectModule.secondContentUrl} download={`${selectModule.secondContentTitle}.pdf`}><ModuleSelectedButton title={selectModule.secondContentTitle} /> </a>
                    <a href={selectModule.thirdContentUrl} download={`${selectModule.thirdContentTitle}.pdf`}><ModuleSelectedButton title={selectModule.thirdContentTitle} /> </a>
                </div>
                <span>Leu todo o conteúdo?</span>
                <span>Toque no botão a baixo para concluir o módulo.</span>

                <button
                    className="pattern-button-1"
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
export default ModuleSelected;