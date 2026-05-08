import React, { useEffect, useState,useContext } from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { FaCar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa6";
import { authContext } from '../contextApi/StatusContext'

function Header() {
const {setLoginStatus}=useContext(authContext)
    const [username, setUsername] = useState()
    const nav = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setUsername(sessionStorage.getItem('uname'))
        }
    }, [])
    const handleLogout = () => {
        sessionStorage.clear()
        setLoginStatus(false)
        nav('/')
    }
    return (
        <Navbar className='bg-dark'>
            <Container>
                <Navbar.Brand href='/' className='text-light'>
                    <FaCar />
                    {' '} Garage Guru
                </Navbar.Brand>
                {
                    username ?
                    <button className='btn btn-outline-danger' onClick={handleLogout}>
                        <FaPowerOff/>
                        {' '}
                        {'username'}
                    </button>
                    :
                        <Link className='btn btn-outline-light' to={'/auth'}>
                            Login
                        </Link>
                }
            </Container>
        </Navbar>
    )
}

export default Header