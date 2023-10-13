import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='fs-4' style={{textDecoration:"none",color:"white"}}>
            <i className="fa-solid fa-upload"></i>{' '}
            Media Player
            </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header