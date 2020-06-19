import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Container, Nav, Button } from "react-bootstrap";

export const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Online Funko Pop
        </Link>
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
            <li className="nav-item">
              <NavLink activeClassName='active' className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='active' className="nav-link" to="/my-order">
                My Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='active' className="nav-link" to="/order-status">
                Order Status
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </Nav>
  );
};
