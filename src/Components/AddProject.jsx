
import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import uploadImage from '../assets/images/uploadimage.png'
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    <button onClick={handleShow} className='btn btn-success d-flex align-items-center '><i className='fa-solid fa-plus'></i>Add projects</button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <label className="text-center">
              <input style={{ display: "none" }} type="file" />
              <img
                className='w-100'
                src={uploadImage}
                alt="upload image"
              />
            </label>
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Title'/>
              </div>
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='language Used'/>
              </div>
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Github Link'/>
              </div>
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Website Link'/>
              </div>
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Project Overview'/>
              </div>
            </div>
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

export default AddProject