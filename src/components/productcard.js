import React, {useState} from "react";
import "./productstyle.css";
import Modal from "./productmodal";
const ProductCard =(props)=>{
    const [openmodal,setOpenModal] = useState(false);
    return(
        <div className="product">
                <div className="product-container">
                <div className="product-card">
                <img src={props.imgsrc} alt="product_no1"/>
                <h2 className="product-title">{props.title}</h2>
                <div className="product-details">
                    <p>{props.text}</p>
                    <button onClick={()=>setOpenModal(true)} className="Contact-btn" style={{alignItems:"center"}} >Buy Now!</button>
                </div>
                </div>
                </div>
                <Modal open={openmodal} close={()=> setOpenModal(false)}/>
        </div>
        
    )
}

export default ProductCard;