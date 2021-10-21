import { useState } from 'react';
import './Questao.css';

export default function Questao({ pergunta }) {
    const [questaoSelecionada, setQuestaoSelecionada] = useState();
    const [primeiraQuestao, setPrimeiraQuestao] = useState(false);
    const [segundaQuestao, setSegundaQuestao] = useState(false);
    const [terceiraQuestao, setTerceiraQuestao] = useState(false);
    const [quartaQuestao, setQuartaQuestao] = useState(false);

    function alteraOpcaoSelecionada(opcaoSelecionada) {
        return setQuestaoSelecionada(opcaoSelecionada);
    }

    function dinamicaDeSelecaoDeOpcao(opcaoSelecionada) {
        if (opcaoSelecionada === 'a') {
            setSegundaQuestao(false);
            setTerceiraQuestao(false);
            setQuartaQuestao(false);
        } else if (opcaoSelecionada === 'b') {
            setPrimeiraQuestao(false);
            setTerceiraQuestao(false);
            setQuartaQuestao(false);
        } else if (opcaoSelecionada === 'c') {
            setPrimeiraQuestao(false);
            setSegundaQuestao(false);
            setQuartaQuestao(false);
        } else if (opcaoSelecionada === 'd') {
            setPrimeiraQuestao(false);
            setSegundaQuestao(false);
            setTerceiraQuestao(false);
        } else {
            return true;
        }
    }

    function alteraBackground(setQuestao, questao) {
        setQuestao(!questao);
    }

    function controllerQuestao(questao, setQuestao, opcaoSelecionada) {
        alteraBackground(setQuestao, questao);
        alteraOpcaoSelecionada(opcaoSelecionada);
        dinamicaDeSelecaoDeOpcao(opcaoSelecionada);
    }
    return (
        <div className="questao-container">
            <h2>{pergunta}</h2>
            <ul>
                <div className="opcao"
                    style={{
                        background: primeiraQuestao ? 'var(--main-cor-primaria)' : 'var(--main-cor-neutra)',
                        color: primeiraQuestao ? 'var(--main-cor-neutra)' : 'var(--main-cor-primaria)'
                    }}
                    onClick={() => controllerQuestao(primeiraQuestao, setPrimeiraQuestao, 'a')}>
                    <li>a) Um Aparelho automático.a) Um Aparelho automático.a) Um Aparelho automático.a) Um Aparelho automático.</li>
                </div>

                <div className="opcao"
                    style={{
                        background: segundaQuestao ? 'var(--main-cor-primaria)' : 'var(--main-cor-neutra)',
                        color: segundaQuestao ? 'var(--main-cor-neutra)' : 'var(--main-cor-primaria)'
                    }}
                    onClick={() => controllerQuestao(segundaQuestao, setSegundaQuestao, 'b')}>
                    <li>b) Uma rede mundial descentralizada</li>
                </div>

                <div className="opcao"
                    style={{
                        background: terceiraQuestao ? 'var(--main-cor-primaria)' : 'var(--main-cor-neutra)',
                        color: terceiraQuestao ? 'var(--main-cor-neutra)' : 'var(--main-cor-primaria)'
                    }}
                    onClick={() => controllerQuestao(terceiraQuestao, setTerceiraQuestao, 'c')}>
                    <li>c) Uma moeda</li>
                </div>

                <div className="opcao"
                    style={{
                        background: quartaQuestao ? 'var(--main-cor-primaria)' : 'var(--main-cor-neutra)',
                        color: quartaQuestao ? 'var(--main-cor-neutra)' : 'var(--main-cor-primaria)'
                    }}
                    onClick={() => controllerQuestao(quartaQuestao, setQuartaQuestao, 'd')}>
                    <li>d) Um aplicativo para smartphone</li>
                </div>
            </ul>
            <button className="botao-padrao-1">Responder</button>
        </div>
    )
}