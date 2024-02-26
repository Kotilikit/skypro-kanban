import Card from "../Card/Card"
import * as S from "./Column.styled";

function Column({ title, cardList }) {  
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.TitleP>{title}</S.TitleP>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((task) => <Card topic={task.topic} title={task.title} date={task.date} key={task._id} id={task._id} />)}
      </S.Cards>
    </S.MainColumn>
  )
}

export default Column

