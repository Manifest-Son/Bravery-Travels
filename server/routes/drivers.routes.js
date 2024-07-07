import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(" Displays all drivers");
});
router.get("/:id", (req, res) => {
  res.send("Display a driver");
});
router.post("/", (req, res) => {
  res.send("Creates a new driver");
});
router.patch("/:id", (req, res) => {
  res.send("Updates a driver");
});
router.delete("/:id", (req, res) => {
  res.send("Deletes a driver");
});

export default router;
