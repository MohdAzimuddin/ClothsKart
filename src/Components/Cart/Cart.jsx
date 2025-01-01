import React, { useContext, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import CartDetails from './CartDetails';
import { ShopContext } from '../ShopContext/ShopContext';
import { useNavigate } from 'react-router-dom'; // For navigation after checkout

// The Cart component displays the shopping cart details, allows clearing the cart, and provides a summary
const Cart = () => {
  const { cart, clearCart, total, itemAmount, applyPromoCode, discount } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState(''); // State to hold the promo code entered by the user
  const navigate = useNavigate(); // Initialize navigation hook

  // Handle promo code application
  const handleApplyPromo = () => {
    if (promoCode.trim() === '') {
      alert('Please enter a promo code!');
      return;
    }
    applyPromoCode(promoCode); // Call the context function to validate and apply promo code
    setPromoCode(''); 
  };

  // Handle checkout functionality
  const handleCheckout = () => {
    navigate('/order-confirmation'); // Navigate to order confirmation page
    clearCart(); // Clear the cart after checkout
  };

  // Calculate the discounted total based on the applied promo code
  const discountedTotal = total - total * discount;

  return (
    <>
      <div className="cart_container">
        {/* Left section: Shows cart items and their details */}
        <div className="cart_left">
          {/* Cart header with title, item count, and clear cart button */}
          <div className="cart_header">
            <h1>Shopping Cart</h1>
            <h1>Items: ({itemAmount})</h1>
            <FiTrash2 className="delete_cart" onClick={clearCart} />
          </div>
          {/* Table headers for product details */}
          <div className="cart_header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          {/* Cart details: Maps through the cart items or displays a message if the cart is empty */}
          <div className="cart_detail">
            {cart.length > 0 ? (
              cart.map((item) => <CartDetails item={item} key={item.id} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Right section: Displays cart summary */}
        <div className="cart_right">
          <h2>Cart Summary</h2>
          <div className="cart_summary">
            {/* Summary item: Total items */}
            <div className="summary_item">
              <span>Items</span>
              <span>{itemAmount}</span>
            </div>
            {/* Summary item: Sub-total */}
            <div className="summary_item">
              <span>Sub-Total</span>
              <span>&#8377;{isNaN(total) ? 0 : total.toFixed(2)}</span>
            </div>
            {/* Summary item: Discount */}
            <div className="summary_item">
              <span>Discount</span>
              <span>
                - &#8377;{isNaN(total * discount) ? 0 : (total * discount).toFixed(2)}
              </span>
            </div>
            {/* Total cost after discount */}
            <div className="summary_item_total_cost">
              <span>Total Cost</span>
              <span>&#8377;{isNaN(discountedTotal) ? 0 : discountedTotal.toFixed(2)}</span>
            </div>
            {/* Promo code input */}
            <div className="summary_item input">
              <span>Promo Code</span>
              <input
                type="text"
                value={promoCode}
                placeholder="Enter Your Code"
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="apply_btn" onClick={handleApplyPromo}>
                Apply
              </button>
            </div>
            {/* Checkout button */}
            <button onClick={handleCheckout} className="checkout_btn">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

