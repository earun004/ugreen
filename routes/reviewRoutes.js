const express = require("express");
const {
  createReview,
  fetchReview,
  deleteReview,
  updateReview,
  fetchSingleReview,
  getReviews,
} = require("../controllers/ReviewsControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createReview);
router.get("/", fetchReview);
router.get("/product", getReviews);
router.get("/:id", fetchSingleReview);
router.patch("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);
module.exports = router;
