import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import * as S from "./WatchTask.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { deleteTodo } from "../../api";

export default function WatchTask({ user }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTodo({
        task: null,
        _id: taskId,
        token: user.token,
      });

    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
              <S.CategoriesThemeTopOrangeActiveCategory>
                <S.WebDesign>Web Design</S.WebDesign>
              </S.CategoriesThemeTopOrangeActiveCategory>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSbttl>Статус</S.StatusPSbttl>
              <S.StatusThemes>
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>

            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowse>
                <S.BtnBrowseEditBtnBor>
                  <Link to={appRoutes.EDITTASK}>
                    <S.A>Редактировать задачу</S.A>
                  </Link>
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseDeleteBtnBor>
                  <Link to={appRoutes.MAIN}>
                    <S.A onClick={handleDeleteTask}>Удалить задачу</S.A>
                  </Link>
                </S.BtnBrowseDeleteBtnBor>
                </S.BtnBrowse>
                <S.BtnBrowseCloseBtnBg>
                <Link to={appRoutes.MAIN}>
                  <S.ABg>Закрыть</S.ABg>
                </Link>
              </S.BtnBrowseCloseBtnBg>
              </S.BtnGroup>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}