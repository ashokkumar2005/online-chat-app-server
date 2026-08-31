import express from "express";
import { sendmessage, getmessage } from "../controller/message.controller.js";
import { AuthUser } from "../middleware/auth.middleware.js";

const route = express.Router();

route.post("/:reciverId", AuthUser, sendmessage);
route.get("/:userId", AuthUser, getmessage);

export default route;