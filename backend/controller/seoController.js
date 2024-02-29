import upload from "../config/multiFileUpload.js";
import Admin from "../models/adminModel.js";
import Keyword from "../models/keywordModel.js";
import Seo from "../models/seoModel.js";


// add seo
export const addSeo = async (req, res, next) => {
    try {
        
        const { title,page, description } = req.body;
          const adminId = req.admin._id;
          const admin = await Admin.findById(adminId);
  
        if (!admin) {
          return next(errorHandler(401, "Admin not found"));
        }
  
        const seo = await Seo.create({
          page,
          title,
          description
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
      const { title, description, page } = req.body;

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



  //add keywords

export const addKeywords = async (req, res, next) => {
  try {
      
      const { keyWords } = req.body;
        const adminId = req.admin._id;
        const admin = await Admin.findById(adminId);

      if (!admin) {
        return next(errorHandler(401, "Admin not found"));
      }

      const newkeyWords = await Keyword.create({
        keyWords
      });

if(newkeyWords){
  return res.status(201).json({
    newkeyWords,
    sts: "01",
    msg: "Keyword Added Successfully",
  });
}
      
    
  } catch (error) {
    next(error);
  }
};


  //edit keywords

  export const editKeywords = async (req, res, next) => {
    try {
      const adminId = req.admin._id;
      const { keyWords } = req.body;
  
      // Find the admin
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return next(errorHandler(401, "Admin not found"));
      }
  
      // Find the SEO data (assuming there is only one document)
      let keywordData = await Keyword.findOne();
      if (!keywordData) {
        return next(errorHandler(404, "SEO data not found"));
      }
  
      // Update the SEO data with the new values if they are provided
      keywordData.keyWords = keyWords || keywordData.keyWords;
  
      // Save the updated SEO data
      const updatedKeyword = await keywordData.save();
  
      // Respond with the updated SEO data
      return res.status(200).json({
        updatedKeyword,
        sts: "01",
        msg: "Keyword updated successfully",
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


  //view keywords


  export const viewKeywords=async(req,res,next)=>{
    try {
      const keywordData=await Keyword.findOne()
      if(keywordData){
        res.status(200).json({
          keywordData,
          sts: "01",
          msg: "keyword data get Success",
        });
      }else {
      next(errorHandler("keywords not found"));
    }
  } catch (error) {
    next(error);
  }

  }


  export const postAdvImage=async(req,res,next)=>{
    try {
      upload(req, res, async function (err) {
        if (err) {
          return next(errorHandler(401, "File upload error"));
        }
           if(!req.files.advImage){
          return next(errorHandler(401, " Image not found"));

        }

          const advImage = req.files.advImage[0].filename;
          const adminId = req.admin._id;
          const admin = await Admin.findById(adminId);
  
        if (!admin) {
          return next(errorHandler(401, "Admin not found"));
        }

        let keywordData = await Keyword.findOne();
      if (!keywordData) {
        return next(errorHandler(404, "SEO data not found"));
      }
      keywordData.advImage = advImage
  
      // Save the updated SEO data
      const ImageAdded = await keywordData.save();
  

        if(ImageAdded){
          
          return res.status(201).json({
            ImageAdded,
            sts: "01",
            msg: "Image Added Successfully",
          });
        }
        
      });
      
    } catch (error) {
      next(error)
    }
  }


    //view advImage


    export const viewadvImage=async(req,res,next)=>{
      try {
        const keywordData=await Keyword.findOne()
        const advImage=keywordData.advImage;
        if(keywordData){
          res.status(200).json({
            advImage,
            sts: "01",
            msg: "Image get Success",
          });
        }else {
        next(errorHandler("keywords not found"));
      }
    } catch (error) {
      next(error);
    }
  
    }


    //delete ad image


    export const deleteadvImage=async(req,res,next)=>{
      try {
        const adminId = req.admin._id;
    
        // Find the admin
        const admin = await Admin.findById(adminId);
        if (!admin) {
          return next(errorHandler(401, "Admin not found"));
        }
        const keywordData=await Keyword.findOne()
        keywordData.advImage=null;
        const deleteImage=await keywordData.save();
        if(deleteImage){
          res.status(200).json({
            image:deleteImage.advImage,
            sts: "01",
            msg: "Image deleted Successfull",
          });
        }else {
        next(errorHandler("keywords not found"));
      }
    } catch (error) {
      next(error);
    }
  
    }
