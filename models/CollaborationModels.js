const mongoose = require("mongoose");

const { Schema } = mongoose;

const collaborateSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  category: { type: String, required: true },
  message: { type: String },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Collaboration = mongoose.model("collaboration", collaborateSchema);

module.exports = Collaboration;
