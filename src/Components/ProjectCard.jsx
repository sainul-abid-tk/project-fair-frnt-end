import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} style={{ width: '28rem' }}>
      <Card.Img className='border border-5  border-white' variant="top" src="https://blogct.creative-tim.com/blog/content/images/wordpress/2021/01/light_blue.png" />
      <Card.Body>
        <Card.Title className='text-center fw-bolder '>Revenue Analytics</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Revenue Analytics</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Row >
            <Col md={6} >
              <img  className='img-fluid'  src="https://blogct.creative-tim.com/blog/content/images/wordpress/2021/01/light_blue.png" alt="" />
            </Col>
            <Col md={6} >
              <h2 className='fw-bolder text-dark'>Revenue Analytics</h2>
              <p>Project Overview:<span style={{textAlign:'justify'}} className='fw-bolder' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe unde cupiditate, cumque inventore adipisci? Maxime, iste illum minus at consequatur natus repellendus voluptates tempora reprehenderit quas maiores autem sapiente.</span></p>
              <p>Language Used:<span className='fw-bolder text-danger'>HTML,CSS,JS</span></p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a href="" target='_blank' className='btn me-1'>
            <i style={{height:'40px'}} class="fa-brands fa-github fa-2x overflow-hidden"></i>
            </a>
            <a href="" target='_blank' className='btn'>
            <i style={{height:'40px'}}  class="fa-solid fa-link fa-2x overflow-hidden "></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard