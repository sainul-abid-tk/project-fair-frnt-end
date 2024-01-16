import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header({insideDashboard}) {
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
                  <button className='btn btn-link text-danger text-decoration-none fw-bolder fs-6'>Log-out <i class="fa-solid fa-right-from-bracket"></i></button>
              </div>
            }
        </Container>
      </Navbar>
    </>
  )
}

export default Header