import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { userSignUpApi } from '../services/allApi'

function Auth() {
    const [authStatus, setAuthStatus] = useState(false)
    const [inputData,setInputData]= useState({
      username:"",password:"",cpassword:"",email:""
    })
    const handleSignUp = async()=>{
      console.log(inputData)
      const {username,password,cpassword,email}=inputData
      if (!username || !password || !cpassword || !email){
        alert("Enter Valid input")
      }
      else{
        if(password===cpassword){
          const response=await userSignUpApi(inputData)
          if(response.status===201){
            alert("SignUp SuccessFull")
            setInputData({username:"",password:"",cpassword:"",email:""})
            setAuthStatus(!authStatus)
          }
          else{
            console.log(response)
            alert("somthing went wrong")
          }
        }
        else{
          alert("password missmatches")
        }
      }
    }
    return (
        <>
            <div className=' bg-dark  container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                <div className='w-50 border shadow p-4 bg-secondary text-light'>
                    {
                        authStatus ?
                            <h3 className='text-center'>User SignUp</h3>
                            :
                            <h3 className='text-center'>User SignIn</h3>
                    }
                    <div className='my-2'>
                        <input type="text" placeholder='Enter Username' value={inputData.username} onChange={(e)=>{setInputData({...inputData,username:e.target.value})}} className='form-control mb-3' />
                        {
                            authStatus &&
                            
                            <input type="text" placeholder='Enter Email' value={inputData.email}  onChange={(e)=>{setInputData({...inputData,email:e.target.value})}} className='bg-transparent form-control mb-3' />
                        }
                        <input type="password" placeholder='Enter Password' value={inputData.password}  onChange={(e)=>{setInputData({...inputData,password:e.target.value})}} className='form-control mb-3' />
                        {
                            authStatus &&
                            <input type="password" placeholder='Re-Enter Password' value={inputData.cpassword}  onChange={(e)=>{setInputData({...inputData,cpassword:e.target.value})}} className='form-control mb-3' />
                        }
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className="btn btn-success" onClick={handleSignUp}>Submit</button>
                        <button className="btn btn-link text-light" onClick={()=> setAuthStatus(!authStatus)}>
                            {
                                authStatus ?
                                <>
                                    Are you already a user?
                                </>
                                :
                                <>
                                    new user?
                                </>
                            }
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth