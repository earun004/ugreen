const express = require("express");
const {
  createOrder,
  fetchOrder,
  deleteOrder,
  updateOrder,
  fetchSingleOrder,
  getOrders,
  getUserOrders,
} = require("../controllers/OrdersControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createOrder);
router.get("/", auth, fetchOrder);
router.get("/user/:id", getUserOrders);
router.get("/:id", fetchSingleOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", auth, deleteOrder);
module.exports = router;
