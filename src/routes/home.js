import React from 'react';
import "../index.css";
import Navbar from '../components/navbar';
import HomeContent from '../components/homecontent'
import ProductContent from '../components/productcontent';
import Footer from '../components/footer';
import AboutContent from '../components/aboutcontent';

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HomeContent/>
            <h2 className='title'>Product</h2>
            <ProductContent/>
            <h2 className='title'>About Us</h2>
            <AboutContent/>
            <Footer/>
        </div>
    )
}
export default Home;