import React, { useState } from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addCustomerApi } from '../services/allApi';


function AddCustomer(setaddStatus) {

    const [show, setShow] = useState(false);
    const [customer, setCustomer] = useState({
        name: "", phone: "", vehicle_reg_no: "", vehicle_model_name: "", vehicle_year: "", vehicle_image: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async() => {
        console.log(customer)
        const { name, phone, vehicle_reg_no, vehicle_model_name, vehicle_year, vehicle_image } = customer
        if (!name || !phone || !vehicle_reg_no || !vehicle_model_name || !vehicle_year || !vehicle_image) {
            toast.warning("Enter valid inputs")
        }
        else {
            const formData = new FormData()
            formData = append('name', name)
            formData = append('phone', phone)
            formData = append('vehicle_reg_no', vehicle_reg_no)
            formData = append('vehicle_model_name', vehicle_model_name)
            formData = append('vehicle_year', vehicle_year)
            formData = append('vehicle_image', vehicle_image)
            const response=await addCustomerApi(formData)
            // console.log(response)
            // console.log(response?.response)

            if (response.status===201){
                toast.success("Customer Added")
                handleClose()
                setaddStatus(response)
            }
            else{
                console.log(response?.response?.data)
                toast.error("error")
            }
        }
    }
    return (
        <>
            <button className='btn btn-outline-success' style={{ fontSize: '20px' }} onClick={handleShow}>
                <MdAssignmentAdd />
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" placeholder='Name' value={customer.name} onChange={(e) => {setCustomer({...customer,name:e.target.value})}} className='form-control mb-3' />
                        <input type="text" placeholder='Phone Number' value={customer.phone} onChange={(e) => {setCustomer({...customer,phone:e.target.value})}} className='form-control mb-3' />
                        <input type="text" placeholder='Vehicle Reg.No' value={customer.vehicle_reg_no} onChange={(e) => {setCustomer({...customer,vehicle_reg_no:e.target.value})}} className='form-control mb-3' />
                        <input type="text" placeholder='Vehicle Model Name' value={customer.vehicle_model_name} onChange={(e) => {setCustomer({...customer,vehicle_model_name:e.target.value})}} className='form-control mb-3' />
                        <input type="text" placeholder='Vehicle Model Year' value={customer.vehicle_year} onChange={(e) => {setCustomer({...customer,vehicle_year:e.target.value})}} className='form-control mb-3' />
                        
                         {/* except value reset here use useRef javascript hook refer that  */}
                        <input type="file" name="" id="" onChange={(e)=>{setCustomer({customer,vehicle_image:e.target.files[0]})}} className='form-control' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCustomer