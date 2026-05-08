import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { userSignUpApi, userSignInApi } from '../services/allApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../contextApi/StatusContext'

function Auth() {
    const navigate = useNavigate()
    const [authStatus, setAuthStatus] = useState(false)
    const [inputData, setInputData] = useState({
        username: "", password: "", cpassword: "", email: ""
    })

const {setLoginStatus}=useContext(authContext)


    const handleSignUp = async () => {
        const { username, password, cpassword, email } = inputData
        if (!username || !password || !cpassword || !email) {
            toast.warning("Enter Valid input")
        }
        else {
            if (password === cpassword) {
                const response = await userSignUpApi(inputData)
                if (response.status === 201) {
                    toast.error("SignUp SuccessFull")
                    setInputData({ username: "", password: "", cpassword: "", email: "" })
                    setAuthStatus(!authStatus)
                }
                else {
                    console.log(response)
                    toast.error("somthing went wrong")
                }
            }
            else {
                toast.warning("password missmatches")
            }
        }
    }

    // const handleSignIn = async () => {
    //     const { username, password } = inputData
    //     if (!username || !password) {
    //         toast.error("Enter value!!")
    //     }
    //     else {
    //         if (respnse.status == 200) {
    //             toast.success("Login Success")
    //             sessionStorage.setItem("token", respnse.data.token)
    //             sessionStorage.setItem("uname", username)
    //             navigate("/customers")
    //         }
    //     }
    // }


    const handleSignIn = async () => {
        console.log(inputData)
        const { username, password } = inputData
        if (!username || !password) {
            toast.warning("Enter valid Inputs")
        }
        else {
            const response = await userSignInApi(inputData)
            console.log(response)
            if (response.status === 200) {
                toast.success("sign in successfull")
                sessionStorage.setItem('token', response.data.token)
                sessionStorage.setItem('uname', username)
                setLoginStatus(true)
                navigate('/customers')
            }
            else {
                console.log(response)
                toast.error("something went wrong")
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
                        <input type="text" placeholder='Enter Username' value={inputData.username} onChange={(e) => { setInputData({ ...inputData, username: e.target.value }) }} className='form-control mb-3' />
                        {
                            authStatus &&

                            <input type="text" placeholder='Enter Email' value={inputData.email} onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} className=' form-control mb-3' />
                        }
                        <input type="password" placeholder='Enter Password' value={inputData.password} onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} className='form-control mb-3' />
                        {
                            authStatus &&
                            <input type="password" placeholder='Re-Enter Password' value={inputData.cpassword} onChange={(e) => { setInputData({ ...inputData, cpassword: e.target.value }) }} className='form-control mb-3' />
                        }
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className="btn btn-success" onClick={authStatus?handleSignUp:handleSignIn}>Submit</button>
                        <button className="btn btn-link text-light" onClick={() => setAuthStatus(!authStatus)}>
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