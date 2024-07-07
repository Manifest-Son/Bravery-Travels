import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const bookVehicle = async (req, res) => {
  const { vehicleId, userId, startDate, endDate } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: {
        vehicleId,
        userId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    res.status(200).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  bookVehicle,
};
