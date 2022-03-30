const mongoose = require("mongoose");

const { Schema } = mongoose;

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: String, required: true },
});

const Counter = mongoose.model("Counter", CounterSchema);
