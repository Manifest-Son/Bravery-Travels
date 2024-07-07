import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(" Displays all inquiry");
});
router.get("/:id", (req, res) => {
  res.send("Display inquiry");
});
router.post("/", (req, res) => {
  res.send("Creates a new inquiry");
});
router.patch("/:id", (req, res) => {
  res.send("Updates a inquiry");
});
router.delete("/:id", (req, res) => {
  res.send("Deletes a inquiry");
});

export default router;
