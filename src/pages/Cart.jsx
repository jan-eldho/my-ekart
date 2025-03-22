import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartList = useSelector((state) => state.cartSliceReducer.items);
  console.log("cartlist: ", cartList);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [totalPrice,setTotalprice]=useState(0);
  const getTotalPrice = () => {
    let total = 0;
    cartList.forEach((product) => {
      total += product.price;
      
    });
    setTotalprice(total);
    return total;
  };
  const handleCart = () => {
    toast.success("Checking out... Please wait");
    dispatch(emptyCart());  // ✅ Clears the cart

    setTimeout(() => {
      console.log("Navigating to home...");
      navigate("/");  // ✅ Try a slight delay to let Redux state update
    }, 1500); 
  };
  useEffect(() => { 
    getTotalPrice();
  }, [cartList]);

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        {cartList.length > 0 ? (
          <div className="row w-100">
            <div className="col-lg-6 mx-auto">
              <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>
              <div className="table-responsive shadow">
                <Table bordered hover className="text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Product Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.title.slice(0, 11)}...</td>
                        <td>
                          <img
                            src={product.image}
                            alt={product.title}
                            height="50px"
                            width="50px"
                            className="rounded shadow-sm"
                          />
                        </td>
                        <td>&#x20B9; {product.price}</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            className="btn-sm"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-lg-4 mx-auto mt-4">
              <div className="shadow p-3">
                <h3 className="text-primary">Cart Summary</h3>
                <h5>Total Number of Products: <span className="text-warning fw-bolder">{cartList?.length}</span></h5>
                <h5>Total Price: <span className="text-warning fw-bolder">&#x20B9; {totalPrice}</span> </h5>
                <button className="btn btn-success rounded w-100" onClick={handleCart}>Checkout</button>

              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-muted">😞 No products in cart...</h2>
            <Button
              variant="success"
              className="mt-3"
              onClick={() => (window.location.href = "/")}
            >
              <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
            </Button>
          </div>
        )}
      </Container>
       <ToastContainer />
    </>
  );
}

export default Cart;
