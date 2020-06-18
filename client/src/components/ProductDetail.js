import React, { Component } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

class ProductDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      product: [],
      id: props.match.params.id,
    };
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

  render() {
    const product = this.state.product;
    return (
      <div>
        <Container>
          <br />
          <div className="card mb-3">
            <div className="row no-gutters">
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
                    <small className="text-muted">{product.price}</small>
                  </p>
                  <Button className="align-self-end mt-auto btn btn-lg btn-block btn-primary">
                    Test
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
