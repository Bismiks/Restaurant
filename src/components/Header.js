import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
// import {NavLink} from 'react-router-dom'
function Header() {
  return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href ="#Home">Restaurant</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>  
      <Nav.Link href="/Footer">Contact Us</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>

  )
}

export default Header