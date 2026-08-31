import express from "express";
import { Register, Login, Getcurrentuser } from "../authentication/auth.controller.js";
import { AuthUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/me", AuthUser, Getcurrentuser);

export default router;