import express from "express";
const adminRouter = express.Router();
import {
    addBlog,
    adminLogin, deleteSingleBlog, forgotPassword, viewBlogs, viewSingleBlog,
  } from "../controller/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import { addSeo, editSeo, viewSeo } from "../controller/seoController.js";

adminRouter.post("/admin-login", adminLogin);
adminRouter.post("/forgot-password", forgotPassword);
adminRouter.post("/add-blog", protectAdmin,addBlog);
adminRouter.post("/delete-blog/:id", protectAdmin,deleteSingleBlog);
adminRouter.post("/add-seo", protectAdmin,addSeo);
adminRouter.post("/edit-seo", protectAdmin,editSeo);



adminRouter.get("/view-blogs", viewBlogs);
adminRouter.get("/view-single-blog/:id", viewSingleBlog);
adminRouter.get("/view-seo",viewSeo);




export default adminRouter;