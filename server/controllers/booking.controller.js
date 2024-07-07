import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const bookVehicle = async (req, res) => {
  const { bookVehicle, bookUser, bookPrice } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: {
        bookVehicle,
        bookUser,
        bookPrice,
      },
    });
    res
      .status(200)
      .json({ success: true, message: "Booking successful", data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

export default bookVehicle;
