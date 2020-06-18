import React from "react";
import { Container, Nav, Button } from "react-bootstrap";

export const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <a className="navbar-brand" href="#">
          Online Funko Pop
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Current Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Order Status
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Nav>
  );
};
