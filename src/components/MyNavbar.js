import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      collapseOnSelect
      className="my-nav py-2"
    >
      <Container fluid="md xl">
        <Navbar.Brand className="my-brand me-5 fw-bold" href="#">
          <img width={70} src="images/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse id="my-nav">
          <Nav>
            <Nav.Link className="text-light" href="#about">
              <div className="nav-menu">ABOUT</div>
            </Nav.Link>
            <Nav.Link className="text-light" href="#skills">
              <div className="nav-menu">SKILLS</div>
            </Nav.Link>
            <Nav.Link className="text-light" href="#services">
              <div className="nav-menu">SERVICES</div>
            </Nav.Link>
            <Nav.Link className="text-light" href="#projects" data-offset="20">
              <div className="nav-menu">PROJECTS</div>
            </Nav.Link>
          </Nav>

          <Nav.Link className="ms-auto my-3 my-lg-0 my-xl-0" href="#contact">
            <input
              type="button"
              className="btn btn-sm btn-outline-warning "
              value="CONTACT"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
