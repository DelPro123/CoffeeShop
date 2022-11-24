import React from "react";
import "./productstyle.css";
import {Link} from "react-router-dom";
const ProductCard =(props)=>{
    return(
        <div className="product">
                <div className="product-container">
                <div className="product-card">
                <img src={props.imgsrc} alt="product_no1"/>
                <h2 className="product-title">{props.title}</h2>
                <div className="product-details">
                    <p>{props.text}</p>
                    <Link to="/product" className="Contact-btn" style={{alignItems:"center"}} >Buy Now!</Link>
                </div>
                </div>
                </div>
        </div>
        
    )
}

export default ProductCard;