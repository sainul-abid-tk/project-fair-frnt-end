import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { getAllProjectAPI } from '../Services/allAPIs'
function Projects() {
  const [searchKey,setSearchKey]=useState("")
  const [allProjects,setAllProjects]=useState([])

  const getAllProject=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result=await getAllProjectAPI(searchKey,reqHeader)
    if(result.status===200){
      setAllProjects(result.data)
    }
    else{
      console.log(result);
    }
    }
  }
  console.log(allProjects);

  useEffect(()=>{
    getAllProject()
  },[searchKey])
  
  return (
    <>
    <Header/>
    <div style={{marginTop:'100px',minHeight:'100vh'}} className='project-page-design container-fluid'>
    <div className="d-flex justify-content-between ">
      <h1>All Projects</h1>
      <input style={{width:'300px'}} onChange={e=>setSearchKey(e.target.value)} className='rounded ps-1' type="text" placeholder='Search Projects By Language Used'/>
    </div>
    <Row className='mt-2'>
      {
        allProjects.length>0?allProjects.map((project,index)=>(
          <Col key={index} sm={12} md={6} lg={4}>
      <ProjectCard project={project}/>
      </Col>
        )):
        <div style={{height:'500px'}} className='d-flex justify-content-center align-items-center'>
          <h3 className='text-danger fw-bold text-center'>Nothing to Display!!</h3>
        </div>
      }
    </Row>
    </div>
    </>
  )
}

export default Projects