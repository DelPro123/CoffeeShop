import "./footerstyle.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FaFacebook, FaGlobe, FaHome, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="flex-footer">
            <div className="flext-info">
                <p><FaHome size={15} style={{color:"fff", marginRight:"1rem"}}/>
                Avenue 123, Manila,Philippines</p>
            </div>
            <div className="flext-info">
                <p><FaPhone size={15} style={{color:"fff", marginRight:"1rem"}}/>
                +63-99999-99999</p>
            </div>
            <div className="flext-info">
                <p><FaGlobe size={15} style={{color:"fff", marginRight:"1rem"}}/>
                www.caffeineaveniu.netlify</p>
            </div>
        </div>
        <div className="flex-footer">
            <Link to="/">Home</Link>
            <Link to="/shop">Product</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">Contact Us</Link>   
        </div>
       <div className="flex-footer">
         <p>
            You can also follow us on :
        </p>
        <p className="soc-med" style={{color:"3b5998", marginTop:".5rem"}}>
            <FaFacebook size={40} style={{color:"3b5998", marginRight:"1rem"}}/>
            <FaTwitter size={40} style={{color:"00acee", marginRight:"1rem"}}/>
            <FaInstagram size={40} style={{color:"8a3ab9", marginRight:"1rem"}}/>
        </p>
        <br/>
        <p><span id="copyright">&copy;</span>2022 by del. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;