import React, {useState,useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCustomerServicesApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { serviceSuccessContect } from '../contextApi/StatusConext';

function AddServices({customer_id}) {
      const [show, setShow] = useState(false);
      const [serviceData,setServiceData]=useState({
        title:"",description:"",service_charge:""
      })

      const {setServiceSuccessStatus}=useContext(serviceSuccessContect)

      const handleSubmit=async()=>{
        console.log(seviceData)
        const {title, description, service_charge}=serviceData
        if (!title || !description ||!service_charge){
          toast.warning("Enter valid input")
        }
        else{
          const response= await addCustomerServicesApi(customer_id,serviceData)
          if(response.status===201){
            toast.success("Service Added")
            handleClose()
            setServiceSuccessStatus(response)
          }
          else{
            toast.error("Somthing went wrong")
            console.log(response.response.data)
          }
        }
      }

  const handleClose = () =>{ 
    setServiceData({
      title:"",description:"",service_charge:""
    })
    
    setShow(false);}
  const handleShow = () => setShow(true);

  return (
    <>
                <button className='btn btn-success' onClick={handleShow}>Serive +</button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Service Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input type="text" value={serviceData.title} name="" id="" onChange={(e)=>setServiceData({...serviceData,title:e.target.value})} className="form-control mb-3" placeholder='Enter Service Title' />
                <textarea name="" value={serviceData.description} className='form-control mb-3' onChange={(e)=>setServiceData({...serviceData,description:e.target.value})} placeholder='Enter Service Description' id=""></textarea>
                <input type="text"value={serviceData.service_charge} name="" placeholder='Enter Charge' id="" onChange={(e)=>setServiceData({...serviceData,service_charge:e.target.value})} className="form-control" />
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
        
        </>
  )
}

export default AddServices