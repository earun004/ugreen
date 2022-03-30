const express = require("express");
const {
  verification,
  payment,
} = require("../controllers/RazorPayControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();
router.post("/verification", verification);
router.post("/payment/:amount", payment);
module.exports = router;
