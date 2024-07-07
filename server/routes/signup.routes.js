import { Router } from "express";
import signup from "../middlewares/signup.middlewares.js";
const router = Router();

router.post("/", signup);

export default router;
