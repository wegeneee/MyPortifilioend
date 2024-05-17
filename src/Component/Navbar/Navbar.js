import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Asset/logo1.png';
import MobileNav from './MobileNav/MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'



function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={logo} alt='no laga' />
          <ul>
            <li>
            
              <Link to='/home' className='menu-item'> Home</Link>
            </li>
            <li>
               <Link to='/skill' className='menu-item'> Skill</Link>
            </li>
            <li>
              <Link to='/expriance' className='menu-item'>Work Experience</Link>  
            </li>
            <li>
              <Link to='/contactme' className='menu-item'>Contact Me</Link>
            </li>
            <button className='contact-btn'>Hire Me</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <FontAwesomeIcon icon={openMenu ? faTimes : faBars} style={{ fontSize: '1.8rem' }} />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
