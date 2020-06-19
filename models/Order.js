const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

// Create Schema
const OrderSchema = new Schema({
  urlId: {
    type: String,
    default: shortid.generate
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "customer"
  },
  status: {
    type: String,
    max: 50,
    required: true
  },
  items: [
    {
      name: {
        type: String,
        max: 300,
        required: true
      },
      description: {
        type: String,
        max: 250,
        required: false
      },
      price: {
        type: String,
        required: true
      },
      imgUrl: {
        type: String,
      },
      qty: {
        type: Number,
        min: 1,
        max: 99999999,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
