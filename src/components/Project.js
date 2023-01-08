import React from "react";
import { Container } from "react-bootstrap";

function Project({ project }) {
  return (
    <Container>
      <h5 style={{ color: "rgb(255, 210, 140)" }}>{project.name}</h5>
      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        {project.description}
      </p>
      <p style={{ fontSize: "14px" }}>
        <b style={{ color: "rgb(255, 210, 140)" }}>Tools: </b>
        {project.tools}
      </p>
      <div className="card card-dark">
        <img className="card-img" src={project.image} alt={project.name} />
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          <div className="card-img-overlay" id="card-img-overlay"></div>
        </a>
      </div>
      <p>
        <a
          href={project.srcUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-muted source-code"
        >
          Source code
        </a>
      </p>
      <hr />
    </Container>
  );
}

export default Project;
