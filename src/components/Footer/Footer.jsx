import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/synthational";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" fluid className="p-5">
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

      <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=11"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  )
}
