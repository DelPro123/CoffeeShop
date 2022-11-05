import React from 'react';
import Navbar from '../components/navbar';
import HomeContent from '../components/homecontent'
import Footer from '../components/footer';

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HomeContent/>
            <Footer/>
        </div>
    )
}
export default Home;