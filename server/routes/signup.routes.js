import { Router } from "express";
import signup from "../middlewares/signup.middlewares.js";
import validationSignupUser from "../controllers/signup.controllers.js";
const router = Router();

router.post("/", signup, validationSignupUser);

export default router;
