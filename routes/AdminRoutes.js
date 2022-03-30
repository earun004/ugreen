const express = require("express");
const {
  signup,
  signin,
  loginAttempt,
  fetchLoginAttempt,
} = require("../controllers/Admin.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/loginAttempt", loginAttempt);
router.get("/loginAttempt", fetchLoginAttempt);
module.exports = router;
