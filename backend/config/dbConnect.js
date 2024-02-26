import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const dbConnect = () => {
    mongoose.connect("mongodb+srv://seclobclt_albetros:RBRBGb648PMJQill@albetros.ueum8cv.mongodb.net/albetros?retryWrites=true&w=majority").then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log(err);
    })
};

export default dbConnect;
