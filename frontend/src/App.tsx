import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import('./pages/Home'))
const UserPage = lazy(() => import('./pages/User'))
const HistoryPage = lazy(() => import('./pages/History'))
import Header from "./components/header"
import Footer from "./components/footers"

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col">
      <Header/>
      <main className="flex-grow pt-16 pb-12">
        <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App