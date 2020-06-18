const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

// Create Schema
const ProductSchema = new Schema({
  urlId: {
    type: String,
    default: shortid.generate
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  imgUrl: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
