const express = require("express");
const Product = require("../models/Product");
const adminMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Product (Admin Only)
router.post("/products", adminMiddleware, async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const product = await Product.create({ name, description, price, image });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Product (Admin Only)
router.delete("/products/:id", adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id } });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
