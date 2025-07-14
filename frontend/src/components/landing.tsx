import { Link } from "react-router-dom"

export default function Landing() {
    return (<div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="/landing.png" className="w-full rounded-lg shadow-xl"/>
            </div>
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold text-white">Collect→ Compete→ Win</h1>
                <p className="text-base text-gray-500">Earn coins, climb the leaderboard, and showcase your skills in our interactive challenge platform.</p>
                <div className="space-y-4">
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-gray-500">Real-time tracking of your coin collection progress</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-gray-500">Dynamic leaderboard to compete with others</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-gray-500">Simple, fun, and addictive gameplay</p>
                    </div>
                </div>
                <Link to={'/user'} className="mt-6 px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">Join Now
                </Link>
            </div>
        </div>
    </div>
)}