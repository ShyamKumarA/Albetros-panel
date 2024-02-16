import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
  },
description:  {
    type: String,
    required: true,
  },
subTitle1:  {
    type: String,
    required: true,
  },
subDescription1:  {
    type: String,
    required: true,
  },
subTitle2:  {
    type: String,
    required: true,
  },
subDescription2: {
    type: String,
    required: true,
  },
subTitle3:  {
    type: String,
    required: true,
  },
subDescription3: {
    type: String,
    required: true,
  },
blogImage: {
    type: String,
    default: null,
  },
});
      
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;