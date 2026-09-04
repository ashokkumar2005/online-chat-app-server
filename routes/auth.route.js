import express from "express";
import { Register, Login, Logout, Getcurrentuser } from "../authentication/auth.controller.js";
import { AuthUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/me", AuthUser, Getcurrentuser);

export default router;
