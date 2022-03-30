const express = require("express");
const {
  createStoreBanner,
  fetchStoreBanner,
  deleteStoreBanner,
  updateStoreBanner,
  fetchSingleStoreBanner,
  searchByCategory,
} = require("../controllers/StoreBannersControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, createStoreBanner);
router.get("/", fetchStoreBanner);
router.get("/category", searchByCategory);
router.get("/:id", fetchSingleStoreBanner);
router.patch("/:id", auth, updateStoreBanner);
router.delete("/:id", auth, deleteStoreBanner);
module.exports = router;
