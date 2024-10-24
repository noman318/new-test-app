import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    package_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Package",
    },
    name: { type: String },
    email: { type: String },
    people_qty: { type: String },
    phone: { type: String },
    price: { type: String },
    month: { type: String },
    query: { type: String },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
