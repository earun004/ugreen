const express = require("express");
const {
  createAddress,
  fetchAddress,
  deleteAddress,
  updateAddress,
  fetchSingleAddress,
  getAddress,
  getUserAddress,
} = require("../controllers/AddressControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createAddress);
router.get("/", fetchAddress);
router.get("/user/:id", getUserAddress);
router.get("/:id", fetchSingleAddress);
router.patch("/:id", updateAddress);
router.delete("/:id", auth, deleteAddress);
module.exports = router;
