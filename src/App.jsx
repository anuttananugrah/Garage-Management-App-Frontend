import Landing from "./pages/Landing"
import CustomerDetail from "./pages/CustomerDetail"
import Customers from "./pages/Customers"
import Auth from "./pages/Auth"
import { Routes,Route } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/customers" element={<Customers/>} />
      <Route path="/Customer/:cid" element={<CustomerDetail/>} />
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
