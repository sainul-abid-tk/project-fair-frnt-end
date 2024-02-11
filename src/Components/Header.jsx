import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthenticationContext } from '../ContextAPI/TokenAuth';
function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthenticationContext)
  const navigate=useNavigate()
  const handleLogOut=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("user")
    setIsAuthorized(false)
    navigate('/')
  }
  return (
    
    <>
    <Navbar className="bg-success">
        <Container >

          
          <Navbar.Brand className='text-white fw-bolder fs-4'>
          <Link to={'/'} className=' text-decoration-none overflow-hidden text-white'>
          <i class="fa-brands fa-stack-overflow fa-bounce overflow-hidden "></i>&nbsp;
            Project Fair
            </Link>
            </Navbar.Brand>
            {
              insideDashboard&&
              <div className='text-black ms-auto'>
                  <button onClick={handleLogOut} className='btn btn-light text-danger text-decoration-none fw-bolder '>Log-out <i class="fa-solid fa-right-from-bracket"></i></button>
              </div>
            }
        </Container>
      </Navbar>
    </>
  )
}

export default Header