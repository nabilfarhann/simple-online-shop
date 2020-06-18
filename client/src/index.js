import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";

import { Container } from "react-bootstrap";

import { Navbar } from "./layout/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/productInfo/:id" component={ProductDetail} />
          <Container>
            <Switch>
              {/* <Route exact path="/cart" component={Register} />
              <Route exact path="/login" component={Login} /> */}
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
