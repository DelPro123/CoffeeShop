import React from "react";
import "../components/productmodal.css";
const Modal=({open,close})=>{
    if(!open)return null;
    
    return(
        <div className="Modal-container">
            <div className="Modal-content">
            <div className="intro">
                <h4>Thank you for buying</h4>
                <h4 onClick={close} className="closeBtn">x</h4>
            </div>
            <br/>
            <form className="buy-form">
                        <label className="buy-label">Your name</label>
                        <input className="buy-input" type="text" placeholder="Enter your name"></input>
                        <label className="buy-label">Email</label>
                        <input className="buy-input" type="email" placeholder="Enter your email"></input>
                        <label className="buy-label">Address</label>
                        <input className="buy-input" type="email" placeholder="Enter your address"></input>
                        <label className="buy-label">Product</label>
                        <select name="product">
                            <option value="Barako">Barako</option>
                            <option value="Espresso">Espresso</option>
                            <option value="3 in 1">3 in 1</option>
                        </select>
                        <label className="buy-label">Quantity</label>
                        <select name="product">
                            <option value="Barako">1</option>
                            <option value="Espresso">2</option>
                            <option value="3 in 1">5</option>
                        </select>
                        <br/>
                        <button to="/contact" className="Product-btn">Buy</button>
                </form>
            </div>
        </div>
    )
}
export default Modal;