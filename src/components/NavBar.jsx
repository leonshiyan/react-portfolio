import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = (props) => {
return (
    <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href='/'> 
                    <img
                    alt=""
                    src="./code-48.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Yan Shi
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                    <Nav.Link href="/#contact">Contact</Nav.Link>
                    <Nav.Link href="/#">
                        <a href={process.env.PUBLIC_URL + 'YAN SHI - Resume .pdf'} download>
                            Resume
                        </a>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)
}
export default NavBar