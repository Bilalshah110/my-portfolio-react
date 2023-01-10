import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyAbout() {
  return (
    <Container fluid="md xl" id="about">
      <div className="section-top-padding">
        <h3 className="section-heading">ABOUT</h3>
      </div>
      <Container>
        <Row className="about">
          <Col lg={4}>
            <img className="about-img" src="images/myself.jpg" alt="mypic" />
          </Col>
          <Col lg={8} className="my-4">
            <h6 className="about-text">
              Hello there! I am Bilal, a web designer and a Full Stack web
              developer. The technologies I use is the MERN Stack &#40; MongoDB,
              Express, ReactJS, NodeJS &#41;. I create responsive websites that
              are displayed on all types of devices i.e Desktop, Smartphones. I
              create RESTFul APIs too and test APIs.
            </h6>
            <a className="about-btn" href="#contact">
              HIRE ME
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyAbout;
