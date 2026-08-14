import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Sidebar from "./components/sidebar_components/Sidebar"
import ActivityPage from "./pages/ActivityPage"
import SettingsPage from "./pages/SettingsPage"

function App() {

  return (
    <>
    <div className="flex min-h-screen dark:bg-darktheme-4 bg-lighttheme-1 text-black dark:text-white font-default">
      <Sidebar />
        <div className="w-full">
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/activity" element={<ActivityPage/>}/>
              <Route path="/settings" element={<SettingsPage/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
