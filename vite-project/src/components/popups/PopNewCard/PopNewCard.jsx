import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopNewCard.styled";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { postTodo } from "../../../api";
import { appRoutes } from "../../../lib/appRoutes";
import { useTask } from "../../../hooks/useTask";

export default function PopNewCard() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { setCards } = useTask();
  const [selectedDate, setSelectedDate] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    postTodo({ token: user.token, taskData })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  return (
    <S.PopNewCardDiv>
      <S.PopNewCardConteinerDiv>
        <S.PopNewCardBlockDiv>
          <S.PopNewCardContentDiv>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={`/`}>
              <S.PopNewCardCloseDiv>✖</S.PopNewCardCloseDiv>
            </Link>
            <S.PopNewCardWrapDiv>
              <S.PopNewCardForm>
                <S.FormNewBlockDiv>
                  <S.SubTtlLabel>Название задачи</S.SubTtlLabel>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.FormNewBlockDiv>
                <S.FormNewBlockDiv>
                  <S.SubTtlLabel>Описание задачи</S.SubTtlLabel>
                  <S.FormNewArea
                    name="description"
                    id="textArea"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormNewBlockDiv>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrapDiv>
            <S.ChecBoxDiv>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemesDiv>
                <S.RadioToolbarDiv>
                  <S.CategoriesThemeOrangeInput
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemeOrangeLabel htmlFor="radio1">
                    Web Design
                  </S.CategoriesThemeOrangeLabel>

                  <S.CategoriesThemeGreenInput
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemeGreenLabel htmlFor="radio2">
                    Research
                  </S.CategoriesThemeGreenLabel>

                  <S.CategoriesThemePurpleInput
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemePurpleLabel htmlFor="radio3">
                    Copywriting
                  </S.CategoriesThemePurpleLabel>
                </S.RadioToolbarDiv>
              </S.CategoriesThemesDiv>
            </S.ChecBoxDiv>
            <S.FormNewCreateBtn onClick={handleFormSubmit}>
              Создать задачу
            </S.FormNewCreateBtn>
          </S.PopNewCardContentDiv>
        </S.PopNewCardBlockDiv>
      </S.PopNewCardConteinerDiv>
    </S.PopNewCardDiv>
  );
}