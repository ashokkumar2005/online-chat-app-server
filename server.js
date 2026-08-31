import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import connectdb from "./Config/config.js";
import { initsocket } from "./socket/socket.js";
import Authroute from "./routes/auth.route.js";
import Messageroute from "./routes/messageroute.js";
import Userroute from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", Userroute);
app.use("/api/messages", Messageroute);
app.use("/api/auth", Authroute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running" });
});

connectdb();

const server = http.createServer(app);
initsocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


