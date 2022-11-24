import React from 'react'
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import Footer from '../components/footer';
import AboutContent from '../components/aboutcontent';
const About = () => {
  return (
    <div>
   <Navbar/>
   <HeadLine 
      heading="About Us"
      intro="Born to make history."
    />
    <AboutContent/>
   <Footer/>
   </div>
)
}

export default About;