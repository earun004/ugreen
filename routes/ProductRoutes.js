const express = require("express");

const auth = require("../middleware/auth.js");
const {
  createProduct,
  fetchProducts,
  updateProduct,
  deleteProduct,
  fetchSingleProduct,
  getProducts,
  searchByCategory,
  cartItems,
  searchByDisplay,
} = require("../controllers/ProductController.js");

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchProducts);
router.get("/limited", getProducts);
router.get("/category", searchByCategory);
router.get("/cartItems", cartItems);
router.get("/display", searchByDisplay);
router.get("/:id", fetchSingleProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
