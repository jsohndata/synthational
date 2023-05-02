import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/things-i-collect";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" fluid className="p-5 bg-dark">
        <Row>
          <Col>
          <p className="text-center text-secondary">
            <a href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button-effect text-white">
            <Github size="40" color="grey" />
            <br /><small>Code in GitHub</small>
            </a><br />
            <small>&copy; {currentYear}</small></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
