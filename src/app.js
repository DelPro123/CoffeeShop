import React from "react";
import "./index.css";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Product from "./routes/product";

import{ Routes, Route } from "react-router-dom";

const App=()=>{
    return(     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default App;