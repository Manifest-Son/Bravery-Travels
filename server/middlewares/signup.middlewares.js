import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { firstname, lastname, emailAddress, password } = req.body;
  try {
    const securedPassword = await bcrypt.hash(password, 10);
    const users = await prisma.users.create({
      data: {
        firstname,
        lastname, 
        emailAddress,
        password: securedPassword,
      },
      select: {
        firstname: true,
        lastname: true,
        emailAddress: true,
      },
    });
    res.status(201).json({success: true, data: users});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An Error occured. Please refresh",
      error: error.message,
    });
  }
};

export default signup;
