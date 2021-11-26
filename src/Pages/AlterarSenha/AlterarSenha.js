import './AlterarSenha.css';
import Topo from '../../components/Topo/Topo';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
const AlterarSenha = () => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();

    const { updatePassword } = useContext(AuthContext);

    function handleUpdatePassword(e) {
        e.preventDefault();

        if (oldPassword === '') {
            alert("Atual senha está em branco");
        } else if (newPassword === '') {
            alert("Nova senha está em branco");
        } else if (confirmNewPassword === '') {
            alert("Confirmação de senha está em branco");
        } else {
            const confirmPassword = isThePasswordTheSame(newPassword, confirmNewPassword);

            if (confirmPassword) {
                const response = updatePassword(confirmNewPassword, oldPassword);

                console.log(response);

                setOldPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                alert('Senha alterada com sucesso');


            } else {
                alert("A nova senha, e a confirmação de senha estão divergentes.");
            }
        }
    }

    function isThePasswordTheSame(newPassword, confirmNewPassword) {
        if (newPassword === confirmNewPassword) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="container-alterar">
            <Topo />
            <div className="alterar-conteudo">
                <img src="/img/tela-de-recuperacao-de-senha.jpg" alt="Imagem da página Perfil" />
                <h1>Alterar Senha</h1>
                <form onSubmit={handleUpdatePassword}>
                    <label>Digite a sua senha atual</label>
                    <input
                        type="password"
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Digite a senha atual" />

                    <label>Digite a nova senha</label>
                    <input
                        type="password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Digite a nova senha" />

                    <label>Repita a nova senha</label>
                    <input
                        type="password"
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        placeholder="Repita a nova senha" />

                    <div className="botao-alterar">
                        <button className="botao-padrao-1" type="submit">Alterar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AlterarSenha;