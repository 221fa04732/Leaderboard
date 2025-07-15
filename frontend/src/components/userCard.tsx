import ClaimPoint from "./claimPoint";

export function UserCard({ user }: { user: any }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 mb-3 border border-gray-800 hover:border-gray-700 transition-colors group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            shadow-md ${user.rank === 1 
              ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 font-bold' 
              : user.rank === 2 
                ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900 font-bold'
                : user.rank === 3
                  ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white font-bold'
                  : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>
            <span className="text-sm">#{user.rank}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-white">{user.name}</h3>
            </div>
            <p className="text-sm text-gray-400">
              Joined: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-yellow-400">
            {user.point}
          </p>
          <p className="text-xs text-gray-500">Total points</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">User ID:</span>
          <div className="bg-green-800/10 px-2 py-1 rounded text-xs font-mono text-green-300">
            {user.id}
          </div>
        </div>
        <ClaimPoint id={user.id} />
      </div>
    </div>
  );
}