import { useState } from "react"
import { useEffect } from 'react'
import Header from '../../components/Header/Header';
import { MainContent } from '../../components/MainContent/MainContent.styled';
import Column from '../../components/Column/Column';
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTask } from "../../hooks/useTask";
import { GlobalStyle } from "../../App.styled";
import { Wrapper } from "../../styled/common/Common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const { user } = useUser();

  const { cards, setCards } = useTask();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      setCards(todos.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert(error)
    })
  }, [user, setCards]);

  return (
    <>
    <GlobalStyle />
    <Wrapper>
    <Outlet />
      <Header/>
      {isLoading ? (
        "Загрузка..."
      ) : (
            <MainContent>
              {statusList.map((status) => (
                <Column
                  title={status}
                  key={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </MainContent>
          )}
    </Wrapper>
    </>
  );
}