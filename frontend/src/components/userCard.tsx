export function UserCard({ user }: any) {
    return (<div className="w-full bg-gray-900 rounded-xl p-4 mb-3 border border-gray-800 hover:border-gray-700 transition-all group">
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${user.rank=== 1 ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30' : user.rank === 2 ? 'bg-gray-400/10 text-gray-300 border border-gray-400/30' : user.rank === 3 ? 'bg-amber-600/10 text-amber-400 border border-amber-600/30' :'bg-gray-800/50 text-gray-500 border border-gray-700'}`}>
                    <span className="font-medium text-sm">#{user.rank}</span>
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <h3 className="font-medium text-white truncate">{user.name}</h3>
                        {user.point > 0 && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-green-900/30 text-green-400">
                                Active
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-gray-400 truncate">
                        Joined: {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className={`
        px-3 py-1 rounded-md text-sm font-medium
        ${user.point > 0 ? 'bg-green-900/20 text-green-400' : 'bg-gray-800 text-gray-500'}`}>
                    {user.point} pts
                </div>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors">
                    Claim points
                </button>
            </div>
        </div>
    </div>
)}