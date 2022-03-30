const mongoose = require("mongoose");

const { Schema } = mongoose;

const StoreBannersSchema = Schema({
  image: { type: String, required: true },
  displayedIn: { type: String },
});

const StoreBanners = mongoose.model("storeBanners", StoreBannersSchema);

module.exports = StoreBanners;
