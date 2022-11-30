import React from "react";
import "../components/contactcontent.css"

const ContactContent=()=>{
    return(
        <div className="contact-content">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Caffeine Ave., Pilapil Dental Clinic, Tanay, Rizal, Philippines&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="myFrame">
                    </iframe>
                </div>
            </div>
                <div className="form">
                    <form className="contact-form">
                        <label className="contact-label">Your name</label>
                        <input className="contact-input" type="text" placeholder="Enter your name"></input>
                        <label  className="contact-label">Email</label>
                        <input className="contact-input" type="email" placeholder="Enter your email"></input>
                        <label  className="contact-label">Subject</label>
                        <input className="contact-input" type="text" placeholder="Enter your subject"></input>
                        <label  className="contact-label">Messages</label>
                        <textarea rows="6" placeholder="Type your messages"></textarea>
                        <button to="/contact" className="Product-btn">Submit</button>
                    </form>
                </div>
        </div>
    
    )
}
export default ContactContent;