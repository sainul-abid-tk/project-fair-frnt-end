import React from 'react'
import Header from '../Components/Header'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
function Dashboard() {
  return (
    <>
    <Header insideDashboard/>
    <div style={{ marginTop: '60px' }} className="dashboard container">
        <h1 className='fw-bolder'>Welcome <span className='text-warning'>User</span> </h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <MyProjects />
          </div>
          <div className="col-lg-4">
            <Profile />
         </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard