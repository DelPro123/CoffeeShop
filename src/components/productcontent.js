import React from "react";
import "./productcontentstyle.css";
import ProductData from "./productdata";
import ProductCard from "./productcard";
const ProductContent =()=>{
    return(
        <div className="product-content">
          {ProductData.map((val,ind)=>{
            return(
                <ProductCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                />
            )
          })}
        </div>
    )
}

export default ProductContent;