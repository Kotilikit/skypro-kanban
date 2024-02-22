import { cardList } from "../../data";
import { useState } from "react"
import { useEffect } from 'react'
import Header from '../../components/Header/Header';
import { MainContent } from '../../components/MainContent/MainContent.styled';
import Column from '../../components/Column/Column';
import { Outlet } from "react-router-dom";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
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
        <Outlet/>
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