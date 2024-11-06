import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './Navbarr.css'

function Navbarr() {
  return (
    <div>
        <div className='navbarr'>
        <ul >
        <li>
          <IoCallOutline /> +919838586839
        </li>
        <li>
          <a href="https://www.facebook.com/luckballacademy/" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> 
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/luckball_academy" target="_blank" rel="noopener noreferrer" >
            <FaSquareInstagram /> 
          </a>
        </li>
        <li>
          <a href="https://x.com/luckballacademy?mx=2" target="_blank" rel="noopener noreferrer" >
            <FaTwitter /> 
          </a>
        </li>
      </ul>

      </div>
      
    </div>
  )
}

export default Navbarr
