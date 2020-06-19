const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
var uniqid = require("uniqid");

// Create Schema
const OrderStatusSchema = new Schema({
  urlId: {
    type: String,
    default: shortid.generate,
  },
  orderName: {
    type: String,
    default: "Order #" + uniqid(),
  },
  status: {
    type: String,
  },
  items: [],
  totalPrice: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = OrderStatus = mongoose.model("orderStatus", OrderStatusSchema);
