import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext'; // Importing ShopContext for state management
import './ProductList.css'; // Importing styles
import { Link } from 'react-router-dom'; // Import Link for navigation
import {motion} from "framer-motion";

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext); // Accessing products from context

  return (
    <>
      {/* Product List Section */} 
      <motion.div 
      initial={{ opacity: 0, y: -100 }} // Start with 0 opacity and move up by 30px
      animate={{ opacity: 1, y: 0 }} // End with full opacity and no translation
      transition={{ duration: 1, ease: 'easeOut' }} // Animation 
       
      className="product_list" id="products">
        <h2>Our Classic Collections for Your Lasting Style</h2>
        <div className="product_grid">
          {/* Rendering each product */}
          {products.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div className="product_card" key={id}>
                {/* Use Link for navigation to product details */}
                <Link to={`/product/${product.id}`}>
                  {/* Product Image */}
                  <img src={image} className='product-img' alt="cloths" />
                  {/* Product Info */}
                  <div className="product_info">
                    <h4>{title}</h4>
                    <p>&#8377;{price}</p>
                  </div>
                </Link>
                {/* Add to Cart Button placed outside of Link */}
                <button onClick={() => addToCart(product, id)} className='add-to-cart'>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default ProductList;
