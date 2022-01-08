import Navigation from "./component/Navigation";
import Personinfo from "./component/Personinfo"
import Resume from "./component/Resume"
import Projects from "./component/Projects"
import Blogs from "./component/Blogs"
import Publications from "./component/Publications"
import { Container, Col, Row } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col >
            <Personinfo />
          </Col>
          <Col sm={9}>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Resume />
              </Route>
              <Route path="/publications" >
                <Publications />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/projects/webapp">
                <Projects projectType="webapp" />
              </Route>
              <Route path="/projects/datascience">
                <Projects projectType="datascience" />
              </Route>
              <Route path="/projects/science">
                <Projects projectType="science" />
              </Route>
              <Route path="/projects/engineer">
                <Projects projectType="engineer" />
              </Route>
            </Switch>

          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
