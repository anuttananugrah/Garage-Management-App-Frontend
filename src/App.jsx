import Landing from "./pages/Landing"
import { useContext } from "react"
import CustomerDetail from "./pages/CustomerDetail"
import Customers from "./pages/Customers"
import Auth from "./pages/Auth"
import { Routes,Route } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import { authContext } from "./contextApi/StatusContext"
function App() {

  const {loginStatus}=useContext(authContext)

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/customers" element={loginStatus?<Customers/>:<Auth/>} />
      <Route path="/Customer/:cid" element={loginStatus?<CustomerDetail/>:<Auth/>} />
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
