import jwt from "jsonwebtoken";
import { errorHandler } from "../middleware/errorHandler.js";
import Admin from "../models/adminModel.js";
import bcryptjs from "bcryptjs";
import upload from "../config/multiFileUpload.js";
import Blog from "../models/blogModel.js";






// admin login Api

export const adminLogin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const validAdmin = await Admin.findOne({ username });
      if (!validAdmin) {
        return next(errorHandler(401, "User not found"));
      }
        const validPassword = bcryptjs.compareSync(password, validAdmin.password);
        if (!validPassword) {
          return next(errorHandler(401, "Wrong credentials"));
        }
        const token = jwt.sign({ userId: validAdmin._id }, "Albetros", {
          expiresIn: "1d",
        }); 
  
        res.status(200).json({
          id: validAdmin._id,
          email: validAdmin.username,
          token_type: "Bearer",
          access_token: token,
          sts: "01",
          msg: "Admin Login Success",
        });
     
    } catch (error) {
      next(error);
    }
  };


  //forgot password

  export const forgotPassword = async (req, res, next) => {
    const { email, newPassword } = req.body;
    try {
      const validAdmin = await Admin.findOne({ username:email });
      if (validAdmin) {
        if (newPassword) {
          const hashedPassword = bcryptjs.hashSync(newPassword, 10);
          validAdmin.password = hashedPassword;
        }
        const updatedUser = await validAdmin.save();
  
        res
          .status(200)
          .json({ updatedUser, sts: "01", msg: "Successfully Updated" });
      } else {
        next(errorHandler(401,"Admin not found, Please check Email first"));
      }
     
    } catch (error) {
      next(error);
    }
  };





  export const addBlog = async (req, res, next) => {
    try {
      upload(req, res, async function (err) {
        if (err) {
          return next(errorHandler(401, "File upload error"));
        }
  
        const {
          title, description, subTitle1, subDescription1,
          subTitle2, subDescription2, subTitle3, subDescription3
        } = req.body;
  
        // Assuming the uploaded image is available in req.files.blogImage
        const blogImage = req.files.blogImage[0].filename;
        console.log(blogImage);
        const adminId = req.admin._id;
        const admin = await Admin.findById(adminId);
  
        if (admin) {
          const blog = await Blog.create({
            title, description, subTitle1, subDescription1,
            subTitle2, subDescription2, subTitle3, subDescription3, blogImage
          });
  
          const updatedBlog = await blog.save();
          if (updatedBlog) {
            return res.status(201).json({
              sts: "01",
              msg: "Blog Added Successfully",
            });
          } else {
            return next(
              errorHandler(401, "Verification failed. Please try again!")
            );
          }
        } else {
          return next(errorHandler(401, "Admin not found"));
        }
      });
    } catch (error) {
      next(error);
    }
  };
  






  // export const addBlog = async (req, res, next) => {
  //   try {
  //     const {
  //       title, description, subTitle1, subDescription1,
  //       subTitle2, subDescription2, subTitle3, subDescription3
  //     } = req.body;
  
  //     const adminId = req.admin._id;
  //     const admin = await Admin.findById(adminId);
  
  //     if (admin) {
  //       const blog = await Blog.create({
  //         title, description, subTitle1, subDescription1,
  //         subTitle2, subDescription2, subTitle3, subDescription3
  //       });
  
  //       const updatedBlog = await blog.save();
  //       if (updatedBlog) {
  //         return res.status(201).json({
  //           sts: "01",
  //           msg: "Blog Added Successfully",
  //         });
  //       } else {
  //         return next(
  //           errorHandler(401, "Verification failed. Please try again!")
  //         );
  //       }
  //     } else {
  //       return next(errorHandler(401, "Admin not found"));
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  



  //view blogs

  export const viewBlogs=async(req,res,next)=>{
    try {
      const blogData=await Blog.find()
      if(blogData){
        const blogCount=blogData.length;
        res.status(200).json({
          blogData,
          blogCount,
          sts: "01",
          msg: "blog data get Success",
        });
      }else {
      next(errorHandler("Blogs not found"));
    }
  } catch (error) {
    next(error);
  }

  }


   //view single blogs

   export const viewSingleBlog=async(req,res,next)=>{
    try {
      const { id } = req.params;

      const blogData=await Blog.findById(id)
      if(blogData){
        
        res.status(200).json({
          blogData,
          sts: "01",
          msg: "blog data get Success",
        });
      }else {
      next(errorHandler("Blogs not found"));
    }
  } catch (error) {
    next(error);
  }

  }


    // delete single blog
export const deleteSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const adminId = req.admin._id;
    const admin = await Admin.findById(adminId);

    if (admin) {
      const deletedBlog = await Blog.findByIdAndDelete(id);

      if (deletedBlog) {
        res.status(200).json({
          deletedBlog,
          sts: "01",
          msg: "Blog deleted successfully",
        });
      } else {
        next(errorHandler("Blog not found", 404));
      }
    } else {
      next(errorHandler(401, "Admin not found"));
    }
  } catch (error) {
    next(error);
  }
};
