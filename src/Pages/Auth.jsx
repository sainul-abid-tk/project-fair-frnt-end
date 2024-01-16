import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Auth({insideRegister}) {
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'}><i class="fa-solid fa-arrow-left"></i> Back to Home</Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/application-login-4438907-3726717.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
              <h1 className='fw-bolder text-white mt-2' ><i class="fa-brands fa-stack-overflow fa-bounce overflow-hidden "></i>Project Fair</h1>
              <h4 className='fw-bolder mt-2 pb-3 text-white'>
                {insideRegister?'Sign up to your Account':'Sign In to your Account'}
              </h4>
              <Form className='w-75'>
              {
              insideRegister&&<Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>
              }

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {
                insideRegister?
                <div>
                  <button className='btn btn-info mb-2'>Register</button>
                  <p>Already have an account? Click here to <Link className='text-warning fw-bolder' to={'/login'}>Login</Link></p>
                </div>:
                <div>
                  <button className='btn btn-info mb-2'>Login</button>
                  <p>New User? Click here to <Link className='text-warning fw-bolder' to={'/register'}>Register</Link></p>
                </div>
              }
              </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth