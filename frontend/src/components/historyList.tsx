import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from '../../config'
import PaginationBtn from "./paginationBtn"
import Error from "./error"
import Loader from "./loader"
import { HistoryCard } from "./historyCard"

interface HistoryItem {
  id: string;
  claimPoint: number;
  createdAt: string;
  userId: string;
  user: {
    id: string;
    name: string;
    point: number;
    createdAt: string;
  };
}
interface HistoryData {
  history: HistoryItem[];
  isPrevious: boolean;
  isNext: boolean;
}

export default function HistoryList(){
    const [loading, setLoading]=useState<boolean>(true)
    const [err, setErr]=useState<boolean>(false)
    const [page, setPage]=useState<number>(0)
    const [data, setData]=useState<HistoryData>()

    useEffect(()=>{
        const fetchUser = async()=>{
            setLoading(true)
            try{
                const response = await axios.get(`${BACKEND_URL}/api/v1/claim/history?page=${page}`)
                if(response){
                    setData(response.data)
                }
            }
            catch(error){
                setErr(true)
            }
            finally{
                setLoading(false)
            }
        }

        fetchUser();
    },[page])

    if(err){
        return(<Error />)
    }

    return(<div className="w-10/12 min-h-screen flex flex-col justify-start items-center bg-gray-950 text-white    pt-6">
        {loading ? <Loader /> : 
            data?.history.map((item)=>(
                <HistoryCard key={item.id} historyItem={item} />
            ))
        }
        <div className="flex gap-4 mt-6">
          <PaginationBtn onClick={()=> setPage(page-1)} name={"Previous"} enable={data?.isPrevious || false}/>
          <PaginationBtn onClick={()=> setPage(page+1)} name={"Next"} enable={data?.isNext || false} />
      </div>
    </div>
)}