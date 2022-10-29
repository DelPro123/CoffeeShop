import React, { useState } from 'react';
import "./navbarstyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const[click,Click]=useState(false);
  const handleClick=()=>Click(!click);
  return (
    <div className="header">
        <Link to="/">
            <h1>Caffeine Avenue.</h1>
        </Link>
        <ul className={click ? "navbar-menu active":"navbar-menu"}>
            <li>
            <Link to="/">home</Link>
            </li>
            <li>
            <Link to="/project">project</Link>
            </li>
            <li>
            <Link to="/about">about</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{color:"fff"}}/>):(<FaBars size={20} style={{color:"fff"}}/>)};
        </div>
    </div>
  )
}

export default Navbar;