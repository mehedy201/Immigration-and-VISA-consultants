import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate('/login')
    }



  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg">
        <Container>
            <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navigation_ancor">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
              <button onClick={handleLoginButton} className="login_button">Log In</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
