const express = require("express");
const {
  createServiceForm,
  fetchServiceForm,
  deleteServiceForm,
  updateServiceForm,
  fetchSingleServiceForm,
} = require("../controllers/ServiceFormsControllers.js");

const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createServiceForm);
router.get("/", auth, fetchServiceForm);
router.get("/:id", fetchSingleServiceForm);
router.patch("/:id", auth, updateServiceForm);
router.delete("/:id", auth, deleteServiceForm);

module.exports = router;
