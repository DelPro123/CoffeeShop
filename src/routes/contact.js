import React from 'react'
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeadLine 
      heading="Contact Us"
      intro="We are always open."
    />
    <Footer/>
    </div>
  )
}

export default Contact;