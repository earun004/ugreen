const mongoose = require("mongoose");

const { Schema } = mongoose;

const visitorSchema = Schema({
  name: { type: String, default: "Visitors" },
  count: { type: Number, default: 0 },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
