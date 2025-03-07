require("dotenv").config();  // Make sure this is at the top

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
const mongoURI = process.env.MONGO_URI;  // Ensure this is loaded correctly

// Check if Mongo URI is loaded
if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined. Check your .env file.");
  process.exit(1); // Stop the server
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("MONGO_URI:", process.env.MONGO_URI);

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
