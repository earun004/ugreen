const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  registeredOn: { type: Date, default: Date.now },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
