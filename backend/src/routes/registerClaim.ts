import { Request, Response } from "express"
import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient()

const registerClaim = async(req : Request, res : Response)=>{
    const { id } = req.body
    try{
        const point = Math.floor(Math.random()*10+1);
        const createClaim =await prisma.$transaction([
            prisma.user.update({
                data : {
                    point : {
                        increment : point
                    }
                },
                where : {
                    id : id
                }
            }),
            prisma.history.create({
                data : {
                    userId : id,
                    claimPoint : point
                }
            })
        ])
        res.status(201).json({
            msg : `${point} point added`
        })
    }
    catch(e){
        res.status(500).json({
            msg : "Server Error!"
        })
    }
}

export default registerClaim;