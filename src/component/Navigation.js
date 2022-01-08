import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" >
                <Container>
                    {/* <Nav > */}
                    <Nav.Link href="/" className="navInactive" > Resume</Nav.Link>
                    <Nav.Link href="Publications" className="navInactive">Publications</Nav.Link>
                    <NavDropdown title="Project" id="nav-dropdown" >
                        <NavDropdown.Item href="#action3" className="navInactive" >Web App</NavDropdown.Item>
                        <NavDropdown.Item href="#action3" className="navInactive" >Data Science</NavDropdown.Item>
                        <NavDropdown.Item href="#action4" className="navInactive"  >Scientific Computing</NavDropdown.Item>
                        <NavDropdown.Item href="#action4" className="navInactive">Engineering Software</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="Blogs" className="navInactive">Blogs</Nav.Link>
                    {/* </Nav> */}
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation