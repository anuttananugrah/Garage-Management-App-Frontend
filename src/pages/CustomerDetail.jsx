import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddServices from '../components/AddServices'
import ServiceList from '../components/ServiceList'
import { useParams } from 'react-router-dom'
import { getCustomersByIdApi } from '../services/allApi'




function CustomerDetail() {
  const [customer,setCustomer]=useState({})

const{cid}=useParams()
console.log(cid)

useEffect(()=>{
  getCustomer()
},[])

const getCustomer=async()=>{
  const response =await getCustomersByIdApi(cid)
  if (response.status===200){
    setCustomer(response.data)
  }
}


  return (
    <>
      <Header />
      <div className="container-fluid p-3" style={{ minHeight: "70vh" }}>
        <h2 className="display-4">Customer Service Details</h2>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={customer?.vehicle_image} alt="vehicle" height={'250px'} className='img-fluid' />
            <table className='table'>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <td>{customer?.name}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{customer?.phone}</td>
                </tr>
                <tr>
                  <th>Vehicle reg no.</th>
                  <td>{customer?.vehicle_reg_no}</td>
                </tr>
                <tr>
                  <th>Hechicle Medel Name</th>
                  <td>{customer?.vehicle_model_name}</td>
                </tr>
                <tr>
                  <th>Vehicle Model Year</th>
                  <td>{customer?.vehicle_year}</td>
                </tr>
              </thead>
            </table>
          </div>
          {/* sercice details  */}
          <div className="col">
            <h5 className="my-3 text-center">Service History</h5>

            <AddServices customer_id={cid}/>
            <ServiceList customer_id={cid}/>

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CustomerDetail