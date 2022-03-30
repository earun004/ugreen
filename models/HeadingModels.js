const mongoose = require("mongoose");

const { Schema } = mongoose;

const HeadingSchema = Schema({
  home1: { type: String },
  home2: { type: String },
  title1: { type: String },
  title2: { type: String },
});

const Headings = mongoose.model("heading", HeadingSchema);

module.exports = Headings;
