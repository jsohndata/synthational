import { Container, Row, Col } from "react-bootstrap";
import Panel from "./Panel.jsx";
import data from "../../data/gallery-ai.json";

export default function List() {
  
  return (
    <section>
      <Container fluid id="gallery">
        <Row className="justify-content-center">
        {
          data.map(
            (element)=> (
              element
                ? <Panel key={element.id} data={element} />
                : <p>Loading...</p>            
          ))
        }
        </Row>
      </Container>
    </section>
  )
}