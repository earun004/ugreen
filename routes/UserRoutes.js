const express = require("express");
const {
  signup,
  signin,
  getUserInfo,
  fetchUsers,
  updateUser,
  updatePassword,
  sendForgotMail,
} = require("../controllers/UserControllers.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", fetchUsers);
router.post("/sendMail", sendForgotMail);
router.patch("/password/:email", updatePassword);
router.get("/:id", getUserInfo);
router.patch("/:id", updateUser);
module.exports = router;
