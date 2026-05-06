import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Auth() {
  const [authStatus, setAuthStaus] = useState(false)
  return (
    <div className='container-fluid bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className="w-50 border shadow p-3 bg-secondary text-light">
        {
          setAuthStaus ?
            <h3 className="text-center">
              User SignUp
            </h3>
            :
            <h3 className="text-center">
              User SignIn
            </h3>

        }
        <div className="my2">
          <input type="text" placeholder='Username' className="form-control mb-3" />
          {
            setAuthStaus&&
            <input type="text" placeholder='Email' className="form-control mb-3" />
            
          }
          <input type="password" placeholder='Password' className="form-control mb-3" />
          {
            setAuthStaus&&

          <input type="password" placeholder='Confirm Password' className="form-control mb-3" />
          }
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success">Submit</button>
          {
            setAuthStaus?
            <button className="btn btn-link text-light" onClick={()=>setAuthStaus(!authStatus)}>Are you already a User</button>
            :
          <button className="btn btn-link text-light">Create Account</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Auth