import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});
router.get("/:id", (req, res) => {
  res.send("Display payment");
});
router.post("/", (req, res) => {
  res.send("Creates a new payment");
});
router.patch("/:id", (req, res) => {
  res.send("Updates a payment");
});
router.delete("/:id", (req, res) => {
  res.send("Deletes a payment");
});

export default router;
