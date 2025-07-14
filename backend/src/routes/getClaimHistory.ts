import { Request, Response } from "express"
import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient()

const getClaimHistory = async(req : Request, res : Response)=>{
    const page= Number(req.query.page)
    const limit=10;
    const skip=page*limit;
    try{
        const history =await prisma.history.findMany({
            orderBy : {
                createdAt : "desc"
            },
            skip : skip,
            take : limit,
            include : {
                user : true
            }
        })
        const totalHistory= await prisma.history.count()
        res.status(201).json({
            history : history,
            isPrevious : page > 0,
            isNext : totalHistory > (page+1)*limit
        })
    }
    catch(e){
        res.status(500).json({
            msg : "Server Error!"
        })
    }
}

export default getClaimHistory;