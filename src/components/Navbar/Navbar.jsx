import React, { useState } from 'react';
import images from "../../constants/images";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="nav_logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#Home'>Home</a></li>
      <li className='p__opensans'><a href='#Pages'>Pages</a></li>
      <li className='p__opensans'><a href='#Conatct_us'>Conatct us</a></li>
      <li className='p__opensans'><a href='#Blog'>Blog</a></li>
      <li className='p__opensans'><a href='#Landing'>Landing</a></li>

    </ul>

    <div className='app__navbar-login'>
      <a href='#Login' className='p__opensans'>Log In / Registration</a>
    
    <div/>
    <a href='/' className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' size={27} onClick={() =>{setToggleMenu(true)}}/>

    {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdOutlineRestaurantMenu className='overlay__close' size={27} onClick={() =>{setToggleMenu(false)}}/>
      <ul className='app__navbar-smallscreen_links'>
      <li><a href='#Home' onClick={() => {setToggleMenu(false)}}>Home</a></li>
      <li><a href='#Pages' onClick={() => {setToggleMenu(false)}}>Pages</a></li>
      <li><a href='#Conatct_us' onClick={() => {setToggleMenu(false)}}>Conatct us</a></li>
      <li><a href='#Blog' onClick={() => {setToggleMenu(false)}}>Blog</a></li>
      <li><a href='#Landing' onClick={() => {setToggleMenu(false)}}>Landing</a></li>

    </ul>

      </div>
    )};
    </div>
  </nav>

)};

export default Navbar;
