 import express from "express";
 import connectdb from "./Config/config.js";
 import cors from "cors";
 import dotenv from "dotenv";

  dotenv.config();

  connectdb();

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.get("/" , (req,res) =>{
    console.log(" backend is running");
  });

  const PORT = process.env.PORT || 5000 ;

  app.listen( PORT , ()=>{
    console.log(" Server is Running");
  })



