import './UpdatePassword.css';
import Header from '../../components/Header/Header';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();

    const { updatePassword } = useContext(AuthContext);

    function handleUpdatePassword(e) {
        e.preventDefault();

        if (oldPassword === '') {
            toast.error("Atual senha está em branco");
        } else if (newPassword === '') {
            toast.error("Nova senha está em branco");
        } else if (confirmNewPassword === '') {
            toast.error("Confirmação de senha está em branco");
        } else {
            const confirmPassword = isThePasswordTheSame(newPassword, confirmNewPassword);

            if (confirmPassword) {
                const response = updatePassword(confirmNewPassword, oldPassword);

                console.log(response);

                setOldPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                toast.success('Senha alterada com sucesso');


            } else {
                toast.error("Nova senha, e a confirmação de senha estão divergentes.");
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
        <div className="update-password-container">
            <Header />
            <div className="update-password-content">
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

                    <div className="update-button">
                        <button className="pattern-button-1" type="submit">Alterar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default UpdatePassword;