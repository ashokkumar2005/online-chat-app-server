 import express from "express";
 import connectdb from "./Config/config.js";
 import cors from "cors";
 import dotenv from "dotenv";
//  import { initsocket } from "./socket/socket.js";
 import http from "http";
 import Authroute from "./routes/auth.route.js";
 import Messageroute from "./routes/messageroute.js";
 import Userroute from "./routes/user.route.js";


  dotenv.config();

  connectdb();

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use("/api/users",Userroute);
  app.use("/api/messages" , Messageroute);
  app.use("/api/auth" , Authroute);


  const server = http.createServer(app);

  // initsocket(server);

  app.get("/" , (req,res) =>{
    console.log(" backend is running");
  });

  const PORT = process.env.PORT || 5000 ;

  app.listen( PORT , ()=>{
    console.log(" Server is Running");
  })



