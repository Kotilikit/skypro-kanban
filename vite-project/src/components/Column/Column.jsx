import Card from "../Card/Card"
import * as S from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.TitleP>{title}</S.TitleP>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => <Card topic={card.theme} title={card.theme} date={card.date} key={card.id} />)}
        {/* <Card topic={"Web design"} title={"Новая задача"} />
        <Card topic={"Research"} title={""} />
        <Card topic={"Web design"} title={""} />
        <Card topic={"Research"} title={""} />
        <Card topic={"Web design"} title={""} /> */}
      </S.Cards>
    </S.MainColumn>
  )
}

export default Column

