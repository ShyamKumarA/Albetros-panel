import express from "express";
const adminRouter = express.Router();
import {
    addBlog,
    adminLogin, deleteSingleBlog, forgotPassword, viewBlogs, viewSingleBlog,
  } from "../controller/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

adminRouter.post("/admin-login", adminLogin);
adminRouter.post("/forgot-password", forgotPassword);
adminRouter.post("/add-blog", protectAdmin,addBlog);
adminRouter.post("/delete-blog/:id", protectAdmin,deleteSingleBlog);



adminRouter.get("/view-blogs", viewBlogs);
adminRouter.get("/view-single-blog/:id", viewSingleBlog);




export default adminRouter;