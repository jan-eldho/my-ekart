import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const wishlist = useSelector((state) => state.whishlistReducer.items);
  const cartlist=useSelector((state)=>state.cartSliceReducer.items);
  console.log("cartlist: ",cartlist);

  console.log("whishlist: ",wishlist);
  return (
   <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
      <i style={{color:'white',fontSize:'25px',fontWeight:'700'}} class="fa-solid fa-cart-shopping fa-bounce me-3"></i>
        <Navbar.Brand href="/" style={{color:'white',fontSize:'25px',fontWeight:'700'}}>ekart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/cart'} style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Cart <Badge className='ms-1' bg="secondary">{cartlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/whishlist'} style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Whish List <Badge className='ms-1' bg="secondary">{wishlist?.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header