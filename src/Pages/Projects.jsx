import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
function Projects() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'100px'}} className='project-page-design container-fluid'>
    <div className="d-flex justify-content-between ">
      <h1>All Projects</h1>
      <input style={{width:'300px'}} className='rounded ps-1' type="text" placeholder='Search Projects By Language Used'/>
    </div>
    <Row className='mt-2'>
      <Col sm={12} md={6} lg={4}>
      <ProjectCard/>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Projects