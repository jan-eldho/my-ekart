import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ width: "100%", height: "300px" }}
        className="d-flex justify-content-center align-items-center flex-column bg-primary text-white mt-5"
      >
        <div
          className="d-flex justify-content-evenly align-items-center mb-5"
          style={{ width: "100%" }}
        >
          <div style={{ width: "400px" }}>
            <h4>
              <i
                style={{ color: "white", fontSize: "25px", fontWeight: "700" }}
                class="fa-solid fa-cart-shopping fa-bounce me-3"
              ></i>
              ekart
            </h4>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              dolorem eius harum eaque placeat, numquam optio adipisci delectus
              odio eligendi dicta quo illum obcaecati ducimus error quae nulla
              reprehenderit nisi.
            </h6>
          </div>
          <div className="d-flex flex-column">
            <h4>Quick Links</h4>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h6>Home</h6>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <h6>Cart</h6>
            </Link>
            <Link
              to="/whishlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h6>Whishlist</h6>
            </Link>
          </div>
          <div className="d-flex flex-column">
            <h4>Guides</h4>
            <Link to="https://react-bootstrap.netlify.app/docs/components/badge/" target="_blank" style={{ textDecoration: "none", color: "white" }}>React</Link>
            <Link to="https://react-bootstrap.netlify.app/docs/components/badge/" style={{ textDecoration: "none", color: "white" }} target="_blank">React Bootstrap</Link>
            <Link to="https://react-bootstrap.netlify.app/docs/components/badge/" style={{ textDecoration: "none", color: "white" }} target="_blank">Bootswatch</Link>

          </div>
          <div>
            <h4>Contact</h4>
            <div className="d-flex">
              <input type="text" className="form-control" placeholder="Enter email id"/>
              <button className="ms-2 btn btn-warning">Subscribe</button>

            </div>
            <div className="d-flex mt-3 justify-content-evenly">
              <Link to={''} style={{ textDecoration: "none", color: "white" }} target="_blank"><i class="fa-brands fa-facebook-f fa-2x"></i></Link>
              <Link to={''} style={{ textDecoration: "none", color: "white" }} target="_blank"><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link to={''} style={{ textDecoration: "none", color: "white" }} target="_blank"> <i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link to={''} style={{ textDecoration: "none", color: "white" }} target="_blank"><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
              
            </div>
          </div>

        </div>
        <p style={{ color: 'white' }}>Copyright &#169; {new Date().getFullYear()} e-kart built with React Redux</p>

      </div>
    </>
  );
}

export default Footer;
