import React from 'react';
import Navbar from '../components/navbar';
import HomeContent from '../components/homecontent'
import ProductContent from '../components/productcontent';
import Footer from '../components/footer';

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HomeContent/>
            <ProductContent/>
            <Footer/>
        </div>
    )
}
export default Home;