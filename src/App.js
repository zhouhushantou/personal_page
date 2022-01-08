import Navigation from "./component/Navigation";
import Personinfo from "./component/Personinfo"
import Resume from "./component/Resume"
import { Container, Col, Row } from "react-bootstrap"

function App() {
  return (
    <Container>
      <Row>
        <Col >
          <Personinfo />
        </Col>
        <Col sm={9}>
          <Navigation />
          <Resume />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
