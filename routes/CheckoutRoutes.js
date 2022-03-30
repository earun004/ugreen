const express = require("express");
const {
  createCheckout,
  fetchCheckout,
  deleteCheckout,
  updateCheckout,
  fetchSingleCheckout,
  getCheckouts,
} = require("../controllers/CheckoutControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createCheckout);
router.get("/", fetchCheckout);
router.get("/product", getCheckouts);
router.get("/:id", fetchSingleCheckout);
router.patch("/:id", auth, updateCheckout);
router.delete("/:id", auth, deleteCheckout);
module.exports = router;
