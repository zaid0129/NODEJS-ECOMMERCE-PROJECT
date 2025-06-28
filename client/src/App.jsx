import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import AdminLogin from "./Admin/AdminLogin"
import AdminDash from "./Admin/AdminDash"
  
function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>

         <Routes>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admindash" element={<AdminDash />} >
          </Route>
        </Routes>

   </>
  )
}

export default App
