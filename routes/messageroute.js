
import express, { Router } from "express";
import{ sendmessage, getmessage} from "../controller/message.controller.js";
import {AuthUser} from "../middleware/auth.middleware.js"

const route = express.Router();

route.post("/:reciverId" , AuthUser , sendmessage);// one rciver will recive the message untill the it post the req to server 


route.get( "/:userId" , AuthUser, getmessage)// userid means there any user can read the msq ex a sender b is recive a also read message and b also read message


export default route;