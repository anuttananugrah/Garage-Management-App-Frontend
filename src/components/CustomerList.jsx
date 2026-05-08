import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoIosMore } from "react-icons/io";
import { Link } from 'react-router-dom';
import { getCustomers } from '../services/allApi';

function CustomerList(addStatus) {

    const [customerData, setCustomerData] = useState([])

    useEffect(() => {
        getData()
    }, [addStatus])
    const getData = async () => {
        const response = await getCustomers()
        if (response === 200) {
            setCustomerData(response.data)
        }
    }

    return (
        <>
            <div className='container-fluid'>
                {
                    customerData.length > 0 ?
                        <div className='d-flex justify-content-around flex-wrap gap-2 my-5'>
                            {
                                customerData.map(item => {

                                    <Card style={{ width: '18rem' }} className='shadow'>
                                        <Card.Img variant="top" src="https://www.topgear.com/sites/default/files/2024/06/1%20Audi%20R8%20GT%20review.jpg"
                                            width={'300px'} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                <table>
                                                    <tr>
                                                        <th>Phone No : </th>
                                                        <td>{item.phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Vehicle Reg.No : </th>
                                                        <td>{item.vehicle_reg_no}</td>
                                                    </tr>
                                                </table>
                                            </Card.Text>
                                            {/* <Button variant="primary" onClick={'/customer/2'}><IoIosMore /></Button> */}
                                            <div className='d-flex justify-content-center'>
                                                <Link variant="primary" className='btn btn-info' to={`/customer/${item.id}`}><IoIosMore /></Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                })
                            }
                        </div>
                        :
                        <h3 className='text-center text-danger'>No User Available</h3>
                }

            </div>
        </>
    )
}

export default CustomerList