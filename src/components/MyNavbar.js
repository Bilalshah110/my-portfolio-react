import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useWindowScrollPositions } from "./ScrollPosition";

const MyNavbar = () => {
  const { scrollY } = useWindowScrollPositions();

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
            <Nav.Link
              className="text-light"
              href="#home"
              active={scrollY < 553 ? true : false}
            >
              <div className="nav-menu">HOME</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#about"
              active={scrollY > 552 && scrollY < 1040 ? true : false}
            >
              <div className="nav-menu">ABOUT</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#skills"
              active={scrollY > 1039 && scrollY < 1804 ? true : false}
            >
              <div className="nav-menu">SKILLS</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#services"
              active={scrollY > 1803 && scrollY < 2276 ? true : false}
            >
              <div className="nav-menu">SERVICES</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#projects"
              active={scrollY > 2275 && scrollY < 2960 ? true : false}
            >
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
