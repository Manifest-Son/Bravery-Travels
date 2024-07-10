import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const profile = async (req, res) => {
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

  export default profile;
  