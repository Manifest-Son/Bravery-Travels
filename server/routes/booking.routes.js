import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const booking = await prisma.booking.findMany();
    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getBooking = await prisma.booking.findFirst({
      where: { bookId: id },
      select: {
        bookId: true,
        bookVehicle: true,
        bookPrice: true,
        bookUser: true,
      },
    });
    if (!getBooking) {
      res.status(404).json({ message: "Invalid ticket" });
    } else {
      res.status(200).json({ sucess: true, data: getBooking });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { bookVehicle, bookUser, bookPrice } = req.body;
    const createBooking = await prisma.booking.create({
      data: {
        bookVehicle,
        bookUser,
        bookPrice,
      },
      select: {
        bookId: true,
        bookVehicle: true,
        bookUser: true,
        bookPrice: true,
      },
    });
    res.status(200).json({ success: true, data: createBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { bookVehicle, bookUser, bookPrice } = req.body;
    let updatedBooking;
    if (bookVehicle) {
      updatedBooking = await prisma.booking.update({
        where: { bookId: id },
        data: { bookVehicle },
      });
    }
    if (bookPrice) {
      updatedBooking = await prisma.booking.update({
        where: { bookId: id },
        data: { bookPrice },
      });
    }
    if (bookUser) {
      updatedBooking = await prisma.booking.update({
        where: { bookId: id },
        data: { bookUser },
      });
    }
    // console.log(req.params.userId);
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBooking = await prisma.booking.delete({
      where: { bookId: id },
      select: { bookId: true, bookVehicle: true, bookPrice: true },
    });
    if (!deleteBooking) {
      res.status(404).json({ message: "Unable to delete the booking event" });
    }
    res.status(200).json({ sucess: true, data: deleteBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
