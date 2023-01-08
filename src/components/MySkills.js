import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiHtml5, SiCss3, SiReact, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import Skill from "./Skill";

function MySkills() {
  const allSkills = [
    {
      name: "HTML",
      description: "Hello There",
      expertise: "100",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      description: "Hello There",
      expertise: "100",
      icon: <SiCss3 />,
    },
    {
      name: "ReactJS",
      description: "Hello There",
      expertise: "80",
      icon: <SiReact />,
    },
    {
      name: "NodeJS",
      description: "Hello There",
      expertise: "60",
      icon: <IoLogoNodejs />,
    },
    {
      name: "Express",
      description: "Hello There",
      expertise: "80",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      description: "Hello There",
      expertise: "80",
      icon: <SiMongodb />,
    },
  ];
  return (
    <Container fluid="md xl" id="skills">
      <div className="section-top-padding">
        <h3 className="section-heading">SKILLS</h3>
      </div>
      <Row>
        {allSkills.map((skill, i) => {
          return (
            <Col className="mb-4" key={i} lg={4}>
              <Skill skill={skill} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MySkills;
