import './App.css'
import PopExit from './components/popups/PopExit/PopExit'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Column from './components/Column/Column'
import { cardList } from './data'
import { useState } from "react"
import { useEffect } from 'react'

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
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
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? "Загрузка..." : (<MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
          {/* <Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тестирование"} />
        <Column title={"Готово"} /> */}
        </MainContent>)}
      </div>
    </>
  )
}

export default App
