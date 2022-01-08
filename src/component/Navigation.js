import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" >
                <Container>
                    {/* <Nav > */}
                    <LinkContainer to="/">
                        <Nav.Link className=" navInactive" > Resume</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="/publications" className="navInactive">Publications</Nav.Link>
                    <NavDropdown title="Projects" id="nav-dropdown" >
                        <NavDropdown.Item href="/projects/webapp" className="navInactive" >Web App</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/datascience" className="navInactive" >Data Science</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/science" className="navInactive"  >Scientific Computing</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/engineer" className="navInactive">Engineering Software</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/blogs" className="navInactive">Blogs</Nav.Link>
                    {/* </Nav> */}
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation