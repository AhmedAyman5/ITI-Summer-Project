import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaRegUser, FaShopify } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-fixed w-100 z-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaShopify className="text-primary fs-4 me-2" />
          <b className="logo-text">𝕊𝕙𝕠𝕡𝔼𝕒𝕤𝕪</b>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
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
              <NavLink className="nav-link" to="/products">
                <b>Products</b>
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link" to="/login">
                <FaRegUser className="color-primary" /> <b>Sign Up / Sign In</b>
              </NavLink>
            </li>
            <li className="nav-item ">
              <Link className="position-relative " to="/cart">
                <IoCartOutline className="color-primary" size={25} />
                <span className="badge text-dark rounded-pill start-100 translate-middle">
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
