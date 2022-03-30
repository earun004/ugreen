const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = Schema({
  title: { type: String, required: true },
  mrp: { type: String, required: true },
  price: { type: String, required: true },
  table: { type: String, required: true },
  description: { type: String },
  description1: { type: String },
  vseeds: { type: String },
  image: { type: String, required: true },
  image1: { type: String },
  image2: { type: String },
});

const services = mongoose.model("service", serviceSchema);

module.exports = services;
