const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = Schema({
  comment: { type: String, required: true },
  stars: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  userName: { type: String, required: true },
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  approve: { type: Boolean, default: false },
});

const Reviews = mongoose.model("review", reviewSchema);

module.exports = Reviews;
