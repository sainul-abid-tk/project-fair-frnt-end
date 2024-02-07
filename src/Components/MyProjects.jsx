import React,{useState,useEffect, useContext} from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { getUserProjectAPI } from '../Services/allAPIs'
import { addProjectResponseContext } from '../ContextAPI/ContextShare'
function MyProjects() {
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const [allProjects,setAllProjects]=useState([])
  
  const getUserProject=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result=await getUserProjectAPI(reqHeader)
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
    getUserProject()
  },[addProjectResponse])
  
  return (
    <div className='card shadow p-3'>
      <div className="d-flex justify-content-between">
        <h3>My Projects</h3>
        <div><AddProject/></div>
      </div>
      <div className="mt-4">
      { allProjects.length>0?allProjects.map((project)=>(
        <div className="border rounded d-flex align-items-center justify-content-between  text-primary mb-3 p-2">
          <h5>{project.title}</h5>
          <div className="d-flex icons align-items-center">
            <EditProject  project={project}/>
            <a href={project.github} target='_blank' className='btn '>
            <i style={{height:'34px'}} class="fa-brands fa-github fa-2x overflow-hidden"></i></a>
            <button className='btn'><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
          </div>
        </div>
      
     )):
     <div className='fw-bold text-danger '>
      No Projects are Uploaded yet!!
     </div>
     }
     </div>
    </div>
  )
}

export default MyProjects