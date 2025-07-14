import { Request, Response } from "express"
import { userType } from "../types/userType";
import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient();

const getUser = async(req : Request, res : Response)=>{
    const search = (req.query.search || "") as string;
    const page = Number(req.query.page) || 0;
    try{
        const limit=10;
        const skip=page*limit     
        const allUser : userType[] = await prisma.user.findMany({
            orderBy : {
                point : "desc"
            }
        })
        const rankUser : userType[]= allUser.map((user, index)=>({
            ...user,
            rank : index+1
        }))
        const filterUser : userType[]= rankUser.filter(user=>  user.name.toLowerCase().includes(search.toLowerCase())).slice(skip, skip+limit)

        res.status(201).json({
            user : filterUser,
            isPrevious : page > 0,
            isNext : (page+1)*limit < allUser.length
        })
    }
    catch(e){
        res.status(500).json({
            msg : "Server Error!"
        })
    }
}

export default getUser;