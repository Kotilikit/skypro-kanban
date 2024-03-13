import { useState } from "react"
import * as S from "./Header.syled";
import { Button, Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev)
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoShowLight>
            <Link to={"#"} target="_self">
              <S.HeaderLogoImg src="images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogoShowLight>
          <S.HeaderLogoDark>
            <Link to={"#"} target="_self">
              <S.HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <Link to={appRoutes.TASK}>
              <S.HeaderBtnMainNew
                id="btnMainNew"
              >
                Создать новую задачу
              </S.HeaderBtnMainNew>
            </Link>

            <S.HeaderUser onClick={togglePopup}>Ivan Ivanov</S.HeaderUser>
            {isOpened && (
              <S.HeaderPopUserSet>
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
                  <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <Link to={appRoutes.EXIT}>
                  <S.ExitButton>
                    <Button>Выйти</Button>
                  </S.ExitButton>
                </Link>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  )
}

export default Header