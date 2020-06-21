import React, { Component } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

class ProductDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      product: [],
      id: props.match.params.id,
      quantity: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/products/${this.state.id}`)
      .then((response) => {
        const product = response.data;
        this.setState({
          product: product,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      quantity: value,
    });
  }

  handleClick(e) {
    const product = this.state.product;
    const quantity = this.state.quantity;
    axios.post("/api/order", { product, quantity }).then((res) => {
      console.log("👉 Returned data:", res.data);
      this.props.history.push(`/my-order`);
    });
  }

  render() {
    const product = this.state.product;
    return (
      <div>
        <Container>
          <br />
          <div className="card mb-3">
            <div className="row no-gutters justify-content-center">
              <div className="col-4">
                <img
                  src={product.imgUrl}
                  className="card-img"
                  alt={product.name}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <span className="badge badge-dark">RM {product.price}</span>
                </p>
                <div className="form-group row">
                  <label
                    htmlFor="example-number-input"
                    className="col-sm-2 col-form-label"
                  >
                    Quantity
                  </label>
                  <div className="col-sm">
                    <input
                      className="form-control"
                      type="number"
                      defaultValue="1"
                      onChange={this.handleChange.bind(this)}
                      id="example-number-input"
                    />
                  </div>
                </div>
                <Button onClick={this.handleClick} className="align-self-end mt-auto btn btn-lg btn-block btn-dark">
                  Order
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProductDetail;
