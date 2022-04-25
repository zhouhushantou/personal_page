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
                    {/* <LinkContainer to="/publications">
                        <Nav.Link className="navInactive">Publications</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/patents">
                        <Nav.Link className="navInactive">Patents</Nav.Link>
                    </LinkContainer> */}
                    <LinkContainer to="/projects">
                        <Nav.Link className="navInactive">Projects</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Research" id="nav-dropdown" >
                        <LinkContainer to="/research/projects">
                            <NavDropdown.Item href="/research/projects" className="navInactive">Research Projects</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/research/software">
                            <NavDropdown.Item href="/research/software" className="navInactive" >Software Development</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/research/publications">
                            <Nav.Link className="navInactive">Publications</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/research/patents">
                            <Nav.Link className="navInactive">Patents</Nav.Link>
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