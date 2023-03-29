import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useAuth from '../context/Useauth';
export default function Header() {
  const {user,signout} = useAuth()

  return (
    <div>
 <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to='/'>All News</Link>
           <Link to='/login' className='mx-2 text-danger'>login now</Link>
           <Link to='/register' className='text-danger'>register</Link>
         
          </Nav>
           
          {
            user?.uid && <>
             <p>{user?.displayName
            }</p>  <button onClick={()=>signout()}>Sign Out</button>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
