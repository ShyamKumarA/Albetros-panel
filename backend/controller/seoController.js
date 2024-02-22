import Admin from "../models/adminModel.js";
import Seo from "../models/seoModel.js";


// add seo
export const addSeo = async (req, res, next) => {
    try {
        
        const { title, description, keyWords,page } = req.body;
          const adminId = req.admin._id;
          const admin = await Admin.findById(adminId);
  
        if (!admin) {
          return next(errorHandler(401, "Admin not found"));
        }
  
        const seo = await Seo.create({
          title,
          description,
          keyWords,
          page
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
      const { id } = req.params;
      const { title, description, keyWords, page } = req.body;
  
      // Find the admin
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return next(errorHandler(401, "Admin not found"));
      }
  
      // Find the SEO data to edit
      let seoData = await Seo.findById(id);
      if (!seoData) {
        return next(errorHandler(404, "SEO data not found"));
      }
  
      // Update the SEO data with the new values if they are provided
      seoData.title = title || seoData.title;
      seoData.description = description || seoData.description;
      seoData.keyWords = keyWords || seoData.keyWords;
      seoData.page = page || seoData.page;
  
      // Save the updated SEO data
      const updatedSeo = await seoData.save();
  
      // Respond with the updated SEO data
      if(updatedSeo){
        return res.status(200).json({
            updatedSeo,
            sts: "01",
            msg: "SEO data updated successfully",
          });
      }
      
  
    } catch (error) {
      next(error);
    }
  };
  

