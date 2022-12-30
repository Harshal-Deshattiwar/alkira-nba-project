import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./rows.css";
function Rows({ data }) {
  return (
    <Card className="row-card">
      <ListGroup variant="flush" className="row-card-item">
        <ListGroup.Item className="row-card-item-first">
          {data.name}
        </ListGroup.Item>
        <ListGroup.Item className="row-card-item-second">
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