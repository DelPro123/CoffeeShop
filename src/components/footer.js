import "./footerstyle.css";

import React from 'react';
import { FaHome, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="flex-footer">
            <div className="flext-info">
                <FaHome size={30} style={{color:"fff", margin:"2rem"}}/>
                <p>Avenue 123, Manila,Philippines</p>
            </div>
            <div className="flext-info">
                <FaPhone size={30} style={{color:"fff", margin:"2rem"}}/>
                <p>+63-99999-99999</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;