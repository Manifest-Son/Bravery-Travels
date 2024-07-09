import { Router } from "express";
import signup from "../middlewares/signup.middlewares.js";
import validationSignupUser from "../controllers/signup.controllers.js";
const router = Router();

router.post("/", validationSignupUser, signup);

export default router; 
