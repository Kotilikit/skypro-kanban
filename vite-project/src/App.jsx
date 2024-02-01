import './App.css'
import PopExit from './components/popups/PopExit/PopExit'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Column from './components/Column/Column'

function App() {

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <MainContent>
        <Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тестирование"} />
        <Column title={"Готово"} />
        </MainContent>
      </div>
    </>
  )
}

export default App
