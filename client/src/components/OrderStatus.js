import React, { Component } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";

class OrderStatus extends Component {
  constructor() {
    super();
    this.state = {
      confirmedOrder: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/confirmedOrdersList`)
      .then((response) => {
        const confirmedOrder = response.data;
        this.setState({
          confirmedOrder: confirmedOrder,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeToDelivered() {
    axios.post("/api/changeDeliveredStatus");
  }

  render() {
    const confirmedOrder = this.state.confirmedOrder;
    return (
      <Container>
        <p className="hidden">{setTimeout(this.changeToDelivered, 5000)}</p>
        <h1 className="mt-3">Your Order Status</h1>
        <Row>
          {confirmedOrder
            ? confirmedOrder.reverse().map((order, index) => (
                <div className="col-12 mt-3" key={index}>
                  <div className="card overflow-hidden">
                    <div className="card-content">
                      <div className="card-body cleartfix">
                        <div className="media align-items-stretch">
                          <div className="media-body">
                            <h4>{order.orderName}</h4>
                            <span>Tracking code: {order.urlId}</span>
                            <h5 className="mt-3">Ordered item: </h5>
                            <ul>
                              {order.items.map((item, index) => (
                                <li key={index}>
                                  {item.items[0].name} x{item.items[0].qty}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="align-self-center">
                            <h1>RM{order.totalPrice.toFixed(2)}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="align-self-center justify-content-center">
                          <div className="col-12 hh-grayBox pt45 pb20">
                            <div className="row justify-content-between">
                              <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Ordered</p>
                              </div>
                              <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Shipped</p>
                              </div>
                              {order.status === "shipped" ? (
                                <div className="order-tracking">
                                  <span className="is-complete"></span>
                                  <p>Delivered</p>
                                </div>
                              ) : (
                                <div className="order-tracking completed">
                                  <span className="is-complete"></span>
                                  <p>Delivered</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
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

export default OrderStatus;
