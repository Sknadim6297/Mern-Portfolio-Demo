import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import AdminLogin from "./pages/Admin/AdminLogin";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashBoard/>} />
        <Route path="/login" element={<AdminLogin/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}