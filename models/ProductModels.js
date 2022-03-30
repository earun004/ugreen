const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  image: { type: String, required: true },
  image1: { type: String },
  image2: { type: String },
  price: { type: String, required: true },
  mrp: { type: String, required: true },
  available: { type: String },
  benefits: { type: String },
  directions: { type: String },
  description: { type: String },
  name: { type: String, required: true },
  category: { type: String, required: true },
  displayIn: { type: String },
  offers: { type: Boolean, default: false },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
