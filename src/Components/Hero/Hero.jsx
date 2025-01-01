import React from 'react'
import hero_img from '../../assets/Hero.webp' // Importing hero image
import './Hero.css' // Importing CSS for the Hero component
import { FaShippingFast } from 'react-icons/fa' // Shipping icon
import { BiSupport } from 'react-icons/bi' // Support icon
import { MdPayment } from 'react-icons/md' // Payment icon
import { motion } from 'framer-motion';
 
const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }} // Start with 0 opacity and move up by 30px
    animate={{ opacity: 1, y: 0 }} // End with full opacity and no translation
    transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
    >
      {/* Hero section container */}
      <section 
      className="hero">
        <div className="hero_top">
          {/* Left section for text content */}
          <div className="hero_left">
            <h2>Elevate Your Wardrobe with <span>ClothesKart</span></h2>
            <h1>Redefining Classic Fashion for Men and Women</h1>
            <p>Shop the latest trends and classic essentials just for you</p>
          </div>
          {/* Right section for hero image */}
          <aside className="hero_right">
            <img src={hero_img} alt="Fashionable clothing displayed in hero image" />
          </aside>
        </div>
        
        {/* Bottom section with features */}
        <div className="hero_bottom">
          {/* Feature 1: Free Shipping */}
          <div className="hero_content">
            <div className="info_icon"><FaShippingFast className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Free shipping on order</p>
            </div>
          </div>
          {/* Feature 2: 24/7 Support */}
          <div className="hero_content">
            <div className="info_icon"><BiSupport className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>24/7 Support</h3>
              <p>Full support on process</p>
            </div>
          </div>
          {/* Feature 3: Secure Payment */}
          <div className="hero_content">
            <div className="info_icon"><MdPayment className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>Secure Payment</h3>
              <p>Your payment is secured</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero;

