import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(" Displays all category");
});
router.get("/:id", (req, res) => {
  res.send("Display category");
});
router.post("/", (req, res) => {
  res.send("Creates a new category");
});
router.patch("/:id", (req, res) => {
  res.send("Updates a category");
});
router.delete("/:id", (req, res) => {
  res.send("Deletes a category");
});

export default router;
