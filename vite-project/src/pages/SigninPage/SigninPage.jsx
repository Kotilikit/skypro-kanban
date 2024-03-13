import * as S from "./SigninPage.styled.js";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from '../../lib/appRoutes';
import { signIN } from '../../api';
import { useUser } from '../../hooks/useUser';
import { WrapperSignupSignin } from "../../styled/common/Common.styled.js";

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
        <WrapperSignupSignin>
            <S.ContainerSignIn>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>Вход</S.ModalTtl>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalInput
                                value={loginData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            ></S.ModalInput>
                            <S.ModalInput
                                value={loginData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            ></S.ModalInput>

                            <S.ModalBtnEnter
                                id="btnEnter"
                                onClick={handleLogin}>
                                Войти
                            </S.ModalBtnEnter>
                            <S.ModalFormGroup>
                                Нужно зарегистрироваться?
                                <Link to={appRoutes.SIGNUP}><S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA></Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignIn>
        </WrapperSignupSignin>
    )
}