import React from 'react'
import './Contact.css'
import Navbarr from '../Navbarr/Navbarr'
import Mainnavbarr from '../mainnavbarr/Mainnavbarr'
import Copyright from '../Copyright/Copyright'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
function Contact() {
  return (
    <div>
        <Navbarr/>
        <Mainnavbarr/>
        <div className='contact'>
            <div className="contact-desc">
            <p>Contact Us</p>
            <p>Get Intouch</p>
            </div>

        </div>
        <div className='location'>
            <div className='phone'>
                <IoIosCall/>
                <p>Phone</p>
                <p>Feel free to call us. We would be happy to help you.</p>
                <p>+91 9838586839</p>
            </div>
            <div className='location'>
                <CiLocationArrow1/>
                <p>Phone</p>
                <p>Civil Line, New Hyderabad Lucknow,
                UP - 226007</p>
                <p>View On Google Map</p>
            </div>
            <div className='email'>
                <MdOutlineEmail/>
                <p>email</p>
                <p>Email us for any enquiry. We will get in touch with you as soon as possible.</p>
                <p>luckballacademy@gmail.com</p>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
