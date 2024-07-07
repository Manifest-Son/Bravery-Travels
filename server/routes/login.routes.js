import { Router } from "express";
import { login } from "../middlewares/login.middlewares.js";
import validationLoginUser from "../controllers/login.controllers.js";
const router = Router();

router.post("/", login, validationLoginUser);

export default router;
