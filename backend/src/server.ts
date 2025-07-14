import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './handler/user'
import claimRouter from './handler/claim'

const app=express();
app.use(cors())
app.use(express.json());
dotenv.config()

app.use('/api/v1/user', userRouter)
app.use('/api/v1/claim', claimRouter)

app.listen(process.env.PORT, ()=>{
    console.log('server is listinng')
})