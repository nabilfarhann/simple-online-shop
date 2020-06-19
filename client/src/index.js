import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";

import { Navbar } from "./layout/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductCart from "./components/ProductCart";
import OrderStatus from "./components/OrderStatus";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Online Order App",
    };
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/productInfo/:id" component={ProductDetail} />
          <Route exact path="/my-order/" component={ProductCart} />
          <Route exact path="/order-status/" component={OrderStatus} />
        </Fragment>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
