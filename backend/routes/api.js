const express = require('express');
const router = express.Router();
const { getProducts } = require('../models/Product');

router.get('/products', async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
