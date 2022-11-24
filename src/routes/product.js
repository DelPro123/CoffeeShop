import React from 'react';
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import ProductContent from '../components/productcontent';
import Footer from '../components/footer';


const Product = () => {
  return (
   <div>
   <Navbar/>
   <HeadLine 
      heading="Our Best Product"
      intro="Most sale coffee."
   />
   <ProductContent/>
   <Footer/>
   </div>
  )
}

export default Product;