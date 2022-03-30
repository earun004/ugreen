const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const { Schema } = mongoose;

const orderSchema = Schema({
  user: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    pincode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    company: { type: String },
    username: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  orderItems: [
    {
      id: { type: String, required: true },
      count: { type: Number, required: true },
      cost: { type: String, required: true },
      image: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  payment: {
    paymentStatus: { type: String },
    paymentId: { type: String },
    paidAt: { type: Date },
    paymentMode: { type: String },
    orderId: { type: String },
    signature: { type: String },
  },
  orderInfo: {
    paymentMode: { type: String },
    itemsPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    deliveredAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
    shippingPrice: { type: Number, default: 0 },
    discountPrice: { type: Number, required: true, default: 0.0 },
  },
  orderStatus: { type: String, required: true, default: "Pending" },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  trackingId: { type: String },
  modeOfTransport: { type: String },
  contactInfo: { type: String },
  comment: { type: String },
  cancelReason: { type: String },
});

autoIncrement.initialize(mongoose.connection);
orderSchema.plugin(autoIncrement.plugin, "Counter");
const Orders = mongoose.model("order", orderSchema);

module.exports = Orders;
