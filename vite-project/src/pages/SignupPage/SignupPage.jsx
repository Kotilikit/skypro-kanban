import './SignupPage.css'
import { Link } from "react-router-dom";
import { appRoutes } from '../../lib/appRoutes';
import { useState } from 'react';
import { signUp } from '../../api';
import { ModalBtnSignUp } from './SignUpPage.styled';

export default function RegistrationPage() {
    const [registrationData, setRegistrationData] = useState({ login: "", name: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const handleRegistration = async () => {
        try {
            const userData = await signUp(registrationData);
            console.log("Пользователь успешно зарегистрирован:", userData);
        } catch (error) {
            console.error("Ошибка при регистрации:", error.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="container-signup">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Регистрация</h2>
                        </div>
                        <form className="modal__form-login" id="formLogUp" action="#">
                            <input
                                value={registrationData.name}
                                onChange={handleInputChange}
                                className="modal__input first-name"
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <input
                                value={registrationData.login}
                                onChange={handleInputChange}
                                className="modal__input login"
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <input
                                value={registrationData.password}
                                onChange={handleInputChange}
                                className="modal__input password-first"
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            <ModalBtnSignUp onClick={handleRegistration}>Зарегистрироваться</ModalBtnSignUp>
                            <div className="modal__form-group">
                                <p>
                                    Уже есть аккаунт? <Link to={appRoutes.SIGNIN}>Войти</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}