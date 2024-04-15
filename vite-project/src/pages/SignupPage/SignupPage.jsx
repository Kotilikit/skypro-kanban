import * as S from "./SignUpPage.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from '../../lib/appRoutes';
import { useState } from 'react';
import { signUp } from '../../api';
import { useUser } from '../../hooks/useUser';
import { WrapperSignupSignin } from "../../styled/common/Common.styled.js";

export default function RegistrationPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [registrationData, setRegistrationData] = useState({ login: "", name: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const handleRegistration = async () => {
        await signUp(registrationData).then((data) => {
            login(data.user);
            navigate(appRoutes.MAIN);
        })
    };

    return (
        <WrapperSignupSignin>
            <S.ContainerSignUp>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>Регистрация</S.ModalTtl>
                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalInput
                                value={registrationData.name}
                                onChange={handleInputChange}
                                className="first-name"
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя"
                            ></S.ModalInput>
                            <S.ModalInput
                                value={registrationData.login}
                                onChange={handleInputChange}
                                className="login"
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            ></S.ModalInput>
                            <S.ModalInput
                                value={registrationData.password}
                                onChange={handleInputChange}
                                className="password-first"
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            ></S.ModalInput>
                            <S.AButton>
                                <Link to={appRoutes.MAIN}>
                                    <S.ModalBtnSignupEnt id="SignUpEnter" onClick={handleRegistration}>
                                        Зарегистрироваться
                                    </S.ModalBtnSignupEnt>
                                </Link>
                            </S.AButton>
                            <Link to={appRoutes.SIGNIN}>
                                <S.ModalFormGroup>
                                    <S.P>
                                        Уже есть аккаунт? <S.Span
                                        >Войдите здесь</S.Span>
                                    </S.P>
                                </S.ModalFormGroup>
                            </Link>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignUp>
        </WrapperSignupSignin>
    )
}