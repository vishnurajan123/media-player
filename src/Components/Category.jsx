import React, { useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className='btn btn-dark'>Add new Ctegory</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Enter Category ID"
           
          />

          
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Enter Category name"
           
          />

          
        </Form.Group>
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Category