import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const allUsers = async (req, res) => {
  try {
    const displayUsers = await prisma.users.findMany();
    res.status(200).json({ success: true, data: displayUsers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const selectUser = async (req, res) => {
  try {
    const id = req.params.id;
    const getUser = await prisma.users.findFirst({
      where: { userId: id },
      select: {
        userId: true,
        firstname: true,
        lastname: true,
        emailAddress: true,
        userImg: true,
      },
    });
    if (!getUser) {
      res.status(404).json({ message: "Wrong credentials" });
    } else {
      res.status(200).json({ sucess: true, data: getUser });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, emailAddress, password, userImg } = req.body;
    const user = await prisma.users.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        emailAddress: emailAddress,
        password: password,
        userImg: userImg,
      },
      //   select: {
      //     firstname: true,w
      //     lastname: true,
      //     emailAddress: true,
      //     userImg: true
      //   }
    });
    // if (emailAddress = emailAddress){
    //     res.status(500).json({message: "The email has already been used"})
    // }
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Sorry, for an error occured" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params.id);
    const { firstname, lastname, emailAddress, password, userImg } = req.body;
    let updatedUser;
    if (firstname) {
      updatedUser = await prisma.users.update({
        where: { userId: id },
        data: { firstname },
      });
    }
    if (lastname) {
      updatedUser = await prisma.users.update({
        where: { userId: id },
        data: { lastname },
      });
    }
    if (email) {
      updatedUser = await prisma.users.update({
        where: { userId: id },
        data: { emailAddress },
      });
    }
    if (password) {
      updatedUser = await prisma.users.update({
        where: { userId: id },
        data: { password },
      });
    }
    if (userImg) {
      updatedUser = await prisma.users.update({
        where: { userId: id },
        data: { userImg },
      });
    }
    console.log(req.params.userId);
    res.status(200).json();
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Sorry, for an error occured" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUsers = await prisma.users.delete({
      where: { userId: id },
      select: { userId: true, firstname: true, lastname: true },
    });
    if (!deleteUsers) {
      res.status(404).json({ message: "Wrong credentials" });
    }
    res.status(200).json({ sucess: true, data: deleteUsers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
