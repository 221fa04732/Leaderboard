import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/Debounce"
import axios from "axios"
import { BACKEND_URL } from '../../config'
import PaginationBtn from "./paginationBtn"
import Error from "./error"
import Loader from "./loader"
import { UserCard } from "./userCard"
import { useratom } from "../atoms/useratom"
import { useRecoilValue } from "recoil"
import AddUserBtn from "./addUserBtn"

export interface dataType {
    user : userType [],
    isPrevious : boolean;
    isNext : boolean
}
export interface userType {
    id: string;
    rank : number;
    name: string;
    point: number;
    createdAt: Date;
}

export default function UserList(){

    const [word, setWord] = useState<string>('')
    const searchWord : string= useDebounce(word)
    const [loading, setLoading]=useState<boolean>(true)
    const [err, setErr]=useState<boolean>(false)
    const [page, setPage]=useState<number>(0)
    const [data, setData]=useState<dataType>()
    const refresh : boolean=useRecoilValue(useratom)

    useEffect(()=>{
        const fetchUser = async()=>{
            setLoading(true)
            try{
                const response = await axios.get(`${BACKEND_URL}/api/v1/user/get?page=${page}&search=${searchWord}`)
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
    },[searchWord, page, refresh])

    if(err){
        return(<Error />)
    }

    return(<div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white    ">
        <div className='fixed top-20 z-40 w-10/12 grid grid-cols-1 md:grid-cols-3 place-items-center md:place-items-end gap-2 p-1 backdrop-blur-sm bg-white/10 border border-gray-600/30 rounded-lg'>
            <input value={word} onChange={(e) => setWord(e.target.value)} placeholder='Search product' className='w-full bg-white/20 text-white placeholder:text-gray-300 md:col-span-2 focus:bg-white/30 focus:ring-2 focus:ring-blue-400/50 border-transparent py-1 rounded-sm px-2'/>
            <AddUserBtn />
        </div>
        <div className="w-10/12 min-h-screen flex flex-col justify-start items-center bg-gray-950 text-white md:pt-20 pt-28">
            {loading ? <Loader /> : 
                data?.user.map((item)=>(
                    <UserCard key={item.id} user={item} />
                ))
            }
        </div>
        <div className="flex gap-4 mt-6">
          <PaginationBtn onClick={()=> setPage(page-1)} name={"Previous"} enable={data?.isPrevious || false}/>
          <PaginationBtn onClick={()=> setPage(page+1)} name={"Next"} enable={data?.isNext || false} />
      </div>
    </div>
)}