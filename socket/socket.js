import { Server } from "socket.io";

let io;
const users = {};

const broadcastOnlineUsers = () => {
  if (io) {
    io.emit("getOnlineUsers", Object.keys(users));
  }
};

export const initsocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("connected:", socket.id);

    socket.on("join", (userId) => {
      if (userId) {
        users[userId] = socket.id;
        console.log("joined users:", users);
        broadcastOnlineUsers();
      }
    });

    socket.on("disconnect", () => {
      for (const [userId, socketId] of Object.entries(users)) {
        if (socketId === socket.id) {
          delete users[userId];
          break;
        }
      }
      console.log("remaining users:", users);
      broadcastOnlineUsers();
    });
  });

  return io;
};

export const getIo = () => io;

export const getReciverSocketId = (userId) => users[userId];
