import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  type: String,
  images: [String],
  description: { type: String, default: "" },
});

export default mongoose.models.Gallery ||
  mongoose.model("Gallery", GallerySchema);
