'use strict';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        AKAM CINEMA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#About Us">About Us</Nav.Link>
                        <Nav.Link href="#Movies">Movies</Nav.Link>
                        <Nav.Link href="#My Movies">My Movies</Nav.Link>
                        <Nav.Link href="#Contact Us">Contact Us</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
}
export default NavBar;