import './SigninPage.css'
import { ModalBtnEnter } from './SigninPage.styled'

export default function SigninPage({login}) {
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
                                className="modal__input"
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <input
                                className="modal__input"
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <ModalBtnEnter onClick={login}>Войти</ModalBtnEnter>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <a href="signup.html">Регистрируйтесь здесь</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}