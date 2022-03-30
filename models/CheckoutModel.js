const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkoutSchema = Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  company: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  productIds: { type: [], required: true },
  userId: { type: String, required: true },
  time: { type: Date, required: true },
});

const Checkouts = mongoose.model("checkout", checkoutSchema);

module.exports = Checkouts;
