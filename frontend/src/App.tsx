import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import('./pages/Home'))
const UserPage = lazy(() => import('./pages/User'))
const HistoryPage = lazy(() => import('./pages/History'))

function App() {
  return (<div className="min-h-screen w-full">
    <Suspense >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Suspense>
  </div>)
}

export default App
