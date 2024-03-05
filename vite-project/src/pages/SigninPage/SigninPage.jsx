import { useState } from 'react'
import './SigninPage.css'
import { ModalBtnEnter } from './SigninPage.styled'
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from '../../lib/appRoutes';
import { signIN } from '../../api';
import { useUser } from '../../hooks/useUser';

export default function SigninPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ login: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        await signIN(loginData).then((data) => {
            login(data.user);
            navigate(appRoutes.MAIN);
        })
    };

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input
                                value={loginData.login}
                                onChange={handleInputChange}
                                className="modal__input"
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <input
                                value={loginData.password}
                                onChange={handleInputChange}
                                className="modal__input"
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <ModalBtnEnter onClick={handleLogin}>Войти</ModalBtnEnter>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={appRoutes.SIGNUP}>Зарегистироваться здесь</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}