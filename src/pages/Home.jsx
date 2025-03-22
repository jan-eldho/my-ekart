import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../redux/whishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
  const response=useFetch('https://fakestoreapi.com/products')
  console.log("all products: ",response);
  const dispatch=useDispatch();
  
  return (
   <>
   <Row className='m-5'>
    {
      response?.length>0 ?
      response.map((products)=>(
        <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.image} height={'200px'} style={{padding:'8px'}}/>
      <Card.Body>
        <Card.Title>{products.title.slice(0,11)}...</Card.Title>
        <Card.Text>
         {products.description.slice(0,50)}...
         <p className='fw-bolder'>price: &#x20B9;{products.price}</p> 
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
        <Button variant="outline-danger" onClick={()=>dispatch(addToWhishlist(products))}><i class="fa-solid fa-heart"></i></Button>
        <Button variant="outline-success" onClick={()=>dispatch(addToCart(products))}><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>
        
      </Card.Body>
    </Card>
    </Col>
      )):
      <div> <h1>no products...</h1></div>
    }
   
   </Row>
   </>
  )
}

export default Home