import React from 'react';
import { BsGithub, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import './Footer.css';
import { MdEmail } from 'react-icons/md';
 
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer_content">
        <div className="footer_brand">
          <h2>ClothsKart</h2>
          <p>Redefining Classic Fashion for Men and Women</p>
        </div>
        <div className="footer_socials">
          <a href="https://github.com/MohdAzimuddin" target="_blank" rel="noopener noreferrer">
            <BsGithub className="footer_icon" />
          </a>
          <a href="mailto:sfsuper2020@gmail.com?subject=Your Subject&body=Your Message" target="_blank" rel="noopener noreferrer">
            <MdEmail className="footer_icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitter className="footer_icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp className="footer_icon" />
          </a>
        </div>
      </div>
      <div className="copy">
        <p>Copyright © 2025 ClothsKart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
