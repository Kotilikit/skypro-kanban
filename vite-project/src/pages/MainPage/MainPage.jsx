import { useState } from "react"
import { useEffect } from 'react'
import Header from '../../components/Header/Header';
import { MainContent } from '../../components/MainContent/MainContent.styled';
import Column from '../../components/Column/Column';
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage({ user }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      console.log(todos);
      setCards(todos.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert(error)
    })
  }, [user])

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Copywriting",
      title: "Название задачи",
      date: "30.10.23",
      status: "Готово",
    }
    setCards([...cards, newCard])
  }
  return (
    <>
      <div className="wrapper">
        <Outlet />
        <Header addCard={addCard} />
        {isLoading ? "Загрузка..." : (<MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
        </MainContent>)}
      </div>
    </>
  )
}