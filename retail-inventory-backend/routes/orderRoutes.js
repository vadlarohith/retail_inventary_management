const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create a new order
router.post("/create", async (req, res) => {
  try {
    const { customerName, products, totalPrice } = req.body;
    const newOrder = new Order({ customerName, products, totalPrice });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("products.productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
