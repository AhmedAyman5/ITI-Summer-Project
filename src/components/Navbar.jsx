import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
            <FontAwesomeIcon icon={faShopify} className="text-primary fs-4 me-2" />
            <b className="logo-text">𝕊𝕙𝕠𝕡𝔼𝕒𝕤𝕪</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-evenly align-items-center">
            <li className="nav-item me-5">
              <NavLink className="nav-link" to="/">
               <b> Home</b>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link" to="/About">
                <b>About</b>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link" to="/products">
                <b>Products</b>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link" to="/login">
                <i className="bi bi-person text-primary me-2 fs-5"></i> <b>Sign Up / Sign In</b>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link position-relative " to="/cart">
                <i className="bi bi-cart3 text-primary fs-4"></i>
                <span className="badge text-dark rounded-pill start-100 translate-middle">
                  {cartCount}
                </span>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
