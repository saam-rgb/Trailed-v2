const express = require("express");
const Bags = require("./bag.model");
const {
  postABag,
  getAllBags,
  getSingleBag,
  updateABag,
  deleteABag,
} = require("./bag.controller");
const router = express.Router();

router.post("/create-bag", postABag);
//get all books
router.get("/", getAllBags);
//get single book
router.get("/:id", getSingleBag);
//update single book
router.put("/edit/:id", updateABag);
//delete single book
router.delete("/:id", deleteABag);

module.exports = router;
