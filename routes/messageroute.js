
import express, { Router } from "express";
import{ sendmessage, getmessage} from "../Controler/messagecontro.js";

const route = express.Router();

route.post("/:reciverId",sendmessage);// one rciver will recive the message untill the it post the req to server 


route.get( "/:userId" , getmessage)// userid means there any user can read the msq ex a sender b is recive a also read message and b also read message


export default route;