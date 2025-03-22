import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { removeFromWhishlist } from '../redux/whishlistSlice';
import { addToCart } from '../redux/cartSlice';
function Whishlist() {
  const whishListValues=useSelector((state)=>state.whishlistReducer.items)
  console.log("whishlist values: ",whishListValues);
  const dispatch=useDispatch();

  const handleWhishlist=(product)=>{
    dispatch(addToCart(product));
    dispatch(removeFromWhishlist(product.id));
  }
  
  return (
   <>
   <Row className='m-5'>
    <button className='btn btn-success' onClick={()=>window.location.href='/'} style={{marginBottom:'10px'}}><i class="fa-solid fa-arrow-left me-2"></i>
      Back to Home
    </button>
    {
      whishListValues.length>0 ?
      whishListValues.map((product)=>(
        <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
        <div className='shadow p-3'>
          <img src={product.image} alt={product.title} height='200px' width='100%'/>
          <h5>{product.title}</h5>
          <p>{product.description.slice(0,50)}...</p>
          <h6>&#x20B9;{product.price}</h6>
          <div className='d-flex justify-content-between align-items-center'>
        <Button variant="outline-danger" onClick={()=>dispatch(removeFromWhishlist(product.id))}><i class="fa-solid fa-trash"></i></Button>
        <Button variant="outline-success" onClick={()=>handleWhishlist(product)}><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>
        </div>
        </Col>
      )):
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src="data:image/png;base64,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" alt="no products" height='200px' width='200px'/>
        <h1 className='text-danger text-center'>No products in whishlist...</h1></div>
    }

   </Row>
   </>
  )
}

export default Whishlist