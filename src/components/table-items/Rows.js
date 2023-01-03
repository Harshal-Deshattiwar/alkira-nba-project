import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./rows.css";
function Rows({ data, selectedTeam, selectedTeamId }) {
  const handelClick = (id) => {
    selectedTeam(id);
  };
  return (
    <Card
      id={data.id}
      className={
        data.id === Number(selectedTeamId) ? "row-card-selected" : "row-card"
      }
      onClick={(e) => handelClick(e.currentTarget.id)}
    >
      <ListGroup variant="flush" className="row-card-item">
        <ListGroup.Item className="row-card-item-first" cy-data={data.name}>
          {data.name}
        </ListGroup.Item>
        <ListGroup.Item className="row-card-item-second" cy-data={data.city}>
          {data.city}
        </ListGroup.Item>
        <ListGroup.Item className="row-card-item-third">
          {data.abbreviation}
        </ListGroup.Item>
        <ListGroup.Item className="row-card-item-fourth">
          {data.conference}
        </ListGroup.Item>
        <ListGroup.Item className="row-card-item-fifth">
          {data.division}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Rows;
