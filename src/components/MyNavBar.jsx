
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavBar = props => {

    return (
        <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: "#221f1f" }}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src={props.imgSrc}
                        alt="Logo"
                        width="100px"
                        height="55px"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#" className="active" >TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">Recently Added</Nav.Link>
                        <Nav.Link href="#">My List</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Link 1</Nav.Link>
                        <Nav.Link href="#">Link 2</Nav.Link>
                        <Nav.Link href="#">Link 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;