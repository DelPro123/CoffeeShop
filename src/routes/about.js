import React from 'react'
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import Footer from '../components/footer';
const About = () => {
  return (
    <div>
   <Navbar/>
   <HeadLine 
      heading="About Us"
      intro=" "
    />
   <Footer/>
   </div>
)
}

export default About;