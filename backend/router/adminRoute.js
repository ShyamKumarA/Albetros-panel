import express from "express";
const adminRouter = express.Router();
import {
    addBlog,
    adminLogin, deleteSingleBlog, forgotPassword, viewBlogs, viewSingleBlog,
  } from "../controller/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import { addKeywords, addSeo, deleteadvImage, editKeywords, editSeo, postAdvImage, viewKeywords, viewSeo, viewadvImage } from "../controller/seoController.js";

adminRouter.post("/admin-login", adminLogin);
adminRouter.post("/forgot-password", forgotPassword);
adminRouter.post("/add-blog", protectAdmin,addBlog);
adminRouter.post("/delete-blog/:id", protectAdmin,deleteSingleBlog);
adminRouter.post("/add-seo", protectAdmin,addSeo);
adminRouter.post("/edit-seo/:id", protectAdmin,editSeo);
adminRouter.post("/add-keywords", protectAdmin,addKeywords);
adminRouter.post("/edit-keywords", protectAdmin,editKeywords);
adminRouter.post("/post-adv-image", protectAdmin,postAdvImage);
adminRouter.post("/delete-adv-image", protectAdmin,deleteadvImage);






adminRouter.get("/view-blogs", viewBlogs);
adminRouter.get("/view-single-blog/:id", viewSingleBlog);
adminRouter.get("/view-seo",viewSeo);
adminRouter.get("/view-keywords",viewKeywords);
adminRouter.get("/view-adv-image",viewadvImage);





export default adminRouter;