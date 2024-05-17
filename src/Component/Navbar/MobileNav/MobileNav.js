
import React, { useState } from 'react';
import './MobileNav.css';
import logo from '../../../Asset/logo.png';

function MobileNav({ isOpen, toggleMenu }) {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img src={logo} alt='no logo' />
        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>
          <li>
            <a className='menu-item'>Skill</a>
          </li>
          <li>
            <a className='menu-item'>Work Experience</a>
          </li>
          <li>
            <a className='menu-item'>Contact Me</a>
          </li>
          <button className='contact-btn'>Hire Me</button>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
