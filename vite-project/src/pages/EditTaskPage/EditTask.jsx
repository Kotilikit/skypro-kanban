import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import * as S from "./EditTask.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { putTodo } from "../../api";

export default function EditTask({ user }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSaveTask = async (taskId) => {
    try {
      await putTodo({
        task: {},
        _id: taskId,
        token: user.token,
      });

    } catch (error) {
      console.error("Ошибка при сохранении задачи:", error);
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
                <S.StatusThemeHide>
                  <S.StatusThemeP>Без статуса</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
                <S.StatusThemeHide>
                  <S.StatusThemeP>В работе</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Тестирование</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Готово</S.StatusThemeP>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>

            <S.PopBrowseBtnEditHide>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <S.BtnBrowseCloseBtnBg>
                  <Link to={appRoutes.MAIN}>
                    <S.ABg onClick={handleSaveTask}>Сохранить</S.ABg>
                  </Link>
                  </S.BtnBrowseCloseBtnBg>

                  <S.BtnBrowseEditBtnBor>
                    <Link to={appRoutes.WATCHTASK}>
                      <S.A>Отменить</S.A>
                    </Link>
                  </S.BtnBrowseEditBtnBor>
                </S.BtnBrowse>

                <S.BtnBrowseCloseBtnBg>
                  <Link to={appRoutes.MAIN}>
                    <S.ABg>Закрыть</S.ABg>
                  </Link>
                </S.BtnBrowseCloseBtnBg>
              </S.BtnGroup>


            </S.PopBrowseBtnEditHide>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}