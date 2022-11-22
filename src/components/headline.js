import React from "react";
import "./headstyle.css";

const HeadLine =(props)=>{
    return(
        <div className="Product">
            return(
                <div className="head">
                    <div className="heading">
                       <p id="coffee-intro">{props.heading}</p>
                       <p id="quotes">{props.intro}</p>
                    </div>
                </div>
            )
        
        </div>
    )
}

export default HeadLine;