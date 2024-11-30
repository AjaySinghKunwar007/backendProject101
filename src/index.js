import mongoose from "mongoose";

import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";
import constants from "./constants.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error: ", error);
      throw error;
    });
    app.listen(constants.port || 8000, () => {
      console.log(`server is running at port: ${constants.port}`);
    });
  })
  .catch((error) => {
    console.log(`mongoDB connection failed !!! , ${error}`);
  });

/*
import express from "express";
const app = express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${BD_NAME}`);
        app.on("error",(error)=>{
            console.log("error: ", error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error : ",error)
        throw error
    }
})()
*/
