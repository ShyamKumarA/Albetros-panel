import mongoose from "mongoose";

const seoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyWords: {
    type: String,
    required: true,
  }
});

const Seo = mongoose.model("Seo", seoSchema);

export default Seo;
