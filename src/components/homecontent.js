import "./homecontentstyle.css";

import React from 'react';
import IntroImg from '../asset/intro.jpg';
import {Link} from 'react-router-dom';
const HomeContent = () => {
  return (
    <div className="coffee-intro">
         <div className="mask">
              <img className="intro-img" src={IntroImg} alt="IntroImg"/>
         </div>
         <div className="content">
            <p className="coffee-love"> I love Caffeine</p>
            <p className="quotes"> Good ideas start with coffee</p>
            <div className="btn">
              <Link to="/contact" className="Contact-btn" >Order Now!</Link>
              <Link to="/shop" className="Product-btn">Product</Link>
            </div>
         </div>
    </div>
    
  )
}

export default HomeContent;