import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
function MyProjects() {
  return (
    <div className='card shadow p-3'>
      <div className="d-flex justify-content-between">
        <h3>My Projects</h3>
        <div><AddProject/></div>
      </div>
      <div className="mt-4">
        <div className="border rounded d-flex align-items-center justify-content-between  text-primary mb-3 p-2">
          <h5>Project Title</h5>
          <div className="d-flex icons align-items-center">
            <EditProject/>
            <a href="" target='_blank' className='btn '>
            <i style={{height:'34px'}} class="fa-brands fa-github fa-2x overflow-hidden"></i></a>
            <button className='btn'><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects