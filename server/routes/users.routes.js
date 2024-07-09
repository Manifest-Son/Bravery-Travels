import { Router } from "express";
import {
  allUsers,
  selectUser,
  createUser,
  updateUser,
  deleteUser,
} from "../middlewares/users.middlewares.js";
import validateInformation from "../controllers/users.controllers.js";

const router = Router();

router.get("/", allUsers);

router.get("/:id", selectUser);

router.post("/", createUser);

router.patch("/:id", validateInformation, updateUser );

router.delete("/:id", deleteUser);

export default router;
