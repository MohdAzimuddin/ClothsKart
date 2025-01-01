import React, { useContext, useState } from 'react'
import { BiCart, BiMenu, BiX } from 'react-icons/bi' // Icons from react-icons library
import "../Navbar/Navbar.css" // Importing CSS for Navbar styling
import { Link } from 'react-router-dom'
import logo_img from '../../assets/logo.webp' // Importing hero image
import { ShopContext } from '../ShopContext/ShopContext'

// importing NavLink 
import { NavLink } from 'react-router-dom';

// Navbar component responsible for rendering the navigation bar with dynamic features
const Navbar = () => {

  // State to manage the mobile menu toggle
const [isOpen,setOpen]=useState(false)

// Function to toggle the menu's open/close state
const handleMenuOpen=()=>{
  setOpen(!isOpen)
};



  // Accessing the item count in the shopping cart from ShopContext
  const { itemAmount } = useContext(ShopContext)

  return (
    <nav id="/">
      <div className='navbar'>
        {/* Logo Section */}
        <div className='logo'>
          <img src={logo_img} alt="logo" />
          <h2>ClothsKart</h2>
        </div>

        {/* Navigation Links Section */}
        <div className='link'>
        <ul>
          <NavLink to="/"  >
            <li>Home</li>
          </NavLink>
          <NavLink to="/products" >
            <li>Products</li>
          </NavLink>
          <NavLink to="/cart">
            <li>Cart</li>
          </NavLink>
<a href="#contact">
  <li>Contact Us</li>
</a>

          </ul>
        </div>

        {/* Icons Section */}
        <div className='nav_icon_wrapper'>
          <Link to="/cart">
            {/* Cart Icon with dynamic item count */}
            <div className='nav_cart'>
              <BiCart className='nav_icon' />
              <p className='nav_cart_amount'>{itemAmount}</p>
            </div>
          </Link>
        </div>

 

      {/* Mobile Menu Icon (BiMenu & BiX) */}

      {isOpen?(<BiX className='bi-x' onClick={handleMenuOpen}/>):(
        <BiMenu className='bi-menu' onClick={handleMenuOpen}/>
      )}

   {/* Mobile Menu Dropdown */}
      {/* using Short-circuit */}

{isOpen&&(
<div className='mobile'>
  {/* Logo Section */}
  <div className='logo_mobile'>
          <img src={logo_img} alt="logo" />
          <h2>ClothsKart</h2>
        </div>

        {/* Navigation Links Section */}
        <div className='link_mobile'>
        <ul>
          <NavLink to="/"  >
            <li>Home</li>
          </NavLink>
          <NavLink to="/products" >
            <li>Products</li>
          </NavLink>
          <NavLink to="/cart">
            <li>Cart</li>
          </NavLink>
<a href="#contact">
  <li>Contact Us</li>
</a>

          </ul>
        </div>

        {/* Icons Section */}
        <div className='nav_icon_wrapper_mobile'>
          <Link to="/cart">
            {/* Cart Icon with dynamic item count */}
            <div className='nav_cart'>
              <BiCart className='nav_icon' />
              <p className='nav_cart_amount'>{itemAmount}</p>
            </div>
          </Link>
        </div>

</div>
)}

      </div>
    </nav>
  )
}

export default Navbar
