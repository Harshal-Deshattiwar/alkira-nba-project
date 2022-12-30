import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./header.css";
function Header() {
  return (
    <>
      <Card className="header-card">
        <ListGroup variant="flush" className="header-card-item">
          <ListGroup.Item className="header-card-item-first">
            Team Name
          </ListGroup.Item>
          <ListGroup.Item className="header-card-item-second">
            City
          </ListGroup.Item>
          <ListGroup.Item className="header-card-item-third">
            Abbreviation
          </ListGroup.Item>
          <ListGroup.Item className="header-card-item-fourth">
            Conference
          </ListGroup.Item>
          <ListGroup.Item className="header-card-item-fifth">
            Division
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

// function Header() {
//   return (
//     <Card>
//       <Card.Body>This is some text within a card body.</Card.Body>
//     </Card>
//   );
// }

export default Header;
