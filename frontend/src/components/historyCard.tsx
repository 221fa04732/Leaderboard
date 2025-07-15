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

export function HistoryCard({ historyItem }: { historyItem: HistoryItem }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 mb-3 border border-gray-800 hover:border-gray-700 transition-colors group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-yellow-500/10 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-yellow-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-white">{historyItem.user.name}</h3>
            </div>
            <p className="text-sm text-gray-400">
              {new Date(historyItem.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-bold text-yellow-400">
              +{historyItem.claimPoint}
            </p>
            <p className="text-xs text-gray-500">Points claimed</p>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Transaction ID:</span>
          <div className="bg-green-800/10 px-2 py-1 rounded text-xs font-mono text-green-300">
            {historyItem.id}
          </div>
        </div>
      </div>
    </div>
  );
}