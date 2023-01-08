import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

function Skill({ skill }) {
  return (
    <Container>
      <div className="card my-card text-center">
        <div className="card-body my-card-body">
          <div className="my-card-icons">{skill.icon}</div>
          <h5 className="card-title mt-4">{skill.name}</h5>
          <ProgressBar
            variant="light"
            className="my-expertise mt-3"
            now={skill.expertise}
          />
        </div>
      </div>
    </Container>
  );
}

export default Skill;
