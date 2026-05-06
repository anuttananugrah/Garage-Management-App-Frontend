import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoIosMore } from "react-icons/io";

function CustomerList() {
    return (
        <>
            <div className='d-flex justify-content-around flex-wrap gap-2 my-5'>

                <Card style={{ width: '18rem' }} className='shadow'>
                    <Card.Img variant="top" src="https://www.topgear.com/sites/default/files/2024/06/1%20Audi%20R8%20GT%20review.jpg"
                        width={'300px'} />
                    <Card.Body>
                        <Card.Title>Customer Name</Card.Title>
                        <Card.Text>
                            <table>
                                <tr>
                                    <th>Phone No : </th>
                                    <td>97595739537</td>
                                </tr>
                                <tr>
                                    <th>Vehicle Reg.No : </th>
                                    <td>KL11BB8888</td>
                                </tr>
                            </table>
                        </Card.Text>
                        <Button variant="primary" onClick={'/customer/2'}><IoIosMore /></Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CustomerList