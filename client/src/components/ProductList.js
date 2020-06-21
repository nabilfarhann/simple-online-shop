import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container, Row, Button } from "react-bootstrap";
// import uniqid from "uniqid";
// const id = uniqid('user-');
// const user = localStorage.setItem('currentUser', id);

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // Axios GET
    axios
      .get("/api/products")
      .then((response) => {
        const products = response.data;
        this.setState({
          products: products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const products = this.state.products;
    return (
      <Container>
        <br />
        <h1 className="mt-3">Products</h1>
        <Row>
          {products
            ? products.map((product, index) => (
                <div className="col-sm" key={index}>
                  <div className="card">
                    <img
                      className="card-img product-img"
                      src={product.imgUrl}
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text">{product.description}</p>
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success">
                          <h4 className="mt-4">RM{product.price.toFixed(2)}</h4>
                        </div>
                        <Link to={`/productInfo/${product.urlId}`}>
                          <Button className="btn btn-dark mt-3">
                            Create Order
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
