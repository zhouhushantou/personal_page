import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" >
                <Container>
                    <LinkContainer to="/">
                        <Nav.Link className=" navInactive" > Resume</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/publications">
                        <Nav.Link className="navInactive">Publications</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Projects" id="nav-dropdown" >
                        <LinkContainer to="/projects/engineer">
                            <NavDropdown.Item href="/projects/engineer" className="navInactive">Engineering Software</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/datascience">
                            <NavDropdown.Item href="/projects/datascience" className="navInactive" >Data Science</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/science">
                            <NavDropdown.Item href="/projects/science" className="navInactive"  >Scientific Computing</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/webapp">
                            <NavDropdown.Item className="navInactive" >Web App</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/blogs">
                        <Nav.Link className="navInactive">Blogs</Nav.Link>
                    </LinkContainer>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation