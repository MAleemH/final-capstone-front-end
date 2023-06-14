import React from 'react';
import '../css/Navigation.css';
import {
  Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form,
} from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import facebookImg from '../img/facebook.png';
// import twitterImg from '../img/twitter.png';
// import linkedinImg from '../img/linkedin.png';
// import instagramImg from '../img/instagram.png';
// import snapchatImg from '../img/snapchat.png';
// import logoImg from '../img/logo.png';
// import menuImg from '../img/menu.png';
// import cancelImg from '../img/cancel.png';

function Navigatio() {
  // const [isToggled, setIsToggled] = useState(true);
  // const [mobileView, setMobileView] = useState(false);

  return (
    <main>
      <>
        <Container>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </>
    </main>
  );
}

export default Navigatio;
