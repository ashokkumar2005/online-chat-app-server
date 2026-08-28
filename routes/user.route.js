import express from "express";
import {GetUsers} from "../controller/user.controller.js";
import {AuthUser} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/",AuthUser,GetUsers);

export default router;

