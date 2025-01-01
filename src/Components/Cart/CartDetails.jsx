import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { FiTrash } from 'react-icons/fi';
import { IoMdRemove, IoMdAdd } from 'react-icons/io'; 

import "./Cart.css";

// CartDetails component displays individual cart item details, including controls to adjust quantity or remove the item
const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);

  // Handles case where the item might not exist
  if (!item) {
    return null; // Prevent rendering if item is missing
  }

  const { id, title, image, price, amount } = item;

  return (
    <div className="cart_item"> 
      {/* Product details section: Displays the product image and title */}
      <div className="product_details">
        <img src={image} alt={title} /> 
        <div className="product_info">
          <h3>{title}</h3>
          {/* Remove button functionality */}
          <div onClick={() => removeFromCart(id)} className="cart_item_remove">
            <button><FiTrash /> Remove</button> 
          </div>
        </div>
      </div>

      {/* Quantity control section */}
      <div className="quantity">
        <button onClick={() => decreaseAmount(id)}>
          <IoMdRemove />
        </button>
        <span>{amount}</span>
        <button onClick={() => increaseAmount(id)}>
          <IoMdAdd />
        </button>
      </div>

      {/* Price per item */}
      <div className="price">&#8377;{price}</div>
      
      {/* Total price for the specific item */}
      <div className="total">&#8377;{parseFloat(price * amount).toFixed(2)}</div>
    </div>
  );
};

export default CartDetails;
