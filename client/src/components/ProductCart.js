import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Container, Button } from "react-bootstrap";

class ProductCart extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      price: 0.0,
    };
    this.handlePayment = this.handlePayment.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/orders`)
      .then((response) => {
        const orders = response.data;
        var total = 0;
        orders.forEach((order) => {
          total = total + order.items[0].price * order.items[0].qty;
        });
        console.log(total);
        this.setState({
          orders: orders,
          price: total.toFixed(2),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancelOrder(e) {
    e.preventDefault();
    axios.delete("/api/cancelOrder").then(() => {
      window.location.reload(false);
    });
  }

  handleRemove(e, order) {
    e.preventDefault();
    axios.delete("/api/order", { data: { urlId: order.urlId } }).then(() => {
      window.location.reload(false);
    });
  }

  handlePayment(e) {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Proceed to payment?",
        text: "You won't be able to revert this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Proceed",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        axios
          .get(`/payment/process/`)
          .then((response) => {
            if (response.data === "Successful") {
              const orders = this.state.orders;
              const totalPrice = this.state.price;
              axios
                .post("/api/orderConfirmed", { orders, totalPrice })
                .then((res) => {
                  console.log("👉 Returned data:", res.data);
                  this.props.history.push(`/order-status`);
                })
                .then(() => {
                  axios.delete("/api/cancelOrder");
                })
                .then(() => {
                  swalWithBootstrapButtons.fire(
                    "Successful!",
                    "Your payment has been successful!",
                    "success"
                  );
                });
            } else {
              swalWithBootstrapButtons.fire(
                "Uh-oh!",
                "We are not able to process your payment.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  render() {
    const orders = this.state.orders;
    const hasOrder = orders.length > 0;
    return (
      <Container>
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th style={{ width: "1%" }} className="text-center">
                Quantity
              </th>
              <th style={{ width: "8%" }} className="text-center">
                Status
              </th>
              <th style={{ width: "15%" }}></th>
            </tr>
          </thead>
          <tbody>
            {orders
              ? orders.map((order, index) => (
                  <tr key={index}>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs">
                          <img
                            src={order.items[0].imgUrl}
                            alt={order.items[0].name}
                            className="img-responsive"
                          />
                        </div>
                        <div className="col-sm-10">
                          <h4 className="margin-left-10">
                            {order.items[0].name}
                          </h4>
                          <p className="margin-left-10">
                            {order.items[0].description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">RM {order.items[0].price}</td>
                    <td data-th="Quantity">
                      <input
                        type="number"
                        className="form-control text-center"
                        defaultValue={order.items[0].qty}
                      />
                    </td>
                    <td data-th="Status" className="text-center">
                      {order.status}
                    </td>
                    <td className="actions text-center" data-th="">
                      <Button
                        type="submit"
                        onClick={(e) => this.handleRemove(e, order)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Button
                  onClick={(e) => this.cancelOrder(e)}
                  className="btn btn-warning"
                  disabled={!hasOrder}
                >
                  Cancel Order
                </Button>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total RM{this.state.price}</strong>
              </td>
              <td>
                <Button
                  onClick={(e) => this.handlePayment(e)}
                  className="btn btn-success btn-block"
                  disabled={!hasOrder}
                >
                  Confirm Order
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </Container>
    );
  }
}

export default ProductCart;
