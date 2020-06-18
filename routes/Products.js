const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// @route   GET /products
// @desc    Get all products
router.get("/products/", (req, res) => {
  //get products
  Product.find({})
    .then(product => {
      console.log("product is: ", product);
      res.json(product);
    })
    .catch(err => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   GET /products/:id
// @desc    Get product by id
router.get("/products/:id", (req, res) => {
  Product.findOne({ urlId: req.params.id })
    .then(product => {
      console.log("product is: ", product);
      res.json(product);
    })
    .catch(err => {
      res.status(404);
      console.log(err, res.statusCode);
      res.json(err);
    });
});

// @route   POST /addProduct
// @desc    add new product
router.post("/addProduct", async (req, res) => {

  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    price: req.body.price
  })

  const postProduct = await newProduct.save();
  res.json(postProduct);
});

module.exports = router;
