const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const OrderStatus = require("../models/OrderStatus");

// @route   GET /orders/
// @desc    Get all orders for a customer
router.get("/orders/", (req, res) => {
  //get items
  Order.find({})
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   POST /orders/create
// @desc    Create new order
router.post("/order", async (req, res) => {
  const { product, quantity } = req.body;

  const newOrder = new Order({
    status: "On-Cart",
    items: [
      {
        name: product.name,
        description: product.description,
        price: product.price,
        imgUrl: product.imgUrl,
        qty: quantity,
      },
    ],
  });

  const postOrder = await newOrder.save();
  res.json(postOrder);
});

// @route   /order
// @desc    Delete order
router.delete("/order", (req, res) => {
  Order.findOneAndRemove({ urlId: req.body.urlId }).then(() => {
    res.json("deleted");
  });
});

// @route   /order
// @desc    Cancel Order
router.delete("/cancelOrder", (req, res) => {
  Order.deleteMany({ status: "On-Cart" }).then(() => {
    res.json("deleted");
  });
});

// @route   GET /confirmedOrdersList/
// @desc    Get all confirmed orders
router.get("/confirmedOrdersList/", (req, res) => {
  OrderStatus.find({})
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   /orderConfirmed
// @desc    Add to Confirmed Order
router.post("/orderConfirmed", async (req, res) => {
  const confirmedOrder = new OrderStatus({
    status: "shipped",
    items: req.body.orders,
    totalPrice: req.body.totalPrice,
  });

  const postConfirmedOrder = await confirmedOrder.save();
  res.json(postConfirmedOrder);
});

// @route   POST /changeDeliveredStatus/
// @desc    Update from shipped to Delivered status
router.post("/changeDeliveredStatus/", async (req, res) => {
  try {
    let orderstatus = await OrderStatus.find({ status: "shipped" });
    if (orderstatus) {
      orderstatus = await OrderStatus.updateMany({ status: "delivered" });
      return res.json(orderstatus);
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
