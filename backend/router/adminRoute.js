import express from "express";
const adminRouter = express.Router();
import {
    addBlog,
    adminLogin, forgotPassword,
  } from "../controller/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

adminRouter.post("/admin-login", adminLogin);
adminRouter.post("/forgot-password", forgotPassword);
adminRouter.post("/add-blog", protectAdmin,addBlog);


export default adminRouter;