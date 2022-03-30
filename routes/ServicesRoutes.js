const express = require("express");
const {
  createService,
  fetchService,
  deleteService,
  updateService,
  fetchSingleService,
} = require("../controllers/ServicesControllers.js");

const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, createService);
router.get("/", fetchService);
router.get("/:id", fetchSingleService);
router.patch("/:id", auth, updateService);
router.delete("/:id", auth, deleteService);

module.exports = router;
