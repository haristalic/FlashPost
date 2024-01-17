import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegCopyright,
} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-container">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </div>
      <ul>
        <li>PRIVACY</li>
        <li>TERMS</li>
      </ul>
      <p>
        <FaRegCopyright />
        2024.ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
