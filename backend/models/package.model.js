import mongoose from "mongoose";
const detailsSchema = mongoose.Schema({
  detail_price: { type: String },
  detail_title: { type: String },
  detail_description: { type: String },
  images: { type: String },
});
const itenarySchema = mongoose.Schema({
  title: { type: String },
  list: { type: Array },
  note: { type: String },
});
const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail_image: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    details: [detailsSchema],
    pickup: {
      type: String,
      required: true,
    },
    drop: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    itinerary: [itenarySchema],
    inclusions: {
      type: [String],
    },
    exclusions: {
      type: [String],
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
