import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import * as S from "./PopBrowse.styled";
import { putTodo, deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTask } from "../../../hooks/useTask";
import { TopicHeader } from "../../../lib/topic";

function PopBrowse() {
  const { id } = useParams();
  const { user } = useUser();
  const { cards, setCards } = useTask();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isEdited, setIsEdited] = useState(false);

  let card = cards.filter((card) => card._id == `${id}`);

  const [editTask, setEditTask] = useState({
    title: card[0].title,
    description: card[0].description,
    topic: card[0].topic,
    status: card[0].status,
    date: card[0].date,
  });

  const deleteTask = () => {
    deleteTodo({ token: user.token, id: id })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      date: selectedDate,
    };
    putTodo({ token: user.token, id: id, taskData: taskData })
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
    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  return (
    <S.PopBrowseDiv>
      <S.PopBrowseСonteinerDiv>
        <S.PopBrowseBlockDiv>
          <S.PopBrowseContentDiv>
            <S.PopBrowseTopBlockDiv>
              <S.PopBrowseTtl>Название задачи: {card[0].title}</S.PopBrowseTtl>
              <S.CategoriesThemeDiv $themeColor={TopicHeader[card[0].topic]}>
                <S.TopicText $themeColor={TopicHeader[card[0].topic]}>
                  {card[0].topic}
                </S.TopicText>
              </S.CategoriesThemeDiv>
            </S.PopBrowseTopBlockDiv>
            <S.PopBrowseStatusDiv>
              <S.StatusPsubTtlP>Статус</S.StatusPsubTtlP>
              {isEdited && (
                <S.StatusThemesDiv>
                  <S.StatusThemeInput
                    type="radio"
                    id="radio1"
                    name="status"
                    value="Без статуса"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio1">Без статуса</S.StatusThemeLabel>

                  <S.StatusThemeInput
                    type="radio"
                    id="radio2"
                    name="status"
                    value="Нужно сделать"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio2">Нужно сделать</S.StatusThemeLabel>

                  <S.StatusThemeInput
                    type="radio"
                    id="radio3"
                    name="status"
                    value="В работе"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio3">В работе</S.StatusThemeLabel>

                  <S.StatusThemeInput
                    type="radio"
                    id="radio4"
                    name="status"
                    value="Тестирование"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio4">Тестирование</S.StatusThemeLabel>

                  <S.StatusThemeInput
                    type="radio"
                    id="radio5"
                    name="status"
                    value="Готово"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio5">Готово</S.StatusThemeLabel>
                </S.StatusThemesDiv>
              )}
              {!isEdited && (
                <S.StatusThemesDiv>
                  <S.StatusThemeActiveDiv>{card[0].status}</S.StatusThemeActiveDiv>
                </S.StatusThemesDiv>
              )}
            </S.PopBrowseStatusDiv>
            <S.PopBrowseWrapDiv>
              <S.PopBrowseForm>
                <S.FormBrowseBlockDiv>
                  <S.SubTtl htmlFor="textArea01">Описание задачи</S.SubTtl>
                  {!isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={card[0].description}
                      disabled={true}
                    />
                  )}
                  {isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={card[0].description}
                      disabled={false}
                    />
                  )}
                </S.FormBrowseBlockDiv>
              </S.PopBrowseForm>

              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrapDiv>
            {!isEdited && (
              <S.BtnBrowseDiv>
                <S.BtnGroupDiv>
                  <S.BtnEdit
                    onClick={() => {
                      setIsEdited(!isEdited);
                    }}
                  >
                    Редактировать задачу
                  </S.BtnEdit>

                  <S.BtnEdit
                    onClick={deleteTask}
                  >
                    Удалить задачу
                  </S.BtnEdit>
                </S.BtnGroupDiv>
                <Link to={appRoutes.MAIN}>
                  <S.PopBrowseBtnExit>Закрыть</S.PopBrowseBtnExit>
                </Link>
              </S.BtnBrowseDiv>
            )}
            {isEdited && (
              <S.BtnBrowseDiv>
                <S.BtnGroupDiv>
                  <S.BtnEdit
                    onClick={handleFormSubmit}
                  >
                    Сохранить
                  </S.BtnEdit>
                  <S.BtnEdit
                    onClick={() => {
                      setIsEdited(!isEdited);
                    }}
                  >
                    Отменить
                  </S.BtnEdit>

                  <S.BtnEdit
                    onClick={deleteTask}
                  >
                    Удалить задачу
                  </S.BtnEdit>
                </S.BtnGroupDiv>
                <Link to={appRoutes.MAIN}>
                  <S.PopBrowseBtnExit>Закрыть</S.PopBrowseBtnExit>
                </Link>
              </S.BtnBrowseDiv>
            )}
          </S.PopBrowseContentDiv>
        </S.PopBrowseBlockDiv>
      </S.PopBrowseСonteinerDiv>
    </S.PopBrowseDiv>
  );
}

export default PopBrowse