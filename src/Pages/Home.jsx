import React from 'react'
import developer from '../assets/images/Developer.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  const navigate=useNavigate()
  const handleProjectPage=()=>{
    navigate('/projects')
  }

  return (
    <>
    {/* Landing Page */}
    <div className='bg-success  rounded ' style={{width:'100%',height:'100vh'}}>
    <div style={{height:'100%'}} className='container'>
      <div style={{height:'100%'}} className='row container align-items-center'>
      <div className="col-lg-6 ">
        <h1 className='fw-bolder text-white pt-5' style={{fontSize:'80px'}}><i class="fa-brands fa-stack-overflow fa-bounce overflow-hidden "></i>Project Fair</h1>
        <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem, amet laboriosam aliquid recusandae autem ipsa dignissimos tenetur commodi est adipisci, perferendis labore impedit a quod incidunt minima quo sapiente!!!</p>
        <Link className='btn btn-warning fs-5 d-flex align-items-center' style={{width:'200px'}} to={'/login'}>Starts to Explore <i class="fa-solid fa-arrow-right ms-1 "></i></Link>
      </div>
      <div className="col-lg-2"/>
      <div className="col-lg-4  ">
        <img  src={developer} alt="" />
      </div>
      </div>
      </div>
    </div>
    {/* All projects */}
    <div className='projects accordion mt-5'>
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
      <marquee>
        <div className='d-flex justify-content-between'>
          <div className='me-5'>
            <ProjectCard/>
          </div>
        </div>
      </marquee>
      <div className='text-center'>
        <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
      </div>
    </div>
    </>
  )
}

export default Home