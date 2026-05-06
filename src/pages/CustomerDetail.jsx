import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddServices from '../components/AddServices'
import ServiceList from '../components/ServiceList'




function CustomerDetail() {
  return (
    <>
      <Header />
      <div className="container-fluid p-3" style={{ minHeight: "70vh" }}>
        <h2 className="display-4">Customer Service Details</h2>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/BMW_G60_520i_1X7A2443.jpg" alt="vehicle" height={'250px'} className='img-fluid' />
            <table className='table'>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <td>Hari</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>9875632102</td>
                </tr>
                <tr>
                  <th>Vehicle reg no.</th>
                  <td>KL58J1234</td>
                </tr>
                <tr>
                  <th>Hechicle Medel Name</th>
                  <td>Audi Q5</td>
                </tr>
                <tr>
                  <th>Vehicle Model Year</th>
                  <td>2020</td>
                </tr>
              </thead>
            </table>
          </div>
          {/* sercice details  */}
          <div className="col">
            <h5 className="my-3 text-center">Service History</h5>

            <AddServices />
            <ServiceList />

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CustomerDetail