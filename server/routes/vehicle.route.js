import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const displayVehicles = await prisma.vehicle.findMany();
    res.status(200).json({ success: true, data: displayVehicles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getVehicle = await prisma.vehicle.findFirst({
      where: { vehIdId: id },
      select: {
        vehId: true,
        vehName: true,
        vehCategory: true,
        vehStatus: true,
        vehPrice: true,
      },
    });
    if (!getVehicle) {
      res.status(404).json({ message: "Invalid Vehicle" });
    } else {
      res.status(200).json({ sucess: true, data: getVehicle });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { vehName, vehImg, vehCategory, vehStatus, vehPrice } = req.body;
    const createVehicle = await prisma.vehicle.create({
      data: {
        vehName,
        vehImg,
        vehCategory,
        vehStatus,
        vehPrice,
      },
      select: {
        vehId: true,
        vehName: true,
        vehImg: true,
        vehCategory: true,
        vehStatus: true,
        vehPrice: true,
      },
    });
    res.status(200).json({ success: true, data: createVehicle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { vehName, vehImg, vehCategory, vehStatus, vehPrice } = req.body;
    let updatedVehicle;
    if (vehName) {
      updatedVehicle = await prisma.vehicle.update({
        where: { vehId: id },
        data: { vehName },
      });
    }
    if (vehImg) {
      updatedVehicle = await prisma.vehicle.update({
        where: { vehId: id },
        data: { vehImg },
      });
    }
    if (vehCategory) {
      updatedVehicle = await prisma.vehicle.update({
        where: { vehId: id },
        data: { vehCategory },
      });
    }
    if (vehStatus) {
      updatedVehicle = await prisma.vehicle.update({
        where: { vehId: id },
        data: { vehStatus },
      });
    }
    if (vehPrice) {
      updatedVehicle = await prisma.vehicle.update({
        where: { vehId: id },
        data: { vehPrice },
      });
    }
    res.status(200).json(updatedVehicle);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteVehicle = await prisma.vehicle.delete({
      where: { vehId: id },
      select: {
        vehId: true,
        vehName: true,
        vehImg: true,
        vehCategory: true,
        vehStatus: true,
        vehPrice: true,
      },
    });
    if (!deleteVehicle) {
      res.status(404).json({ message: "Unable to find the vehicle" });
    }
    res.status(200).json({ sucess: true, data: deleteVehicle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
