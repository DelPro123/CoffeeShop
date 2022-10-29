import "./herostyle.css";

import React from 'react';
import IntroImg from '../asset/intro.jpg';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero">
         <div className="mask">
              <img className="intro-img" src={IntroImg} alt="IntroImg"/>
         </div>
         <div className="content">
            <p> I love Coffe</p>
            <p> Good ideas start with coffee</p>
            <Link to="/project" path>Shop</Link>
            <Link to="/contact" path>contact</Link>
        
         </div>
    </div>
    
  )
}

export default Hero;