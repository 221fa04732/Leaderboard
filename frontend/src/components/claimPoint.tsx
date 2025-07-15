import axios from "axios"
import { useratom } from "../atoms/useratom"
import { useRecoilState } from "recoil"
import { BACKEND_URL } from "../../config"
import { useState } from "react"

export default function ClaimPoint({id} : {id :string}){
    const [refresh, setRefresh]=useRecoilState(useratom)
    const [loading, setLoading]=useState<boolean>(false)
    const collectPoint = async()=>{
        try{
            await axios.post(`${BACKEND_URL}/api/v1/claim/register`, {
                id : id
            })
        }
        catch(error){
            console.log(error)
        }
        finally{
            setRefresh(!refresh)
            setLoading(false)
        }
    }
    return(<button onClick={()=> {
        setLoading(true)
        collectPoint()
        }} className={`px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}>
          Claim points
    </button>)
}