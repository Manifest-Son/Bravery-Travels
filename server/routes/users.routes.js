import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async(req, res) => {
    try{
        const displayUsers = await prisma.users.findMany()
        res.status(200).json({success: true, data: displayUsers})
        
    } catch (err){
        res.status(500).json({success: false, message: err.message})
    }
});

router.get("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const getUser = await prisma.users.findFirst({
        where: {userId: id},
        select: {userId:true, firstname: true, lastname: true, emailAddress:true, userImg:true}
    })
    if(!getUser){
        res.status(404).json({message: "Wrong credentials"})
    } else {
        res.status(200).json({sucess: true, data: getUser})
    }
  } catch (err){
    res.status(500).json({success: false, message: err.message})
  }
});

router.post("/", async (req, res) => {
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
        //     firstname: true,
        //     lastname: true,
        //     emailAddress: true,
        //     userImg: true
        //   }
        });
        res.status(201).json({ success: true, data: user });
        } catch (err){
            res.status(500).json({ success: false, message: err.message});
        }
});

router.patch("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    console.log(req.params.id)
    const { firstname, lastname, emailAddress, password, userImg } = req.body;
    let updatedUser;
    if(firstname){
        updatedUser = await prisma.users.update({
            where: {userId: id},
            data: {firstname}
        })
    }
    if(lastname){
        updatedUser = await prisma.users.update({
            where: {userId: id},
            data: {lastname}
        })
    }
    if(email){
        updatedUser = await prisma.users.update({
            where: {userId: id},
            data: {emailAddress}
        })
    }
    if(password){
        updatedUser = await prisma.users.update({
            where: {userId: id},
            data: {password}
        })
    }
    if(userImg){
        updatedUser = await prisma.users.update({
            where: {userId: id},
            data: {userImg}
        })
    }
    console.log(req.params.userId)
    res.status(200).json(updatedUser)
  } catch (err){
    res.status(500).json({success: false, message: err.message})
  }
});

router.delete("/:id", async (req,res) => {
    const id = req.params.id;
    try{
        const deleteUser = await prisma.users.delete({
            where: {userId: id},
            select: {userId: true, firstname: true, lastname: true}
        })
        if(!deleteUser){
            res.status(404).json({message: "Wrong credentials"})
        }
        res.status(200).json({sucess: true, data: deleteUser})
    } catch (err){
        res.status(500).json({success: false, message: err.message})
    }
});

export default router;
