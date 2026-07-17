
import {Server} from "socket.io";

 let io;

export const initsocket = (server)=>{

   io = new Server(server, {
     cors:{
        origin: "http://localhost:5173",
        method:["GET", "POST"]
     }
   });

   io.on("connection" , (soket)=>{
      console.log("connected", socket.id);

      socket.on("Hello" , (message)=>{
        console.log("Client", message);

        socket.emit("Welcome" , " Welocome to Chat App");
      })

      socket.on("disconnected" , (socket)=>{
        console.log("User Disconnected" , socket.id);
   })
   })

   return io;
};

export const getIo = ()=> io;