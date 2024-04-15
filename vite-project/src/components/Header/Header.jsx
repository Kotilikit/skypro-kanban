import { useState } from "react"
import * as S from "./Header.syled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

function Header() {
  const { user } = useUser();
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
          <S.HeaderNav>
            <Link to={`/create`}>
              <S.HeaderBtnMainNew
                id="btnMainNew"
              >
                Создать новую задачу
              </S.HeaderBtnMainNew>
            </Link>

            <S.HeaderUser onClick={togglePopup}>{user.name}</S.HeaderUser>
            {isOpened && (
              <S.HeaderPopUserSet>
                <S.PopUserSetName>{user.name}</S.PopUserSetName>
                <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
                <Link to={appRoutes.EXIT}>
                  <S.ExitButton>
                    Выйти
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