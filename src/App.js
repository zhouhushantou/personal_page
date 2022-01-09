import Navigation from "./component/Navigation";
import Personinfo from "./component/Personinfo"
import Resume from "./component/Resume"
import Projects from "./component/Projects"
import Blogs from "./component/Blogs"
import Publications from "./component/Publications"
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
            <Col >
              <Personinfo />
            </Col>
            <Col sm={9}>
              <Navigation />
              <Switch>
                <Route exact path="/">
                  <Resume />
                </Route>
                <Route exact path="/publications" >
                  <Publications />
                </Route>
                <Route exact path="/blogs">
                  <Blogs />
                </Route>
                <Route exact path="/projects/webapp">
                  <Projects projectType="webapp" />
                </Route>
                <Route exact path="/projects/datascience">
                  <Projects projectType="datascience" />
                </Route>
                <Route exact path="/projects/science">
                  <Projects projectType="science" />
                </Route>
                <Route exact path="/projects/engineer">
                  <Projects projectType="engineer" />
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
