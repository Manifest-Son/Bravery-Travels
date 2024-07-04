import { Router } from "express";
import {
  allUsers,
  selectUser,
  createUser,
  updateUser,
  deleteUser,
} from "../middlewares/users.middlewares.js";

const router = Router();

router.get("/", allUsers);

router.get("/:id", selectUser);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
