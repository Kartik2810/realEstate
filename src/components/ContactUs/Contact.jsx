import React from 'react';
import "./Contact.css";
import contact from "../../images/contact.jpg"

function Contact() {
  return (
    <div id="contactus"> 
    <section className='cont-wrapper'>
      <div className='cont-container'>
         <div className='left-side'>
             <p>Our Contact US</p>
             <h1>Easy to contact us</h1>
             <span>We always ready to help by providing the best services for you. we believe a good blace to live can make you life better</span>
             
             <div className="main-card">
             <div className="mini-card">
                <i class="icon fa-solid fa-phone-volume"></i>
                <span id="call">Call</span>
                <div className="c-btn">
                  <button className="btn">call now</button>
                </div>
             </div>

             <div className="mini-card">
             <i class=" icon fa-brands fa-rocketchat"></i>
                <span id="call">Chat</span>
                <div className="c-btn">
                  <button className="btn">chat now</button>
                </div>
             </div>
             <div className="mini-card">
             <i class="icon fa-solid fa-message"></i>
                <span id="call">Message</span>
                <div className="c-btn">
                  <button className="btn">message</button>
                </div>
             </div>
             </div>
         </div>
        
         <div className='right-side'>
             <div className="ov-left">
                <img src={contact} alt="" srcset="" width={750}/>
             </div>
         </div>
      </div>
    </section>
    </div>
  )
}

export default Contact