import React from 'react';
import "./Header.css"
import logo2 from "../../images/logo2.png";
import {Link} from "react-scroll";

function Header() {
  return (
    <>
    <section className='h-wrapper'>
        <div className='h-container'>
            <img src={logo2} alt='' width={100}/>

            <div className='h-menu'>
                <Link className="link" to="residencies" spy={true} smooth={true}>Residencies</Link>
                <Link className="link" to="ourValue" spy={true} smooth={true}>Our Value</Link>
                <Link className="link" to="contactus" spy={true} smooth={true}>Contact us</Link>
                <Link className="link" to="hero" spy={true} smooth={true}>Get Started</Link>
                <Link className="link" to="companies" spy={true} smooth={true}>Companies</Link>
                <button className='button'>
                   <Link className="link" to="contactus" spy={true} smooth={true}>Contacts</Link>
                </button>
            </div>
        </div>
      
    </section>

    
    </>
  )
}

export default Header