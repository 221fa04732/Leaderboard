import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="fixed w-full h-16 bg-gray-950 text-white shadow-md shadow-gray-400 flex justify-center items-center z-50">
      <div className="w-11/12 max-w-6xl h-full flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src="/icon.png" alt="icon" className="h-10"/>
          <span className="pl-3 text-2xl font-bold text-indigo-600">RankRush</span>
        </div>
        <nav className="flex gap-2 md:gap-6">
          <Link to="/home" className="hover:text-indigo-600 hover:underline transition-colors duration-200 font-medium">Home</Link>
          <Link to="/user" className="hover:text-indigo-600 hover:underline transition-colors duration-200 font-medium">User</Link>
          <Link to="/history" className="hover:text-indigo-600 hover:underline transition-colors duration-200 font-medium">History</Link>
        </nav>
      </div>
    </header>
  )
}