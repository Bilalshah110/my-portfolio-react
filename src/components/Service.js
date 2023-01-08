import React from "react";
import { Container } from "react-bootstrap";

function service({ service }) {
  return (
    <Container>
      <div className="card my-card text-center">
        <div className="card-body my-card-body">
          <div className="my-card-icons">{service.icon}</div>
          <h5 className="card-title mt-3">{service.name}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </Container>
  );
}

export default service;
