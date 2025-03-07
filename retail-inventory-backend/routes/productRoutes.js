const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Add new product
router.post("/add", async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const newProduct = new Product({ name, category, price, stock });
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update stock
router.put("/:id", async (req, res) => {
  try {
    const { stock } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { stock });

    res.json({ message: "Stock updated!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
