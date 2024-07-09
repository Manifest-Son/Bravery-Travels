import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

export const login = async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: { emailAddress }, 
    });
    if (!user) {
      return res.status(500).json({ message: "Invalid credentials" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(500).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "homealone");
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occured",
      error: err.message,
    });
  }
};
