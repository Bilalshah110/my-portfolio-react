import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbApi } from "react-icons/tb";
import Service from "./Service";

function MyServices() {
  const allServices = [
    {
      name: "Web Design",
      description: "Get some professional and modern design ready for your website",
      icon: <TiDeviceDesktop />,
    },
    {
      name: "Web Development",
      description: "Get your website ready build with new and efficient technologies",
      icon: <FaLaptopCode />,
    },
    {
      name: "RESTFul APIs",
      description: "Get RESTFul APIs created and also APIs testing",
      icon: <TbApi />,
    },
  ];
  return (
    <Container fluid="md xl" id="services">
      <div className="section-top-padding">
        <h3 className="section-heading">SERVICES</h3>
      </div>
      <Row>
        {allServices.map((service, i) => {
          return (
            <Col className="mb-4" key={i} lg={4}>
              <Service service={service} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MyServices;
