import React from "react";
import image from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Store from "../Utils/store";

function Header(){

 const cartItem=useSelector((store)=>store.cart.items)
  return (
    <div className="header">
       <div className="logo">
          <img className="logo" src={image} alt="logo" />
       </div>
       <div className="navigation-menus">
          <ul className="navigation-menus">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/offer">Offer</Link></li>
            <li>Help</li>
            <li><Link to="/contact_us">Contact US</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
            <li><Link>Cart {cartItem.length} Items</Link></li>
          </ul>
       </div>
       <div className="login-signup">
          <button className="header-button login-btn">Login</button>
          <button className="header-button signUp-btn">Sign Up</button>
       </div>
    </div>
  )
}

export default Header