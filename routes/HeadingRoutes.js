const express = require("express");
const {
  createHeading,
  fetchHeading,
  deleteHeading,
  updateHeading,
  fetchSingleHeading,
} = require("../controllers/HeadingsControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, createHeading);
router.get("/", fetchHeading);
router.get("/:id", fetchSingleHeading);
router.patch("/:id", auth, updateHeading);
router.delete("/:id", auth, deleteHeading);
module.exports = router;
