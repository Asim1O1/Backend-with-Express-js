// routes/auth.js
import { Router } from "express";
import { passwordChecker } from "../middlewares/middleware1.js";
import { register } from "../controllers/register.js";

const router = Router();

router.get("/register", passwordChecker, register);

export default router;
