import mongoose from "mongoose";
const detailsSchema = mongoose.Schema({
  detail_price: { type: String, required: true },
  detail_title: { type: String, required: true },
  detail_description: { type: String, required: true },
  images: { type: String, required: true },
});
const itenarySchema = mongoose.Schema({
  title: { type: String, required: true },
  list: { type: Array, required: true },
  note: { type: String, required: true },
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
    pickUp: {
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
    inclusionDetail: {
      type: [String],
    },
    exclusionDetail: {
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
