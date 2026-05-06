import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <Navbar className="bg-dark">
                <Container className='d-flex justify-content-between '>
                    <Navbar.Brand href="/" className='text-light'>
                        <FaCar />
                        {' '}
                        Garage Guru
                    </Navbar.Brand>
                    <Link className='btn btn-outline-light ' to={'/auth'}>
                        Login
                    </Link>
                </Container>
            </Navbar>

        </>
    )
}

export default Header