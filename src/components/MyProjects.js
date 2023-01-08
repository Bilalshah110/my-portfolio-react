import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Project from "./Project";

function MyProjects() {
  const allProjects = [
    {
      name: "StudentsREG App",
      description:
        "A FULL STACK responsive web application, stores unique users data, performs all CRUD operations",
      image: "images/studentReg.jpg",
      tools: "ReactJS, NodeJS, ExpressJS, MongoDB, Bootstrap",
      projectUrl: "https://studentsreg.netlify.app/",
      srcUrl: "https://github.com/Bilalshah110/STUDENTSReg-frontend",
    },
    {
      name: "TaskLIST App",
      description:
        "A single page responsive web application, basically a to-do list performing all CRUD operations",
      image: "images/taskList.jpg",
      tools: "ReactJS, Bootstrap",
      projectUrl: "https://mytaskslistapp.netlify.app/",
      srcUrl: "https://github.com/Bilalshah110/TASKList",
    },
  ];
  return (
    <Container fluid="md xl" id="projects">
      <div className="section-top-padding">
        <h3 className="section-heading">PROJECTS</h3>
      </div>

      <Row>
        {allProjects.map((project, i) => {
          return (
            <Col key={i} lg={6}>
              <Project project={project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MyProjects;
