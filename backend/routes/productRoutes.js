const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Add a Product
router.post("/", async (req, res) => {
  const { name, description, price, image } = req.body;
  const product = await Product.create({ name, description, price, image });
  res.status(201).json(product);
});

module.exports = router;
