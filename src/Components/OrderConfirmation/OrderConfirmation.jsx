import React from 'react';
import  "./OrderConfirmation.css"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  return (
    <Link to={"/order-confirmation"}>
    <motion.div 
     initial={{ opacity: 0, y: -50 }} // Start with 0 opacity and move up by 30px
     animate={{ opacity: 1, y: 0 }} // End with full opacity and no translation
     transition={{ duration: 0.8, ease: 'easeOut' }} // Animation duration and easing
    
    className="order_confirmation">
      <h1>Thank you for your order!</h1>
      <p>Your order is being processed and will be shipped soon.</p>
      <p className='end_message'>You will get the required details on mail</p>
      <h2>ClothsKart: Redefining Classic Fashion for Men and Women</h2>
    </motion.div>
    </Link>
  );
};

export default OrderConfirmation;
