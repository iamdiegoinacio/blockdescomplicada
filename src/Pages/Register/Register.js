import { useState, useContext } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState();
    const [ password, setPassword] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    const { signUp } = useContext(AuthContext);

    //Verifica se as senhas são iguais
    function isPasswordTheSame(password, confirmPassword){
        if(password === confirmPassword){
            return true;
        }else{
            return false;
        }
    }

    function handleRegister(e){
        e.preventDefault();
        if(name === ''){
            toast.error("Nome em branco!");
        }else if(surname===''){
            toast.error('Sobrenome não pode estar em branco');
        }else if(email===''){
            toast.error('Email não pode estar em branco');
        }else{
            const temp = isPasswordTheSame(password, confirmPassword);
            if(temp){
                signUp(email, password, name, surname);
                setName('');
                setSurname('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }else{
                toast.error('As senhas não são iguais.');
            }
        }
    }

    return (
        <div className="register-container">
            {/* <img src="/img/tela-de-cadastro.jpg" alt="Imagem da tela de cadastro" /> */}
            <h1>Cadastro</h1>
            <form onSubmit={handleRegister}>
                <label>Nome</label>
                <input type="text" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Sobrenome</label>
                <input type="text" placeholder="Digite o seu sobrenome" value={surname} onChange={(e) => setSurname(e.target.value)}/>

                <label>E-mail</label>
                <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Senha</label>
                <input type="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <label>Repita a sua senha</label>
                <input type="password" placeholder="Repita a sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                <div className="register-button">
                    <button className="pattern-button-1" type="submit">cadastrar</button>
                </div>
            </form>
            <Link to="/login">Já possui uma conta? Toque aqui e faça login.</Link>
        </div>
    )
};
export default Register;

