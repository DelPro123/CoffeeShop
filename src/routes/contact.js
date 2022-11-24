import React from 'react'
import Navbar from '../components/navbar';
import HeadLine from '../components/headline';
import Footer from '../components/footer';
import ContactContent from '../components/contactcontent';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeadLine 
      heading="Contact Us"
      intro="We are always open."
    />
    <ContactContent/>
    <Footer/>
    </div>
  )
}

export default Contact;