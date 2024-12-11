const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
PORT = process.env.PORT || 5001;

//*middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://trailed-v2.vercel.app"],
    credentials: true,
  })
);

//*routes
const bagRoutes = require("./src/bags/bag.routes");
const orderRoutes = require("./src/orders/order.routes");
const userRoutes = require("./src/users/user.routes");
const adminRoutes = require("./src/stats/admin.stats");
app.use("/api/bags", bagRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

const main = async () => {
  await mongoose.connect(process.env.DB_CONNECTION);
  app.use("/", (req, res) => res.send("Hello makkaley"));
};

main()
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.error(`error ${err}`));

app.listen(PORT, () => console.log(`Port ${PORT} connected successfully`));
