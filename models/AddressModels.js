const mongoose = require("mongoose");

const { Schema } = mongoose;

const addressSchema = Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  company: { type: String },
  username: { type: String, required: true },
  userEmail: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
