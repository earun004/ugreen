const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceFormSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  area: { type: String, required: true },
  looking: { type: String, required: true },
  date: { type: Date, default: Date.now },
  message: { type: String },
  status: { type: Boolean, default: false },
});

const serviceForms = mongoose.model("serviceForm", serviceFormSchema);

module.exports = serviceForms;
