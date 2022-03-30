const express = require("express");
const {
  createBlog,
  fetchBlog,
  deleteBlog,
  updateBlog,
  fetchSingleBlog,
  getThreeBlogs,
} = require("../controllers/BlogsControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, createBlog);
router.get("/", fetchBlog);
router.get("/three", getThreeBlogs);
router.get("/:id", fetchSingleBlog);
router.patch("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);
module.exports = router;
