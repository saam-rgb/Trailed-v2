const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

//* Middlewares

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://trailed-v2.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//* Routes
const bagRoutes = require("./src/bags/bag.routes");
const orderRoutes = require("./src/orders/order.routes");
const userRoutes = require("./src/users/user.routes");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/bags", bagRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Default route
app.get("/", (req, res) => res.send("Hello makkaley"));

// Health check route
app.get("/health", (req, res) => res.status(200).json({ status: "UP" }));

//* Error handling
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

//* Database Connection
const main = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("DB Connected successfully");
  } catch (err) {
    console.error(`Database connection error: ${err}`);
    process.exit(1);
  }
};

main();

//* Server Listening
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
