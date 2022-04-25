import Navigation from "./component/Navigation";
import Personinfo from "./component/Personinfo"
import Resume from "./component/Resume"
import Research from "./component/Research"
import Blogs from "./component/Blogs"
import Projects from "./component/CSProjects";
import Map from "./component/Map"
import { Container, Col, Row } from "react-bootstrap"
import {
  HashRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Xiangxian Zhou's Page</title>
      </Helmet>
      <Router basename="/personal_page">
        <Container>
          <Row>
            <Col>
              <Personinfo />
              <Map />
            </Col>
            <Col sm={9}>
              <Navigation />
              <Switch>
                <Route exact path="/">
                  <Resume />
                </Route>
                <Route exact path="/blogs">
                  <Blogs />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route exact path="/research/projects">
                  <Research projectType="projects" />
                </Route>
                <Route exact path="/research/software">
                  <Research projectType="software" />
                </Route>
                <Route exact path="/research/publications">
                  <Research projectType="publications" />
                </Route>
                <Route exact path="/research/patents">
                  <Research projectType="patents" />
                </Route>
              </Switch>

            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
