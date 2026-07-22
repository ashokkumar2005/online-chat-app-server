
import {Server, Socket} from "socket.io";

 let io;

export const initsocket = (Server)=>{

   io = new Server(server, {
     cors:{
        origin: "http://localhost:5173",
        methods:["GET", "POST"]
     }
   });

  io.on("connect",(Socket)=>{

      console.log("connected:", Socket.id);

      Socket.on("join" , (UserId)=>{
        users[UserId]=Socket.id;

        console.log(users);

      })
      
      
      Socket.on("disconnect", ()=>{

        for(const UserId in users ){
          if( users[UserId] === Socket.id){
            delete users[UserId];
            break;
          }
        }
        console.log(users);
      })
  })


   return io;
};

export const getIo = ()=> io;

export const getReciverSocketId = (UserId)=>{
   return users[UserId];

}