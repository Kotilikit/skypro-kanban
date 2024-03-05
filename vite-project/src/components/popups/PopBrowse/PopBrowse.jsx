import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import * as S from "./PopBrowse.styled";
import { postTodo } from "../../../api";
import { useTask } from "../../../hooks/useUser";

function PopBrowse() {
  const { putDownTask } = useTask();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handleFormSubmit = () => {
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log(taskData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };
  const handleTask = async () => {
    await postTodo(newTask).then((data) => {
      console.log(data);
      putDownTask(data.task);
      navigate(appRoutes.MAIN);
    });
  };
  const createTaskBtn = () => {
    handleFormSubmit();
    handleTask();
  };
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={appRoutes.MAIN}>
              {" "}
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
          </S.PopNewCardContent>

          <S.PopNewCardWrap>

            <S.PopNewCardForm
              className="form-new"
              id="formNewCard"
              action="#"
            >
              <S.FormNewBlock>
                <S.Sbttl htmlFor="formTitle">Название задачи</S.Sbttl>
                <S.FormNewInput
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </S.FormNewBlock>
              <S.FormNewBlock>
                <S.Sbttl htmlFor="textArea">Описание задачи</S.Sbttl>
                <S.FormNewArea
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></S.FormNewArea>
              </S.FormNewBlock>
            </S.PopNewCardForm>

            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </S.PopNewCardWrap>

          <S.CategoriesThemes>
            <S.CategoriesP>Категория</S.CategoriesP>
          </S.CategoriesThemes>
          <S.CategoriesThemes>

            <input
              type="radio"
              id="radio1"
              name="topic"
              value="Web Design"
              onChange={handleInputChange}
            />
            <S.WebDesignLabel htmlFor="radio1">Web Design</S.WebDesignLabel>

            <input
              type="radio"
              id="radio2"
              name="topic"
              value="Research"
              onChange={handleInputChange}
            />
            <S.ResearchLabel htmlFor="radio2">Research</S.ResearchLabel>

            <input
              type="radio"
              id="radio3"
              name="topic"
              value="Copywriting"
              onChange={handleInputChange}
            />
            <S.CopywritingLabel htmlFor="radio3">Copywriting</S.CopywritingLabel>

          </S.CategoriesThemes>
          <S.ButtonDiv>
            <S.FormNewCreateButton onClick={createTaskBtn} id="btnCreate">
              Создать задачу
            </S.FormNewCreateButton>
          </S.ButtonDiv>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopBrowse