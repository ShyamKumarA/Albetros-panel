import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema({
    keyWords: {
    type: String,
    required: true,
  },
  advImage:{
    type:String,
    default:null
  }
});

const Keyword = mongoose.model("Keyword", keywordSchema);

export default Keyword;
