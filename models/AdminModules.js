const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const Admin = mongoose.model("Admin", userSchema);
module.exports = Admin;
