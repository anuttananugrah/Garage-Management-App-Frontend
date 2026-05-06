import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddServices() {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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
                <input type="text" name="" id="" className="form-control mb-3" placeholder='Enter Service Title' />
                <textarea name="" className='form-control mb-3' placeholder='Enter Service Description' id=""></textarea>
                <input type="text" name="" placeholder='Enter Charge' id="" className="form-control" />
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
        
        </>
  )
}

export default AddServices