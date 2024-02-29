
import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./router/adminRoute.js";
const NODE_ENV = 'production';
import dbConnect from "./config/dbConnect.js";
dbConnect();

const app=express();
app.use(cors())


app.use(express.json());
app.use(cookieParser());

app.use("/api/admin", adminRouter);

app.use("/uploads", express.static("uploads"));


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });

  if (NODE_ENV == "production") {
    // app.use(express.static(__dirname + "/frontend/dist"));
    app.use(express.static("/var/www/seclob/albertos/app/frontend/build"));
  
    app.get("*", (req, res) => {
      // res.sendFile(__dirname + "/frontend/dist/index.html");
      res.sendFile("/var/www/seclob/albertos/app/frontend/build/index.html");
    });
  } else {
    app.get("/", (req, res) => {
      res.status(201).json("Running");
    });
  }
  
  
  app.listen(6005,()=>{
      console.log('Server listening on port 6005');
  })