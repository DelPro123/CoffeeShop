import React, { useState } from 'react';
import "./navbarstyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const[click,Click]=useState(false);
  const handleClick=()=>Click(!click);

  const [navcolor,Navcolor]=useState(false);
  const changenavcolor =()=>{
    if (window.scrollY>=1){
          Navcolor(true);
    }else{
      Navcolor(false);
    }
  };
  window.addEventListener("scroll",changenavcolor);
  return (
    <div className={navcolor ? 'header header-navchange':'header'}>
        <Link to="/">
            <h2 className='logo-name'>Caffeine Avenue.</h2>
        </Link>
        <ul className={click ? "navbar-menu active":"navbar-menu"}>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/product">Product</Link>
            </li>
            <li>
            <Link to="/about">about</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{color:"fff"}}/>):(<FaBars size={20} style={{color:"fff"}}/>)};
        </div>
    </div>
  )
}

export default Navbar;