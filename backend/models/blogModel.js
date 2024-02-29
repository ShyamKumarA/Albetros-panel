import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sections: [{
    subtitle: String,
    subdescription: String
  }],
  blogImage: {
    type: String,
    default: null,
  },
  advImage:{
    type: String,
    default: null,
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
