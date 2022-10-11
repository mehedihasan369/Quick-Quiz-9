import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




const MyNavbar = () => {
    return (
        <div className='shadow p-3 mb-3 '>
        <Navbar bg="light" expand="lg" >
      <Container>
        <Link to="home" className='fw-bold text-decoration-none text-dark fs-3'>Quick Quiz</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-semibold">
          <Link to='/home' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Home</Link>
          <Link to='/blog' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Blog</Link>
          <Link to='/statistics' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Statistics</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    );
};

export default MyNavbar;