import Card from "../Card/Card"

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card topic={"Web design"} title={"Новая задача"} />
        <Card topic={"Research"} title={""} />
        <Card topic={"Web design"} title={""} />
        <Card topic={"Research"} title={""} />
        <Card topic={"Web design"} title={""} />
      </div>
    </div>
  )
}

export default Column

