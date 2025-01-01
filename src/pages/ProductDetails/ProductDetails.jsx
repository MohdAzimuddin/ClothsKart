import React, { useContext } from 'react';
import './ProductDetails.css';

// Importing route parameters to get the product ID
import { useParams } from 'react-router-dom';

// Importing the product data
import { productsData } from '../../data';

// Importing context to manage cart functionality
import { ShopContext } from '../../Components/ShopContext/ShopContext';

import {motion} from "framer-motion";



// The ProductDetails component displays detailed information about a specific product
const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);

  // Retrieve the product ID from the URL parameters
  const { id } = useParams();

  // Find the product in the product data based on the ID
  const product = productsData.find(product => {
    return product.id === parseInt(id);
  });

  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }} // Start with 0 opacity and move up by 30px
    animate={{ opacity: 1, y: 0 }} // End with full opacity and no translation
    transition={{ duration: 1, ease: 'easeOut' }} // Animation 
    >
      {/* Product details section */}
      <div className="product_details_info">
        {/* Left section: Displays the product image */}
        <div className="detail_left">
          <img src={product.image} alt="" />
        </div>
        {/* Right section: Displays the product details, price, description, and add-to-cart button */}
        <div className="details_right">
          <h3>{product.title}</h3>
          <p className='product_price'>&#8377;{product.price}</p>
          <p className='desc'>{product.description}</p>
          <button onClick={() => addToCart(product, id)}>ADD TO CART</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
