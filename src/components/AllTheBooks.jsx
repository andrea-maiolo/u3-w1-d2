import { Component } from "react";
import fantasy from "../assets/books/fantasy.json";
import history from "../assets/books/history.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";

import { Badge, Card, Col, Container, Form, Row } from "react-bootstrap";

console.log(fantasy);
console.log(history);
console.log(horror);
console.log(romance);
console.log(scifi);

class AllTheBooks extends Component {

    const handleSelection = function(){
        
    }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12} className="mb-5">
            <Form.Select aria-label="options for books" onChange={handleSelection}>
              <option>Seleziona il tuo genere</option>
              <option value={fantasy}>Fantasy</option>
              <option value={history}>History</option>
              <option value={horror}>Horror</option>
              <option value={romance}>Romance</option>
              <option value={scifi}>Scifi</option>
            </Form.Select>
          </Col>
          {fantasy.map((book) => (
            <Col key={book.asin} sm={12} md={2} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} alt={book.title} className="img-fluid h-75" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Subtitle>
                    Price <Badge bg="secondary">{book.price}</Badge>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
