import { Router } from "express";
import { login } from "../middlewares/login.middlewares.js";
const router = Router();

router.post("/", login);

export default router;
