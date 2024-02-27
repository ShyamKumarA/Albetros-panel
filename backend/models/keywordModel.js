import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema({
    keyWords: {
    type: String,
    required: true,
  }
});

const Keyword = mongoose.model("Keyword", keywordSchema);

export default Keyword;
