import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import AddCustomer from '../components/AddCustomer';
import CustomerList from '../components/CustomerList';

function Customers() {

  const [addCustomerStatus,setAddCustomerStatus]=useState("data")

  return (
    <>
      <Header />
      {/* Customer list page */}
      <div className='container-fluid p-2' style={{ minHeight: '81vh' }}>
        <div className='d-flex justify-content-between'>
          <h2 className='dipslay-4'>Customers</h2>

          <AddCustomer setaddStatus={setAddCustomerStatus}/>

        </div>

        {/* customer list */}
        
        <CustomerList addStatus={addCustomerStatus} />

      </div>

      <Footer />
    </>
  )
}

export default Customers