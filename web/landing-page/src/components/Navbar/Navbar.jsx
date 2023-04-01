import React from 'react';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from 'react-icons/sl';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo-icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <p>Med<span>Mesh</span></p>
        </Link>
        <div className="socialLinks">
          <div className="socialIcon">
            <SlSocialFacebook />
          </div>
          <div className="socialIcon">
            <SlSocialInstagram />
          </div>
          <div className="socialIcon">
            <SlSocialTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
