import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const { firstname, lastname, emailAddress, userImg, password } = req.body;
  try {
    const securedPassword = await bcrypt.hash(password, 10);
    const users = await prisma.users.create({
      data: {
        firstname,
        lastname,
        emailAddress,
        userImg,
        password: securedPassword,
      },
      select: {
        firstname: true,
        lastname: true,
        emailAddress: true,
        userImg: true,
      },
    });
    const token = jwt.sign({ userId: users.id }, "homealone");
    res.status(201).json({ success: true, token: token, data: users });
  } catch (error) {
    res
      .status(500)
      .json({
        succcess: false,
        message: "An Error occured. Please refresh",
        error: error.message,
      });
  }
};

export default signup;
