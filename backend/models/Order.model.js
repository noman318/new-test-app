import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String },
    email: { type: String },
    package_id: { type: String },
    people_qty: { type: Number },
    phone: { type: Number },
    price: { type: Number },
    month: { type: String },
    query: { type: String },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
