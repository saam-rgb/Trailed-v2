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
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//*routes
const bagRoutes = require("./src/bags/bag.routes");
app.use("/api/bags", bagRoutes);

const main = async () => {
  await mongoose.connect(process.env.DB_CONNECTION);
  app.use("/", (req, res) => res.send("Hello makkaley"));
};

main()
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.error(`error ${err}`));

app.listen(PORT, () => console.log(`Port ${PORT} connected successfully`));
