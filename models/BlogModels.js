const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogsSchema = Schema({
  month: { type: String, required: true },
  date: { type: Number, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description1: { type: String, required: true },
});

const Blogs = mongoose.model("blogs", blogsSchema);

module.exports = Blogs;
