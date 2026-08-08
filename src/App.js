import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Complaint from "./pages/Complaint"
import Dashboard from "./pages/Dashboard"
import FAQ from "./pages/FAQ"
import Feedback from "./pages/Feedback"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Notifications from "./pages/Notifications"
import Register from "./pages/Register"
import StayAware from "./pages/StayAware"
import WaterTest from "./pages/WaterTest"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/StayAware" element={<StayAware />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/Register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/water-test" element={<WaterTest />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </>
  )
}

export default App
