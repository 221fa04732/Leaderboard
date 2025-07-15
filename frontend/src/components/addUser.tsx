import { useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../../config";
import { useratom } from "../atoms/useratom";
import { useRecoilState } from "recoil";

export default function AddUser({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [refresh, setRefresh]= useRecoilState(useratom)

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
        await axios.post(`${BACKEND_URL}/api/v1/user/add`,{
            name : name
        })
    }
    catch(error){
        console.error(error)
    }
    finally{
        setRefresh(!refresh)
        onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 top-52">
      <div className="bg-gray-700 rounded-xl p-6 w-full max-w-md border border-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Add New User</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              User Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter user name"
              required
              autoFocus
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}