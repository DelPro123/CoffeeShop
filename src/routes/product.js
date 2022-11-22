import React from 'react';
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import Footer from '../components/footer';


const Product = () => {
  return (
   <div>
   <Navbar/>
   <HeadLine 
      heading="Our Best Product"
      intro="Most sale coffee."
   />
   <Footer/>
   </div>
  )
}

export default Product;