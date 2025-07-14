import { Request, Response } from "express"
import userSchema from "../validate/userSchema";
import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient();

const addUser = async(req : Request, res : Response)=>{
    const data = req.body
    try{
        const userValidate = userSchema.safeParse(data)
        if(!userValidate.success){
            res.status(400).json({
                msg : "Invalid Input!"
            })
            return;
        }

        const user =await prisma.user.create({
            data:{
                name : data.name
            }
        })
        res.status(201).json({
            msg : "User Created Sucessfully"
        })
    }
    catch(e){
        res.status(500).json({
            msg : "Server Error!"
        })
    }
}

export default addUser;