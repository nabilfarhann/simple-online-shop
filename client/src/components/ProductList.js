import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container, Row, Button } from "react-bootstrap";

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
        <h3>List of products</h3>
        <Row>
          {products
            ? products.map((product, index) => (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img
                      className="card-img product-img"
                      src={product.imgUrl}
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text">{product.description}</p>
                      <div className="options d-flex flex-fill">
                        <select className="custom-select mr-1">
                          <option defaultChecked>Size</option>
                          <option value="1">Small</option>
                          <option value="2">Medium</option>
                          <option value="3">Large</option>
                        </select>
                      </div>
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success">
                          <h5 className="mt-4">{product.price}</h5>
                        </div>
                        <Link to={`/productInfo/${product.urlId}`}>
                          <Button className="btn btn-dark mt-3">
                            <i className="fas fa-shopping-cart"></i> Create
                            Order
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
