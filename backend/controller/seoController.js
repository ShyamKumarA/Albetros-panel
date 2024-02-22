import Admin from "../models/adminModel.js";
import Seo from "../models/seoModel.js";


// add seo
export const addSeo = async (req, res, next) => {
    try {
        
        const { title, description, keyWords } = req.body;
          const adminId = req.admin._id;
          const admin = await Admin.findById(adminId);
  
        if (!admin) {
          return next(errorHandler(401, "Admin not found"));
        }
  
        const seo = await Seo.create({
          title,
          description,
          keyWords
        });

  if(seo){
    return res.status(201).json({
        seo,
      sts: "01",
      msg: "Blog Added Successfully",
    });
  }
        
      
    } catch (error) {
      next(error);
    }
  };


  //edit seo

  export const editSeo = async (req, res, next) => {
    try {
      const adminId = req.admin._id;
      const { title, description, keyWords } = req.body;
  
      // Find the admin
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return next(errorHandler(401, "Admin not found"));
      }
  
      // Find the SEO data (assuming there is only one document)
      let seoData = await Seo.findOne();
      if (!seoData) {
        return next(errorHandler(404, "SEO data not found"));
      }
  
      // Update the SEO data with the new values if they are provided
      seoData.title = title || seoData.title;
      seoData.description = description || seoData.description;
      seoData.keyWords = keyWords || seoData.keyWords;
  
      // Save the updated SEO data
      const updatedSeo = await seoData.save();
  
      // Respond with the updated SEO data
      return res.status(200).json({
        updatedSeo,
        sts: "01",
        msg: "SEO data updated successfully",
      });
  
    } catch (error) {
      next(error);
    }
  };
  

//view SEO


  export const viewSeo=async(req,res,next)=>{
    try {
      const seoData=await Seo.find()
      if(seoData){
        res.status(200).json({
            seoData,
          sts: "01",
          msg: "seo data get Success",
        });
      }else {
      next(errorHandler("SEOs not found"));
    }
  } catch (error) {
    next(error);
  }

  }